import React from 'react';
import { Popover } from 'antd';
import Icon from '../../../../components/Icon';
import { Container, Wrapper, RightWrapper, Profile, Menu } from './styles';
import { useAuth } from '../../../../hooks/auth';

const Header: React.FC = ({ canvasRef }: any) => {
  const { currentUser, signOut } = useAuth();

  const ProfileMenu = () => (
    <Menu>
      <a href="##">
        <span>My Profile</span>
      </a>
      <a href="##" onClick={() => signOut()}>
        <span>logout</span>
      </a>
    </Menu>
  );
  return (
    <Container>
      <Wrapper>
        <Icon name="curvedArrowLeft" mode="overlayed" />
        <Icon name="curvedArrowRight" mode="overlayed" />
      </Wrapper>
      <RightWrapper>
        <Profile>
          <Popover placement="bottom" content={ProfileMenu} trigger="click">
            <img src={currentUser.photoURL} alt="alt Rodrigo gomes" />
          </Popover>
          <div>
            <span>Bem vindo</span>
            <strong>{currentUser.displayName}</strong>
          </div>
        </Profile>
      </RightWrapper>
    </Container>
  );
};

export default Header;
