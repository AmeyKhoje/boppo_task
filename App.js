/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
} from 'react-native';

import { SafeAreaProvider } from 'react-native-safe-area-context'
import { BottomTabScreens } from './src/navigation/BottomTabNavigation';


const App = () => {

	return (
		<SafeAreaProvider>
			<NavigationContainer>
				<BottomTabScreens />
			</NavigationContainer>
		</SafeAreaProvider>
	);
};

export default App;
