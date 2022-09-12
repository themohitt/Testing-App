import React from "react";
import { Text, View, Button, Image , StyleSheet} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import ButtonComponent from "../Component/ButtonComponent";

const Login = (props) => {
return (
	<View style={styles.mainContainer}>
		
		<Image 
		style={styles.imageStyle}
		source={require('../assets/Images/Next.jpeg')}/>
		<View style={styles.buttonContainer}>
			<ButtonComponent press={() => props.navigation.navigate("Home")}>Continue with email</ButtonComponent>
		</View>
		<View style={styles.lastContainer}>
			<View style={styles.textContainer}>
			<Text style={styles.dividerOne}>heehjhdjshddf</Text>
			<Text style={styles.textBetweenDivider}>OR</Text>
			<Text style={styles.dividerThree}>heehjhdjshddf</Text>
			</View>
		</View>
	</View>
);
};

export default Login;

const styles = StyleSheet.create({
	mainContainer:{
		flex: 1, 
		alignItems: "center", 
		justifyContent: "center",
		backgroundColor:'white',
		width:'100%'
	},
	imageStyle:{
		width:'100%',
		height:'70%',
	//	marginBottom:40
	flex:0.68
	},
	textContainer:{ 
		color: "#006600", 
		fontSize: 40 },
	buttonContainer:{
		flex:0.10,
		width:'95%'
	},

	lastContainer:{
		flex:0.20,
		width:'0%',
		justifyContent:'center',
		alignItems:'center'
	},
	textContainer:{
		margin:15,
		flexDirection:'row'
	},
	dividerOne:{ 
	//	marginTop:10,
		borderBottomWidth:1,
		borderBottomColor:'black',
		color:"white",
		width:'30%'
	},
	textBetweenDivider:{
	//	margin:30,
		width:'10%'
	},
	dividerThree:{
		//margin:10,
		borderBottomWidth:1,
		borderBottomColor:'black',
		color:"white",
		width:'30%'
	}
});