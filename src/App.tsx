import React from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink, Container } from 'reactstrap';
import MusicControlBar from './components/MusicControlBar';
import UtilitiesNavBar from './components/UtilitiesNavBar';

const App: React.FC = () => {

  return (
    <Container>
      <UtilitiesNavBar/>
      <MusicControlBar/>
    </Container>
  );
};

export default App;