import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, {Component} from 'react';
import HomePage from '../../../src/Screens/HomePage'
import { ScreenNames } from '../../Constants/ScreenNames';
import ButtonsPage from '../../Screens/ButtonsPage';
import SecondPage from '../../Screens/SecondPage';

const Stack = createStackNavigator();

class Routes extends Component {
    constructor(props: any) {
        super(props)
    }

    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name={ScreenNames.HomePage} component={HomePage} options={{headerShown: false}} />
                    <Stack.Screen name={ScreenNames.ButtonsPage} component={ButtonsPage} options={{headerShown: false}} />
                    <Stack.Screen name={ScreenNames.SecondPage} component={SecondPage} options={{headerShown: false}} />
                </Stack.Navigator>
            </NavigationContainer>
        )
    }
}

export default Routes;