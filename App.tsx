import React, {Component} from 'react';
import { Provider } from 'react-redux';
import Routes from './src/Helper/Navigation/Routes';
import Store from './src/Storage/Reducers/Store';
import {Alert, NativeModules} from 'react-native';
import 'react-native-gesture-handler';

const {EmulatorModule} = NativeModules;

class App extends Component {
  constructor(props: any) {
    super(props)
  }

  async componentDidMount() {
    const isEmulator = await EmulatorModule.isEmulator();
    if (isEmulator) {
      Alert.alert('Your app is running on Emulator');
    }
    else {
      Alert.alert('Your app is running on Physical device')
    }
  }

  render() {
    return (
      <Provider store={Store}>
        <Routes/>
      </Provider>
    )
  }
}

export default App;