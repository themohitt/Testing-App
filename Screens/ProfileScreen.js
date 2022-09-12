import React from "react";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Text, View, Button, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import TopContainer from "../Component/TopComponent";
import Card from "../Component/Card";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";

const Information = (props) => {
  return (
   
      <View style={styles.directionContaioner}>
        <View style={styles.contaionerOne}>
		    <ScrollView>
		          <TopContainer />
		    </ScrollView>  
        </View>

        <View style={styles.contaionerTwo}>
		<ScrollView>
			<Card />
		</ScrollView>
          
        </View>

        <View style={styles.contaionerThree}>
          <TouchableOpacity 
          style={styles.touchableContainer}
          onPress={() => props.navigation.navigate("Login")}>
            <View style={styles.downContainer}>
              <Text style={styles.textContainer}>Sign up and Shop at Myntra</Text>
              <MaterialCommunityIcons 
            style={styles.iconContainer}
            name="arrow-right-thin" size={30} color="white" />
            </View>
          </TouchableOpacity>
        </View>
      </View>
   
  );
};

//Profile.navigationOptions = (navData) => {
//return {
//	headerTitle: navData.navigation.getParam("username"),
//};
//}

export default Information;
const styles = StyleSheet.create({
  directionContaioner: {
    flex: 1,
   // alignItems: "center",
    justifyContent: "center",
   // width:'100%'
   backgroundColor:'white'
  },
  contaionerOne:{
	flex:.40
  },
  contaionerTwo:{
	flex:0.52,
	marginBottom:15
  },
  contaionerThree:{
	flex:0.08
  },
  touchableContainer:{
    backgroundColor:'#fd2e53',
    padding:10,
    borderRadius:20,
   // width:'90%',
   // justifyContent:'center',
   // alignItems:'center',
   marginLeft:10,
   marginRight:10,
  },
  textContainer:{
    color:'white',
    textAlign:'center',
    fontFamily:'open-sans-bold',
    fontSize:18,
    flex:0.90
  },
  downContainer:{
    flexDirection:'row'
  },
  iconContainer:{
    flex:0.10
  }
});