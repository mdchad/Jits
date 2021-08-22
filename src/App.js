import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom';
import Home from './Screens/Home';
import Settings from './Screens/Settings';
import { useEffect, useState } from 'react';
import { Box } from '@chakra-ui/react';

import Login from './Screens/Login';
import { useUser } from './utils/useUser';

import React from 'react';
import {
  useColorModeValue,
  Drawer,
  DrawerContent,
  useDisclosure,
} from '@chakra-ui/react';
import SidebarContent from './Components/Sidebar';
import MobileNav from './Components/Header';

const routes = [
  {
    path: '/home',
    component: <Home />,
  },
  {
    path: '/settings',
    component: <Settings />,
  },
  {
    path: '/jobs',
    component: <Home />,
  },
];

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);
  const { user } = useUser();

  useEffect(() => {
    let token = localStorage.getItem('refresh_token');
    if (token) {
      setLoggedIn(true);
      setLoading(false);
      if (window.location.pathname === '/') {
        window.location = '/home';
      }
    } else {
      setLoggedIn(false);
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (user) {
      setLoggedIn(true);
    }
  }, [user]);

  function PrivateRoute({ children, ...rest }) {
    return (
      <Route
        {...rest}
        render={({ location }) => {
          return loggedIn ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: '/login',
                state: { from: location },
              }}
            />
          );
        }}
      />
    );
  }

  return (
    <>
      <Router>
        <Route path="/login">
          <Login />
        </Route>
        {!loading &&
          routes.map((route, i) => {
            return (
              <PrivateRoute path={route.path} key={i}>
                <SidebarWithHeader user={user}>
                  {route.component}
                </SidebarWithHeader>
              </PrivateRoute>
            );
          })}
      </Router>
    </>
  );
}

function SidebarWithHeader({ children, user }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box minH="100vh" bg={useColorModeValue('gray.100', 'gray.900')}>
      <SidebarContent
        onClose={() => onClose}
        display={{ base: 'none', md: 'block' }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav onOpen={onOpen} user={user} />
      <Box ml={{ base: 0, md: 60 }}>{children}</Box>
    </Box>
  );
}
