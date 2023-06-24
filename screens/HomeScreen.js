import { StyleSheet, Text, View,Button, Image,SafeAreaView, TextInput, Touchable, TouchableOpacity, FlatList,Dimensions } from 'react-native';
import COLORS from '../consts/colors';
import React,{useState} from 'react';
import {MaterialIcons} from '@expo/vector-icons'
import plants from '../consts/plants'
const width =Dimensions.get("screen").width/2-30

function HomeScreen({navigation}) {
  const categories=['POPULAR','ORGANIC','INDOORS','SYNTHETIC'];
  const [categoryIndex,setCategoryIndex]=useState(0);
  const CategoryList=()=>{
    return (
      <View style={styles.listItem}>
          {
            categories.map((listItem,index)=>(
              <TouchableOpacity onPress={()=>setCategoryIndex(index)} key={index} activeOpacity={0.8}>
                <Text  style={[styles.categoryText,categoryIndex==index && styles.categorySelectedText]}> 
                {listItem}
              </Text>
              </TouchableOpacity>
            ))
          }
      </View>
    )
  }

  const Card=({plantItem})=>{
    return (
      <View style={styles.card}>
        <View style={{alignItems:'flex-end'}}>
          <View style={{backgroundColor:plantItem.like?'rgba(245,42,42,0.2)':'rgba(0,0,0,0.2)',borderRadius:15,height:25,aspectRatio:1,justifyContent:'center',alignItems:'center'}}>
          <MaterialIcons name='favorite' color={plantItem.like?COLORS.red:'rgb(0,0,0,0)'} size={18} />
          </View>
        </View>
        <View style={{height:100,alignItems:'center'}}>
          <Image source={plantItem.img} style={{flex:1,resizeMode:'contain'}}/>
        </View>
        <Text style={{fontWeight:'bold',fontSize:16}}>{plantItem.name}</Text>
        <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:10}}>
          <Text  style={{fontWeight:'bold',fontSize:19}}>${plantItem.price}</Text>
          <View style={{height:25, width:25,backgroundColor:COLORS.green,borderRadius:5,alignItems:'center',justifyContent:'center'}}>
            <Text style={{fontSize:22,color:COLORS.white,fontWeight:'bold'}}>+</Text>
          </View>
        </View>
      </View>
    );
  }

    return (  
      <View style={styles.container}>
        <View style={styles.header}>
          <View >
            <Text style={{fontSize:20,fontWeight:'bold'}}>Welcome to</Text>
            <Text style={{fontSize:35,fontWeight:'bold',color:COLORS.green}}>Plant Shop</Text>
          </View>
          <MaterialIcons name='shopping-cart' size={25}/>
        </View>
        <View style={styles.searchContainer}>
          <View style={styles.searchField}>
            <MaterialIcons name="search" size={25}/>
            <TextInput placeholder='search' style={{fontSize:18, flex:1,fontWeight:'bold',color:COLORS.dark}}/>
          </View>
          <View style={styles.iconBg}>
            <MaterialIcons name='sort' size={30} color='white'/>
          </View>
        </View>

        <CategoryList/>

        <FlatList columnWrapperStyle={{justifyContent:"space-between"}} contentContainerStyle={
          {marginTop:10,
          paddingBottom:50}
        } showsVerticalScrollIndicator={false} 
        keyExtractor={(item)=>item.id} 
        data={plants} numColumns={2} 
        renderItem={({item})=><Card plantItem={item}/>}/>
      </View>
      
    );
  }


  const styles=StyleSheet.create({
    
    container:{
      flex:1,
      marginTop:25,
      paddingHorizontal:20,
      gap:20,
      backgroundColor:COLORS.white
    },
    searchContainer:{
      flexDirection:'row',
      gap:8
    },
    header:{
      marginTop:20,
      flexDirection:'row',
      justifyContent:'space-between'
    },
    searchField:{
      flexDirection:'row',
      flex:1,
      backgroundColor:COLORS.light,
      alignItems:'center',
      borderRadius:10,
      height:50,
      paddingHorizontal:10
    },
    listItem:{
      flexDirection:'row',
      justifyContent:'space-between'
    },
    categoryText:{
      fontSize:16,
      fontWeight:'bold',
      color:'grey'
    },
    categorySelectedText:{
      color:COLORS.green,
      borderBottomColor:COLORS.green,
      borderBottomWidth:1,
      paddingBottom:8
    },
    iconBg:{
      backgroundColor:COLORS.green,
      borderRadius:10,
      height:50,
      width:50,
      alignItems:'center',
      justifyContent:'center'
    },
    card:{
      height:220,
      backgroundColor:COLORS.light,
      width,
      marginHorizontal:2,
      borderRadius:10,
      marginBottom:15,
      padding:15
    }
  })

  export default HomeScreen;