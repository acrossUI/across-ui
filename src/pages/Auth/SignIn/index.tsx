import React, { useEffect, useState, useRef } from 'react';
import { Form, Input, Button, Spin } from 'antd';
import { Link } from 'react-router-dom';
import app from '../../../config/firebase';
import { useAuth } from '../../../hooks/auth';
import macbookImg from '../../../assets/img/macbook.png';
import githubImg from '../../../assets/img/githubImg.svg';
import googleImg from '../../../assets/img/googleImg.svg';
import facebookImg from '../../../assets/img/facebookImg.svg';

import Icon from '../../../components/Icon';

import {
  Container,
  AuthContainer,
  BannerWrapper,
  BannerContent,
  BlurOverlay,
  FormWraper,
  SocialIconsWrapper,
  SignupLink,
  SocialIconsDescription,
} from './styles';

const SignIn: React.FC = () => {
  const { currentUser, signIn } = useAuth();
  const [loading, setLoading] = useState(false);

  const formRef = useRef(null);

  const onFinish = (values) => {
    setLoading(true);
    signIn({ email: values.email, password: values.password }).then(() => {
      setLoading(false);
    });
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
                loading={loading}
              >
                {loading ? null : 'SignIn'}
              </Button>
            </Form.Item>
          </Form>
          <SocialIconsDescription>
            <div />
            <span>or continue with</span>
            <div />
          </SocialIconsDescription>
          <SocialIconsWrapper>
            <a href="">
              <img src={githubImg} alt="" />
            </a>

            <a href="">
              <img src={googleImg} alt="" />
            </a>
            <a href="">
              <img src={facebookImg} alt="" />
            </a>
          </SocialIconsWrapper>

          <SignupLink>
            <span>Don’t have a account yet?</span>
            <Link to="/signup">Click here to SignUp</Link>
          </SignupLink>
        </FormWraper>
      </AuthContainer>
    </Container>
  );
};

export default SignIn;
