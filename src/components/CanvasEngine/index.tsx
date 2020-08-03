import React, {
  useEffect,
  useImperativeHandle,
  forwardRef,
  useState,
  useContext,
} from 'react';

import { v4 } from 'uuid';

// import difference from 'lodash/difference';
import { fabric } from 'fabric';
import { FabricContext } from '../../context/fabricContext';

const FabricObject = {
  itext: {
    create: ({ text, ...option }) =>
      new fabric.IText(text, {
        ...option,
      }),
  },
  textbox: {
    create: ({ text, ...option }) =>
      new fabric.Textbox(text, {
        ...option,
      }),
  },
  image: {
    create: ({ element, ...option }) =>
      new fabric.Image(null, {
        ...option,
      }),
  },
  triangle: {
    create: (option) =>
      new fabric.Triangle({
        ...option,
      }),
  },
  circle: {
    create: (option) =>
      new fabric.Circle({
        ...option,
      }),
  },
  rect: {
    create: (option) =>
      new fabric.Rect({
        ...option,
      }),
  },
  line: {
    create: (option) =>
      new fabric.Line([250, 125, 250, 175], {
        ...option,
      }),
  },
};

interface CanvasProps {
  onAdd?: Function;
  onRemove?: Function;
  onSelect?: Function;
  onModified?: Function;
  ref?: React.MutableRefObject<any>;
  paperBoardRef?: React.MutableRefObject<any>;
}

const Canvas = forwardRef(
  (
    { onAdd, onRemove, onSelect, onModified, paperBoardRef }: CanvasProps,
    ref,
  ) => {
    const [clipboard, setClipBoard] = useState(null);
    const [canvas, initCanvas] = useContext(FabricContext);

    const defaultCanvasOption = {
      preserveObjectStacking: true,
      selection: true,
      defaultCursor: 'default',
      backgroundColor: '#f3f3f3',
    };

    const handlers = {
      add: (obj) => {
        const newObject = FabricObject[obj.type].create(obj.option);
        canvas.add(newObject);
        canvas.centerObject(newObject);
        onAdd(newObject);
      },
      remove: () => {
        const activeObject = canvas.getActiveObject();
        if (activeObject.type !== 'activeSelection') {
          if (onRemove) {
            onRemove(activeObject);
          }
          canvas.remove(activeObject);
        } else {
          const activeObjects = canvas.getActiveObjects();
          canvas.discardActiveObject();
          activeObjects.forEach((object) => {
            if (onRemove) {
              onRemove(object);
            }
            canvas.remove(object);
          });
        }
      },
      saveToJSON: () => {
        return JSON.stringify(canvas.toJSON(['id']));
      },
      loadJSON: (json) => {
        canvas.clear();
        canvas.loadFromJSON(json, () => {
          canvas.renderAll();
        });
      },
      removeById: (id) => {
        const findObject = handlers.findById(id);
        if (findObject) {
          if (onRemove) {
            onRemove(findObject);
          }
          canvas.remove(findObject);
        }
      },
      find: (obj) => {
        handlers.findById(obj.id);
      },
      findById: (id) => {
        let findObject;
        const exist = canvas.getObjects().some((obj: any) => {
          if (obj.id === id) {
            findObject = obj;
            return true;
          }
          return false;
        });
        if (!exist) {
          console.warn('Not found object by id.');
          return exist;
        }
        return findObject;
      },
      duplicate: () => {
        const activeObject = canvas.getActiveObject();
        activeObject.clone((clonedObj) => {
          canvas.discardActiveObject();
          clonedObj.set({
            left: clonedObj.left + 10,
            top: clonedObj.top + 10,
            evented: true,
          });
          if (clonedObj.type === 'activeSelection') {
            clonedObj.canvas = canvas;
            clonedObj.forEachObject((obj) => {
              obj.set('id', v4());
              canvas.add(obj);
            });
            if (onAdd) {
              onAdd(clonedObj);
            }
            clonedObj.setCoords();
          } else {
            clonedObj.set('id', v4());
            canvas.add(clonedObj);
            if (onAdd) {
              onAdd(clonedObj);
            }
          }
          canvas.setActiveObject(clonedObj);
          canvas.requestRenderAll();
        });
      },
      copy: () => {
        canvas.getActiveObject().clone((cloned) => {
          setClipBoard(cloned);
        });
      },
      paste: () => {
        clipboard.clone((clonedObj) => {
          canvas.discardActiveObject();
          clonedObj.set({
            left: clonedObj.left + 10,
            top: clonedObj.top + 10,
            evented: true,
          });
          if (clonedObj.type === 'activeSelection') {
            clonedObj.canvas = canvas;
            clonedObj.forEachObject((obj) => {
              obj.set('id', v4());
              canvas.add(obj);
              if (onAdd) {
                onAdd(obj);
              }
            });
            clonedObj.setCoords();
          } else {
            clonedObj.set('id', v4());
            canvas.add(clonedObj);
            if (onAdd) {
              onAdd(clonedObj);
            }
          }
          const newClipboard = Object.assign({}, clipboard, {
            top: 10,
            left: 10,
          });
          setClipBoard(newClipboard);
          canvas.setActiveObject(clonedObj);
          canvas.requestRenderAll();
        });
      },
      getActiveObject: () => canvas.getActiveObject(),
      getActiveObjects: () => canvas.getActiveObjects(),
      set: (key, value) => {
        const activeObject = canvas.getActiveObject();
        activeObject.set(key, value);
        activeObject.setCoords();
        canvas.requestRenderAll();
      },
      setObject: (obj: any) => {
        const activeObject: any = canvas.getActiveObject();
        if (obj.id === activeObject.id) {
          Object.keys(obj).forEach((key) => {
            if (obj[key] !== activeObject[key]) {
              activeObject.set(key, obj[key]);
              activeObject.setCoords();
            }
          });
        } else {
          console.warn('Object id not equal active object id.');
        }
      },

      findByName: (name) => {
        let findObject;
        const exist = canvas.getObjects().some((obj) => {
          if (obj.name === name) {
            findObject = obj;
            return true;
          }
          return false;
        });
        if (!exist) {
          console.warn('Not found object by name.');
          return exist;
        }
        return findObject;
      },
      select: (id) => {
        const findObject = handlers.findById(id);
        if (findObject) {
          canvas.setActiveObject(findObject);
          canvas.requestRenderAll();
        }
      },
      selectById: (id) => {
        const findObject = handlers.findById(id);
        if (findObject) {
          canvas.setActiveObject(findObject);
          canvas.requestRenderAll();
        }
      },
      selectByName: (name) => {
        const findObject = handlers.findByName(name);
        if (findObject) {
          canvas.setActiveObject(findObject);
          canvas.requestRenderAll();
        }
      },
      scaleToResize: (width, height) => {
        const activeObject = handlers.getActiveObject() as any;
        const obj = {
          id: activeObject.id,
          scaleX: width / activeObject.width,
          scaleY: height / activeObject.height,
        };
        handlers.setObject(obj);
        activeObject.setCoords();
        canvas.requestRenderAll();
      },
    };

    const events = {
      modified: (opt) => {
        onModified(opt.target);
      },
      mousedown: (opt) => {
        if (onSelect) {
          onSelect(opt.target);
        }
      },
      resize: (currentWidth, currentHeight, nextWidth, nextHeight) => {
        canvas.setWidth(nextWidth);
        canvas.setHeight(nextHeight);
        const diffWidth = nextWidth / 2 - currentWidth / 2;
        const diffHeight = nextHeight / 2 - currentHeight / 2;
        canvas.getObjects().forEach((object, index) => {
          if (index !== 0) {
            object.set('left', object.left + diffWidth);
            object.set('top', object.top + diffHeight);
          }
        });
        canvas.renderAll();
      },
    };

    useEffect(() => {
      const localCanvas = new fabric.Canvas(
        'c',
        Object.assign({}, defaultCanvasOption, {
          width: paperBoardRef.current.clientWidth,
          height: paperBoardRef.current.clientHeight,
          fill: '#fff',
          hasControls: false,
          selectable: false,
          lockMovementX: true,
          lockMovementY: true,
          preserveObjectStacking: true,
          top: 0,
          left: 0,
          hoverCursor: 'default',
        }),
      );

      localCanvas.on({
        'object:modified': events.modified,
        'mouse:down': events.mousedown,
      });

      initCanvas(localCanvas);

      // canvas.setShadow('2px 3px 3px  rgba(0,0,0,0.15)');
    }, []);

    /*

  componentWillReceiveProps(nextProps) {
    const prevKeys = Object.keys(props.items);
    const nextKeys = Object.keys(nextProps.items);
    const differenceKeys = difference(nextKeys, prevKeys);
    if (
      props.width !== nextProps.width ||
      props.height !== nextProps.height
    ) {
      events.resize(
        props.width,
        props.height,
        nextProps.width,
        nextProps.height,
      );
    }
    if (differenceKeys.length) {
      const { add } = handlers;
      const key = differenceKeys[0];
      add(key, nextProps.items[key]);
    }
  }
 */

    useImperativeHandle(ref, () => ({
      handlers,
    }));

    return <canvas id="c" />;
  },
);

export default Canvas;