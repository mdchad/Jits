import React from 'react';
import {
  ChakraProvider,
  Box,
  HStack,
  Grid,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import Sidebar from './Components/Sidebar';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Screens/Home';
import Settings from './Screens/Settings';

function App() {
  return (
    <Router>
      <ChakraProvider theme={theme}>
        <Box textAlign="center" fontSize="xl">
          <Grid minH="100vh">
            {/*<ColorModeSwitcher justifySelf="flex-end" />*/}
            <HStack spacing={8} h={'100%'}>
              <Sidebar />
              <Switch>
                <Route path="/home">
                  <Home />
                </Route>
                <Route path="/settings">
                  <Settings />
                </Route>
              </Switch>
            </HStack>
          </Grid>
        </Box>
      </ChakraProvider>
    </Router>
  );
}

export default App;
