import React, { Component } from 'react';
import {AppRegistry, StyleSheet,TouchableHighlight, TouchableOpacity,FlatList, Image, Text, View, ScrollView, Dimensions,Alert, ImageComponent,ImageBackground,TextInput,CheckBox} from 'react-native';
import Header from '../../BasicComponent/Header/header';
import Check from '../../BasicComponent/Header/Group79.png';
import menu from '../../../../Asstets/MainAsstets/Group8.png';
import BlogPic from '../../../../Asstets/MainAsstets/BlogPic.png';
class Blog extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            item:[{id:'4'},{id:'6'},]
         }
    }
    render() { 
        return ( 
            <ScrollView>
            <View style={{flex: 1, flexDirection: 'column',backgroundColor:'#FAFAFA'}}>
                <View>
                    <Header/>
                </View>
            </View>
            <View style={{flexDirection:'row'}}>
                <View style={{flexDirection:'column',height:70,width:'80%',}}>
                    <TextInput style={styles.Input}/>
                </View>
                <View style={{flexDirection:'column',height:70,width:'20%',}}>
                    <TouchableOpacity>
                        <Image source={menu} style={{width:35,height:28,margin:15}}/>
                    </TouchableOpacity>
                </View>
            </View>
            <ScrollView>
            <View style={{width:"94%",height:'auto',marginLeft:"3%"}}>
                <FlatList
                        data={this.state.item}
                        renderItem={({ item }) => (
                            <View>
                                <View style={{flexDirection:'row',marginBottom:10}}>
                                    <View style={{flexDirection:'column',height:150,width:'45%',}}>
                                        <Image source={BlogPic} resizeMode='contain' style={{width:'100%',height:"100%"}}/>
                                    </View>
                                    <View style={{flexDirection:'column',height:150,width:'55%',backgroundColor:'white'}}>
                                        <Text style={{margin:10,fontSize:28,color:'#E10066',fontWeight:'bold'}}>Sponsors</Text>
                                        <Text style={{marginLeft:10,color:'#E10066',marginTop:-10,fontSize:12}}>3 monthes ago susponser</Text>
                                        <TouchableOpacity style={styles.ReadingButton}>
                                            <Text style={{color:'white',margin:10}}>Continue Reading</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                <TouchableOpacity style={styles.LoadMore}>
                                    <Text style={{color:'white',textAlign:'center',marginTop:8,fontSize:15}}>Load More</Text>
                                </TouchableOpacity>
                            </View>
                        )}
                        />
            </View>
            </ScrollView>
            <View>
                <TouchableOpacity style={{width:200,height:50,borderRadius:50,backgroundColor:'#E10066',alignSelf:'center',marginLeft:15,marginBottom:30,marginTop:20}}>
                    <Text style={{margin:10,fontSize:20,color:'white'}}>Back to Home Page</Text>
                </TouchableOpacity>
            </View>
                <View style={styles.Sixcontainer}>
                    <View style={styles.ImageContainer}>
                        <Image source={Check} style={{marginTop:-25,marginLeft:170}}/>
                    </View>
                </View>
            </ScrollView>
         );
    }
}

const styles=StyleSheet.create({    
    Input:{
        width:'80%',
        height:50,
        backgroundColor:'#E10066',
        alignSelf:'center',
        marginTop:10,
        borderRadius:40,

    },
  Sixcontainer:{
    width:'100%',
    height:50,
    backgroundColor:'#BCE2F1',
    shadowOpacity: 0.58,
    shadowRadius: 9.00,
    elevation: 16,
  },
  ReadingButton:{
    width:'70%',
    marginLeft:10,
    marginTop:20,
    height:40,
    backgroundColor:'#E10066',
    borderRadius:20,
  },
  LoadMore:{
    width:'94%',
    height:40,
    marginLeft:"3%",
    marginTop:5,
    marginBottom:10,
    backgroundColor:'#E10066',
    borderRadius:40
  },
    ImageContainer:{
      width:'30%',
      height:100,
      marginTop:10,
      marginLeft:10
  },
}); 
export default Blog;