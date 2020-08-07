import React, { Component } from 'react';
import {AppRegistry, StyleSheet,TouchableHighlight, TouchableOpacity,FlatList, Image, Text, View, ScrollView, Dimensions,Alert, ImageComponent,ImageBackground,TextInput,CheckBox} from 'react-native';
import Header from '../../BasicComponent/AuthHeader/header';
import Menu from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import SignupFooter from '../../../../Asstets/MainAsstets/Signup.png';
class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            isSelected:false,
            setSelection:true,
         }
    }
    render() { 
        const Back_Menu = (  
            <Menu name="dots-vertical" size={35} color="white" style={{marginLeft:10, marginTop:20}}/>  
           );
        //const [isSelected, setSelection] = useState(false);
        return ( 
            <ScrollView>
                <View style={{flex: 1, flexDirection: 'column',backgroundColor:'#FAFAFA'}}>
                    <View>
                        <Header/>
                    </View>
                    <View style={styles.loginForm}>
                        <View style={{marginLeft:'10%',marginTop:20,marginBottom:10}}>
                            <Text style={styles.LoginHeading}>Getting Started</Text>
                            <Text style={styles.LoginHeading}>Login in to find yur Patner!</Text>
                        </View>
                        <View style={{flexDirection:'row'}}>
                            <View style={{flexDirection:'column',height:300,width:'50%',}}>
                                <View style={{flexDirection:'row'}}>
                                    <TextInput
                                        value="First Name"
                                        style={styles.input}
                                        underlineColorAndroid="red"
                                    />
                                </View>
                                <View style={{flexDirection:'row',marginTop:50}}>
                                    <TextInput
                                        value="UserName"
                                        style={styles.input}
                                        underlineColorAndroid="red"
                                    />
                                </View>
                                <View style={{flexDirection:'row',marginTop:50}}>
                                    <TextInput
                                        value="Password"
                                        style={styles.input}
                                        underlineColorAndroid="red"
                                    />
                                </View>
                            </View>
                            <View style={{flexDirection:'column',height:300,width:'50%',}}>
                                <View style={{flexDirection:'row'}}>
                                    <TextInput
                                        value="SunerName"
                                        style={styles.input}
                                        underlineColorAndroid="red"
                                    />
                                </View>
                            <View style={{flexDirection:'row',marginTop:50}}>
                                <TextInput
                                    value="Email"
                                    style={styles.input}
                                    underlineColorAndroid="red"
                                />
                            </View>
                            <View style={{flexDirection:'row',marginTop:50}}>
                                <TextInput
                                    value="Confirm Password"
                                    style={styles.input}
                                    underlineColorAndroid="red"
                                />
                            </View>
                        </View>
                        </View>
                        <View style={{flexDirection:'row',marginTop:10}}>
                            <View style={{flexDirection:'column',height:60,width:'20%',}}>
                                <CheckBox
                                    value={this.state.isSelected}
                                    onValueChange={this.state.setSelection}
                                    style={styles.checkbox}
                                />
                            </View>
                            <View style={{flexDirection:'column',height:60,width:'80%',}}>
                                <Text>Be creating your accout you agree to our</Text>
                                <TouchableOpacity>
                                    <Text style={styles.label}>Term and Use & Privacy Policy</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={{width:"100%",height:100,}}>
                            <TouchableOpacity style={styles.button}>
                                <Text style={{color:'white',fontSize:20,alignSelf:'center'}}>To Register{Back_Menu}</Text>
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
      height:600,
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
        width: 130,
        height: 50,
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
        alignSelf:'center',
        marginTop:30,
    }
});
export default SignUp;