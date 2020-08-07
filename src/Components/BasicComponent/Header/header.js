import React, { Component } from 'react';
import {AppRegistry, StyleSheet,TouchableHighlight, TouchableOpacity,FlatList, Image, Text, View, ScrollView, Dimensions,Alert, ImageComponent,ImageBackground,TextInput} from 'react-native';
import Menu from './Group8.png';
import Logo1 from './l1.png';
import Plus from './Group78.png';
import drop from './Polygon1.png';
class Header extends Component {
    state = {  }
    render() { 
        return ( 
            <ScrollView>
                  <View style={{flex: 1, flexDirection: 'column',backgroundColor:'white',marginBottom:10}}>
            
            <View style={styles.firstcontainer}>
          
                       <View style={{flexDirection:'row'}}>
                       <View style={{flexDirection:'column',height:170,width:130,backgroundColor:''}}>
                       <Image source={Menu} style={{marginLeft:20,width:45,height:35,marginTop:100,marginBottom:10}}/>
                      </View>
                       <View style={{flexDirection:'column',height:170,width:180,backgroundColor:'',}}>
                        
                       <Image source={Logo1}  style={{marginTop:10,width:150,height:150,}}/>
                       </View>
                       <View style={{flexDirection:'column',height:170,width:100,backgroundColor:''}}>
                       <View style={{flexDirection:'row',marginLeft:-10,marginTop:125}}>
                       <View style={{flexDirection:'column',height:30,width:25,backgroundColor:''}}>
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
                    </View>
                    </View>
                    </ScrollView>
         );
    }
}

const styles=StyleSheet.create({    
  firstcontainer:{
      width:'100%',
      height:170,
      backgroundColor:'#BCE2F1',
      shadowOpacity: 0.58,
      shadowRadius: 9.00,
      elevation: 16,
  },
 
});
export default Header;