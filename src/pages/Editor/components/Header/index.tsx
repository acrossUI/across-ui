import React from 'react';
import { Popover } from 'antd';
import Icon from '../../../../components/Icon';
import { Container, Wrapper, RightWrapper, Profile, Menu } from './styles';
import { useAuth } from '../../../../hooks/auth';

const Header: React.FC = ({ canvasRef }: any) => {
  const { currentUser, signOut } = useAuth();
  /*
  setTimeout(() => {
    currentUser.updateProfile({
      displayName: 'Pedrão',
      photoURL:
        'https://ca.slack-edge.com/T0261DERU-U0W6XH605-eccc0a672ece-512',
    });
  }, 1000);
  */

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
        <Icon name="undo" type="duotone" />
        <Icon name="redo" type="duotone" />
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
