import React, {
  useRef,
  useEffect,
  useImperativeHandle,
  forwardRef,
} from 'react';

// import difference from 'lodash/difference';
import { fabric } from 'fabric';

const MARKER = {
  default: {
    create: () =>
      new fabric.IText('\uf041', {
        fontSize: 60,
        fontFamily: 'FontAwesome',
        centeredScaling: true,
      }),
  },
};

const TEXT = {};

const DRAWING = {
  triangle: {
    create: () =>
      new fabric.Triangle({
        width: 30,
        height: 30,
      }),
  },
  circle: {
    create: () =>
      new fabric.Circle({
        radius: 40,
      }),
  },
  rect: {
    create: () =>
      new fabric.Rect({
        width: 40,
        height: 40,
      }),
  },
};

const ITEM_TEMPLATE = {
  MARKER,
  TEXT,
  DRAWING,
};

const canvasSize = {
  width: 600,
  height: 400,
};

interface CanvasProps {
  props?: any;
  ref?: any;
}

const Canvas: React.FC<CanvasProps> = forwardRef((props, ref) => {
  const containerRef = useRef(null);
  var canvas, mainRect;

  const defaultCanvasOption = {
    preserveObjectStacking: true,
    selection: true,
    defaultCursor: 'default',
    backgroundColor: '#f3f3f3',
  };

  const handlers = {
    add: (key, item) => {
      const newItem = ITEM_TEMPLATE[item.type][item.key].create();
      canvas.add(newItem);
      canvas.centerObject(newItem);
    },
    delete: (key) => {},
    duplicate: (key) => {
      console.log(canvas.getActiveObject());
    },
    select: (item) => {
      /*
      console.log(item);
      const { onSelect } = this.props;
      if (onSelect) {
        onSelect(item);
      }
      */
    },
  };

  const events = {
    mousewheel: () => {
      canvas.on('mouse:wheel', (opt: any) => {
        const delta = opt.e.deltaY;
        let zoom = canvas.getZoom();
        if (delta > 0) {
          zoom -= 0.01;
        } else {
          zoom += 0.01;
        }

        canvas.zoomToPoint(
          new fabric.Point(canvas.getCenter().left, canvas.getCenter().top),
          zoom,
        );
        opt.e.preventDefault();
        opt.e.stopPropagation();
      });
    },
    mousedown: () => {
      canvas.on('mouse:down', (opt) => {
        handlers.select(opt.target);
      });
    },
    resize: (currentWidth, currentHeight, nextWidth, nextHeight) => {
      canvas.setWidth(nextWidth);
      canvas.setHeight(nextHeight);
      canvas.centerObject(mainRect);
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

  const initializeCanvas = () => {
    canvas = new fabric.Canvas(
      'c',
      Object.assign({}, defaultCanvasOption, {
        width: containerRef.current.clientWidth,
        height: containerRef.current.clientHeight,
      }),
    );
    mainRect = new fabric.Rect({
      width: canvasSize.width,
      height: canvasSize.height,
      fill: '#fff',
      hasControls: false,
      selectable: true,
      lockMovementX: true,
      lockMovementY: true,
      top: 0,
      left: 0,
      hoverCursor: 'default',
    });
    canvas.add(mainRect);
    canvas.centerObject(mainRect);

    events.mousewheel();
    events.mousedown();
  };

  useEffect(() => {
    initializeCanvas();
  }, []);

  /*

  componentWillReceiveProps(nextProps) {
    const prevKeys = Object.keys(this.props.items);
    const nextKeys = Object.keys(nextProps.items);
    const differenceKeys = difference(nextKeys, prevKeys);
    if (
      this.props.width !== nextProps.width ||
      this.props.height !== nextProps.height
    ) {
      this.events.resize(
        this.props.width,
        this.props.height,
        nextProps.width,
        nextProps.height,
      );
    }
    if (differenceKeys.length) {
      const { add } = this.handlers;
      const key = differenceKeys[0];
      add(key, nextProps.items[key]);
    }
  }
 */

  useImperativeHandle(ref, () => ({
    handlers,
  }));

  return (
    <div
      ref={containerRef}
      style={{
        border: '1px solid red',
        width: '100%',
        height: '100%',
      }}
    >
      <canvas id="c" />
    </div>
  );
});

export default Canvas;
