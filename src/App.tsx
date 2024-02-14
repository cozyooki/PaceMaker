/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  StyleSheet,
} from 'react-native';
import Home from './screens/home/home';

function App(): React.JSX.Element {
  return (
    <Home></Home>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 20,
    flex: 1,
    backgroundColor: 'red',
  },
  date: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default App;
