import React, { Component } from 'react';
import {AppRegistry, StyleSheet,TouchableHighlight, TouchableOpacity,FlatList, Image, Text, View, ScrollView, Dimensions,Alert, ImageComponent,ImageBackground,TextInput,CheckBox} from 'react-native';
import Header from '../../BasicComponent/AuthHeader/header';
class PrivacyPolicy extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  
            <ScrollView>
                <View style={{flex: 1, flexDirection: 'column',backgroundColor:'#FAFAFA'}}>
                    <View>
                        <Header/>
                    </View>
                    <View>
                        <Text style={{textAlign:'center',margin:20,fontSize:30,fontWeight:'bold',color:'#E10066'}}>Privacy & Policy</Text>
                    </View>
                    <View style={{margin:20,}}>
                        <Text style={{fontWeight:'bold',fontSize:20,color:'#E10066'}}>1.What your Term use here.</Text>
                        <Text style={{color:'#E10066',marginTop:5}}>sjn bljskwdn kskd jndsknklns ds
                            dnvfdklsnvlsdvklldsnvlkdsnvkld m vf
                            snd vjsdflj vnjsdv jksdf vjk,sb jbls
                            snb sjkl bsdn vklsdh
                             bsdjk bed 
                        </Text>
                    </View>
                    <View style={{margin:20,height:170}}>
                    <Text style={{fontWeight:'bold',fontSize:20,color:'#E10066'}}>2.Rand.</Text>
                        <Text style={{color:'#E10066',marginTop:5}}>sjn bljskwdn kskd jndsknklns ds
                            dnvfdklsnvlsdvklldsnvlkdsnvkld m vf
                            snd vjsdflj vnjsdv jksdf vjk,sb jbls
                            snb sjkl bsdn vklsdh
                             bsdjk bed 
                        </Text>
                    </View>
                    <View>
                        <TouchableOpacity style={{width:200,height:50,borderRadius:50,backgroundColor:'#E10066',alignSelf:'center',marginLeft:15,}}>
                            <Text style={{margin:10,fontSize:20,color:'white'}}>Back to Home Page</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{width:'100%',height:50,backgroundColor:'#59B8DE',marginTop:40}}>
                        
                    </View>
                </View>
            </ScrollView>
        );
    }
}
 
export default PrivacyPolicy;