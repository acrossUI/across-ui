import React from 'react';
import { Popover, Input } from 'antd';
import Icon from '../../../../components/Icon';
import {
  Container,
  Wrapper,
  RightWrapper,
  Profile,
  Menu,
  Settings,
  ZoomWrapper,
  UndoRedoWrapper,
} from './styles';
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
      <Settings>
        <Icon name="sliders-h" />
      </Settings>
      <Wrapper>
        <Input
          onPressEnter={() => console.log('pressebter')}
          onBlur={() => console.log('pressebter')}
          value="Relatorio X"
        />
        <ZoomWrapper>
          <button type="button" onClick={() => console.log('cliqued')}>
            <Icon name="search-minus" />
          </button>
          <small>100%</small>
          <button type="button" onClick={() => console.log('cliqued')}>
            <Icon name="search-plus" />
          </button>
        </ZoomWrapper>
        <UndoRedoWrapper>
          <Icon name="undo" />
          <Icon name="redo" />
        </UndoRedoWrapper>
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
