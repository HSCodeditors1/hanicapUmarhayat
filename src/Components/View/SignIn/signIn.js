import React, { Component } from 'react';
import {AppRegistry, StyleSheet,TouchableHighlight, TouchableOpacity,FlatList, Image, Text, View, ScrollView, Dimensions,Alert, ImageComponent,ImageBackground,TextInput,CheckBox} from 'react-native';
import Header from '../../BasicComponent/AuthHeader/header';
import Menu from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import SignupFooter from '../../../../Asstets/MainAsstets/Signup.png';
import Fb from '../../../../Asstets/MainAsstets/fblogin.png';
class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const Back_Menu = (  
            <Menu name="dots-vertical" size={35} color="white" style={{marginLeft:10, marginTop:20}}/>  
           );
        return ( 
            <ScrollView>
                <View style={{flex: 1, flexDirection: 'column',backgroundColor:'#FAFAFA'}}>
                    <View>
                        <Header/>
                    </View>
                    <View style={styles.loginForm}>
                        <View style={{marginLeft:'10%',marginTop:20,marginBottom:10}}>
                            <Text style={styles.LoginHeading}>Welcome Back</Text>
                            <Text style={styles.LoginHeading}>Sign in your account</Text>
                        </View>
                        <View style={{width:"100%",height:180,}}>
                            <View>
                            <TextInput
                                value="UserName"
                                style={styles.input}
                                underlineColorAndroid="green"
                            />
                            </View>
                            <View style={{marginTop:30}}>
                            <TextInput
                                value="Password"
                                style={styles.input}
                                underlineColorAndroid="green"
                            />
                            </View>
                        </View>
                        <View style={{flexDirection:'row',width:"100%",height:70,}}>
                            <View style={{flexDirection:'column',height:70,width:'50%',}}>
                                <TouchableOpacity style={styles.button}>
                                    <Text style={{color:'white',fontSize:20,alignSelf:'center'}}>Login{Back_Menu}</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{flexDirection:'column',height:70,width:'50%',}}>
                                <TouchableOpacity>
                                    <Text style={{color:'#E10066',fontSize:15,margin:15,}}>Forget Password</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={{width:150,height:80,marginLeft:20}}>
                            <TouchableOpacity >
                                <Image source={Fb} resizeMode='contain' style={{width:180,height:80}}/>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{width:"100%",height:100}}>
                        <Image source={SignupFooter}/>
                    </View>
                </View>
            </ScrollView>
         );
    }
}
const styles=StyleSheet.create({    
    loginForm:{
      width:'90%',
      height:450,
      marginLeft:'5%',
      borderRadius:50,
      marginBottom:50,
      marginTop:25,
      backgroundColor:'#FFFFFF',
      shadowOpacity: 0.38,
      shadowRadius: 5.00,
      elevation: 11,
  },
    LoginHeading:{
        fontSize:20,
        color:'#E10066',
        margin:5,
        //fontWeight:'bold',
    },
    input: {
        marginLeft:20,
        width: 300,
        height: 60,
      },
    checkbox: {
        alignSelf:'flex-end',
        marginRight:5,
    },
    label:{
        color:'#E10066',
    },
    button:{
        width:170,
        height:50,
        borderRadius:40,
        backgroundColor:'#E10066',
        marginLeft:15,
    }
});
export default SignIn;