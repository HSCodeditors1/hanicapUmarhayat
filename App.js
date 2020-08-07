import React, { Component } from 'react';
import { View } from 'react-native';
import Privacy from './src/Components/View/PrivacyPolicy/privacypolicy';
import SignIn from './src/Components/View/SignIn/signIn';
import SignUp from './src/Components/View/SignUp/signUp';
import Blog from './src/Components/View/Blog/blog';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <View>
        <Privacy/>
      </View>
     );
  }
}
 
export default App;