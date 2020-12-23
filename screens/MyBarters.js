import React ,{Component} from 'react'
import {View, Text,TouchableOpacity,ScrollView,FlatList,StyleSheet} from 'react-native';
import {Card,Icon,ListItem} from 'react-native-elements'
import MyHeader from '../components/MyHeader.js'
import firebase from 'firebase';
import db from '../config.js';

export default class MyBarterScreen extends Component{
    static navigationOptions = {header: null};
    constructor(){
     super();
     this.state={
         userId : firebase.auth().currentUser.email,
         allBarters : []
     }
      this.exchangeRef = null
    }

    getAllBarters=()=>{
        this.exchangeRef = db.collection("my_barters").where("donor_id","==",this.state.userId)
        .onSnapshot((snapshot)=>{
          var allBarters = snapshot.docs.map(document => document.data());
          this.setState({
              allBarters : allBarters
          })
        })
    }

    keyExtractor = (item,index) => index.toString()

    renderItem=({item,i})=>{
        <ListItem
          key={i}
          title={item.item_name}
          titleStyle={{color: 'black',fontWeight: 'bold'}}
          subtitle={"Requested By :" + item.requested_by + "\nStatus : " + item.request_status} 
          rightElement={
              <TouchableOpacity style={styles.button}>
                  <Text style={{color:'#ffff'}}>Exchange</Text>
              </TouchableOpacity>
          }
          leftElement={<Icon name="item" type="font-awesome" color="#696969"/>}
          bottomDivider       
        />
    }

     componentDidMount(){
         this.getAllBarters()
     }
     componentWillUnmount(){
         this.exchangeRef();
     }


     render(){
         return(
             <View style={{flex: 1}}>
              <MyHeader navigation={this.props.navigation} title="My Barters"/>
              <View>
                {this.state.allBarters.length === 0
                ?(
                    <View style={styles.subtitle}>
                     <Text>List Of All Barters</Text>
                    </View>
                )
                :(
                  <FlatList
                    keyExtractor={this.keyExtractor}
                    data={this.state.allBarters}
                    renderItem={this.renderItem}
                  />
                 )
                }  
              </View>
             </View>
         )
     }
     }

const styles = StyleSheet.create({
    button:{
      width:100,
      height:30,
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:"#ff5722",
      shadowColor: "#000",
      shadowOffset: {
         width: 0,
         height: 8
       },
      elevation : 16
    },
    subtitle :{
      flex:1,
      fontSize: 20,
      justifyContent:'center',
      alignItems:'center'
    }
  })