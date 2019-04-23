import React, {Component} from 'react';
import { 
  StyleSheet,
  Text, 
  View,
  ImageBackground,
  Image,
  TextInput,
  Dimensions,
  TouchableOpacity,

} from 'react-native';

import bgImage from './assets/blurBg.png'
import logo from './assets/shoping_bag_white.png'
import Icon from 'react-native-vector-icons/Ionicons'

const { width : WIDTH } = Dimensions.get('window')

export default class App extends Component {
  constructor(){
    super()
    this.state = {
      showPass: true,
      press: false 
    }
  }

  showPass = () => {
    if (this.state.press == false){
      this.setState({ showPass: false, press: true })
    } else {
      this.setState({ showPass: true, press: false })
    }
  }

  render() {
    return (
      <ImageBackground source={bgImage} style={styles.backgroundContainer}>
        <View style={styles.logoContainer}>
          <Image source={logo} style={styles.logo} />
          <Text style={styles.logoText}>F A S H I O N</Text>
        </View>
        <View style={styles.inputContainer}>
          <Icon name={'ios-person'} size={28} color={'rgba(255, 255, 255, 0.7)'} style={styles.inputIcon}/> 
          <TextInput
            style={styles.input}
            placeholder={'Username'}
            placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
            underlineColorAndroid='transparent'
          />
        </View>
        <View style={styles.inputContainer}>
          <Icon name={'ios-lock'} size={28} color={'rgba(255, 255, 255, 0.7)'} style={styles.inputIcon}/> 
          <TextInput
            style={styles.input}
            placeholder={'Password'}
            secureTextEntry={this.state.showPass}
            placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
            underlineColorAndroid='transparent'
          />

          <TouchableOpacity style={styles.btnEye} onPress={this.showPass.bind(this)} >
            <Icon name={ this.state.press == false ? 'ios-eye' : 'ios-eye-off'} size={26} color={'rgba(255, 255, 255, 0.7)'} />
          </TouchableOpacity>

        </View>

        <TouchableOpacity style={styles.btnLogin}>
            <Text style={styles.text}>L O G I N</Text>
        </TouchableOpacity>
          
        <TouchableOpacity>
        <Text style={styles.text}>F O R G O T   P A S S W O R D</Text>
        </TouchableOpacity>  
        
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: null,
    height: null,
  },
  logo:{
    width: 120,
    height: 120,

  },
  logoContainer:{
    alignItems: 'center',
    marginBottom: 50,

  },
  logoText:{
    color:'white',
    fontSize: 20,
    fontWeight: '500',
    marginTop: 10,
    opacity: 0.5,  
  },
  inputContainer:{
    marginTop:10,
  },
  input:{
    width: WIDTH - 55,
    height: 45,
    borderRadius: 25,
    fontSize: 16,
    paddingLeft: 45,
    backgroundColor: 'rgba(0, 0, 0, 0.35)',
    color: 'rgba(255, 255, 255, 0.7 )',
    marginHorizontal: 25,
  },
  inputIcon:{
    position: 'absolute',
    top: 10,
    left: 37,
  },
  btnEye:{
    position: 'absolute',
    top: 10,
    right: 37,
  },
  btnLogin:{
    width: WIDTH - 55,
    height: 45,
    borderRadius: 25,
    backgroundColor: '#432577',
    justifyContent: 'center',
    marginTop: 20
  },
  text:{
    color: 'rgba(255, 255, 255, 0.7 )',
    fontSize: 16,
    textAlign: 'center',

  }

});
