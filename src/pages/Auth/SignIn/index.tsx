import React, { useEffect, useRef } from 'react';
import { Form, Input, Button, notification } from 'antd';
import app from '../../../config/firebase';
import { useAuth } from '../../../hooks/auth';
import macbookImg from '../../../assets/img/macbook.png';

import Icon from '../../../components/Icon';

import {
  Container,
  AuthContainer,
  BannerWrapper,
  BannerContent,
  BlurOverlay,
  FormWraper,
} from './styles';

const SignIn: React.FC = () => {
  const { signIn } = useAuth();

  const formRef = useRef(null);

  const onFinish = (values) => {
    signIn({ email: values.email, password: values.password });
  };
  return (
    <Container>
      <AuthContainer>
        <BannerWrapper>
          <BlurOverlay>
            <BannerContent>
              <img src={macbookImg} alt="macbook" />
              <span>
                Welcome to <br /> Weaver Reports
              </span>
            </BannerContent>
          </BlurOverlay>
        </BannerWrapper>
        <FormWraper>
          <Form
            style={{ width: '100%' }}
            ref={formRef}
            initialValues={{}}
            layout="vertical"
            onFinish={onFinish}
          >
            <Form.Item name="email">
              <Input
                prefix={<Icon name="mail" />}
                size="large"
                type="email"
                placeholder="email"
              />
            </Form.Item>
            <Form.Item name="password">
              <Input
                prefix={<Icon name="padlock" />}
                size="large"
                type="password"
                placeholder="password"
              />
            </Form.Item>
            <Form.Item>
              <Button
                style={{ width: '100%' }}
                type="primary"
                size="large"
                htmlType="submit"
              >
                SignIn
              </Button>
            </Form.Item>
          </Form>
        </FormWraper>
      </AuthContainer>
    </Container>
  );
};

export default SignIn;
