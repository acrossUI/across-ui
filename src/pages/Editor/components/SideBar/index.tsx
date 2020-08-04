import React, { useEffect, useRef } from 'react';
import { Form, Input, Slider, Collapse, Col, Row, Divider } from 'antd';
import ColorPicker from '../../../../components/ColorPicker';
import Icon from '../../../../components/Icon';
import {
  Container,
  SubSection,
  SubSectionTitle,
  InputWrapper,
  InputTitle,
} from './styles';
import { chevronDown } from '../../../../components/Icon/genericIcon';

const SideBar = ({ onChange, selectedItem }: any) => {
  const defaultInputStyle = {
    width: 82,
  };
  const formRef = useRef(null);

  useEffect(() => {
    if (selectedItem) {
      formRef.current.setFieldsValue({
        width: selectedItem.width * selectedItem.scaleX,
        height: selectedItem.height * selectedItem.scaleY,
        left: selectedItem.left,
        top: selectedItem.top,
        angle: selectedItem.angle,
      });
    }
  }, [selectedItem]);

  return (
    <Container>
      <Form
        ref={formRef}
        initialValues={{}}
        layout="vertical"
        // onFinish={onFinish}
        // onFinishFailed={onFinishFailed}
        onFieldsChange={onChange}
      >
        <Collapse
          defaultActiveKey={['1']}
          expandIcon={({ isActive }) => (
            <Icon name={isActive ? 'chevronDown' : 'chevronRight'} />
          )}
        >
          <Collapse.Panel header="Layout" key="1">
            <SubSection>
              <SubSectionTitle>subsection</SubSectionTitle>
              <Row>
                <Form.Item
                  style={defaultInputStyle}
                  label={<InputTitle>x</InputTitle>}
                  name="left"
                >
                  <Input type="number" />
                </Form.Item>
                <Form.Item
                  style={defaultInputStyle}
                  label={<InputTitle>y</InputTitle>}
                  name="top"
                >
                  <Input />
                </Form.Item>
              </Row>
              <Row>
                <Form.Item
                  style={defaultInputStyle}
                  label={<InputTitle>width</InputTitle>}
                  name="width"
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  style={defaultInputStyle}
                  label={<InputTitle>height</InputTitle>}
                  name="height"
                >
                  <Input />
                </Form.Item>
              </Row>

              <Row>
                <Form.Item
                  style={defaultInputStyle}
                  label={<InputTitle>angle</InputTitle>}
                  name="angle"
                >
                  <Slider min={0} max={360} style={{ width: '130px' }} />
                </Form.Item>
              </Row>
              <Row>
                <ColorPicker />
              </Row>
            </SubSection>
          </Collapse.Panel>

          <Collapse.Panel header="TYPOGRAPY" key="2">
            <SubSection>
              <SubSectionTitle>subsection</SubSectionTitle>
              <Row>
                <InputWrapper>
                  <InputTitle>X</InputTitle>
                  <Input type="text" />
                </InputWrapper>
                <InputWrapper>
                  <InputTitle>X</InputTitle>
                  <Input type="text" />
                </InputWrapper>
              </Row>
              <Row>
                <InputWrapper>
                  <InputTitle>X</InputTitle>
                  <Input type="text" />
                </InputWrapper>
                <InputWrapper>
                  <InputTitle>X</InputTitle>
                  <Input type="text" />
                </InputWrapper>
              </Row>
            </SubSection>
          </Collapse.Panel>
          <Collapse.Panel header="PAGE" key="3" />
        </Collapse>
      </Form>
    </Container>
  );
};

export default SideBar;
