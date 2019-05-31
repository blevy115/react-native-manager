import React, { Component } from 'react';
import { SafeAreaView } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
  componentWillMount() {
    const firebaseConfig = {
      apiKey: 'AIzaSyB75q5q-tvj_ua--E0AollDDBPoOlbdp6c',
      authDomain: 'manager-76e72.firebaseapp.com',
      databaseURL: 'https://manager-76e72.firebaseio.com',
      projectId: 'manager-76e72',
      storageBucket: 'manager-76e72.appspot.com',
      messagingSenderId: '32465380876',
      appId: '1:32465380876:web:91fb12f301b6e947'
    };
    firebase.initializeApp(firebaseConfig);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <SafeAreaView style={{ flex: 1 }}>
          <Router />
        </SafeAreaView>
      </Provider>
    );
  }
}

export default App;
