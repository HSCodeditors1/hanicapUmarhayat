import React, { Component } from 'react';
import {AppRegistry, StyleSheet,TouchableHighlight, TouchableOpacity,FlatList, Image, Text, View, ScrollView, Dimensions,Alert, ImageComponent,ImageBackground,TextInput} from 'react-native';
import Logo from '../../../../Asstets/BasicAsstets/logo(1).png';
import menuicon from '../../../../Asstets/BasicAsstets/Group61.png';
import Menu from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import Plus from '../../../../Asstets/BasicAsstets/Group78.png';
import drop from '../../../../Asstets/BasicAsstets/Polygon1.png';
class Hrader extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const Back_Menu = (  
            <Menu name="dots-vertical" size={35} color="white" style={{marginLeft:10, marginTop:20}}/>  
           );
        return ( 
            <View>
                <View style={{flex: 1, flexDirection: 'column',marginBottom:10}}>
                    <View style={styles.MainContainer}>
                        <View style={{flexDirection:'row'}}>
                            <View style={{flexDirection:'column',height:170,width:'40%',backgroundColor:''}}>
                                <Image source={Logo} style={{width:130,height:130,margin:20,}}/>
                            </View>
                            <View style={{flexDirection:'column',height:170,width:'60%',backgroundColor:''}}>
                                <View style={{flexDirection:'row',marginTop:'25%',marginLeft:'30%'}}>
                                    <View style={{flexDirection:'column',height:70,width:100,}}>
                                    <View style={{flexDirection:'column',height:70,width:100,}}>
                       <View style={{flexDirection:'row',marginTop:25,marginLeft:15}}>
                       <View style={{flexDirection:'column',height:30,width:25,backgroundColor:'red'}}>
                         <Image source={Plus}/>
                       </View>
                       <View style={{flexDirection:'column',height:30,width:25,backgroundColor:''}}>
                         <Text style={{color:'white',fontSize:20}}>DE</Text>
                       </View>
                       <View style={{flexDirection:'column',height:30,width:30,backgroundColor:''}}>
                       <Image source={drop} style={{width:20,height:10,marginTop:10,marginLeft:5}}/>
                       </View>
                      </View>
                      </View>
                                    </View>
                                    <View style={{flexDirection:'column',height:60,width:50,backgroundColor:''}}>
                                        <TouchableOpacity>
                                            <Image source={menuicon} style={{margin:15}}/>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
         );
    }
}
const styles=StyleSheet.create({    
    MainContainer:{
      width:'100%',
      height:170,
      backgroundColor:'#59B8DE',
      shadowOpacity: 0.58,
      shadowRadius: 9.00,
      elevation: 16,
  },
});
export default Hrader;