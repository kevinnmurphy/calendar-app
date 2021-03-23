import React from 'react';

// import Logo from './Logo';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';

export const Navbar = () => {
  // //   const { isAuthenticated } = useAuth0();
  //   const authButton = isAuthenticated ? <LogoutButton /> : <LoginButton />;
  //   const navTabs = isAuthenticated ? (
  //     <Nav className='mr-auto'>
  //       <LinkContainer to='/profile'>
  //         <Nav.Link>Profile</Nav.Link>
  //       </LinkContainer>
  //       <LinkContainer to='/playlists'>
  //         <Nav.Link>Playlists</Nav.Link>
  //       </LinkContainer>
  //     </Nav>
  //   ) : (
  //     <div />
  //   );

  return (
    <div>
      <LoginButton />
      <LogoutButton />
    </div>
  );
};

export default Navbar;
