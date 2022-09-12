import { Text, TouchableOpacity, View, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
function ButtonComponent ({children,press}) {
    return(
    <View  style={styles.mainContainer}>
        <TouchableOpacity 
        onPress={press}
        style={styles.touchableContainer}>
            <View style={styles.directionContainer}>
            <Text style={styles.textContainer}>{children}</Text>
            <MaterialCommunityIcons 
            style={styles.iconContainer}
            name="arrow-right-thin" size={30} color="#fd2e53" />
            </View>
        </TouchableOpacity>
    </View> 
    );

}

export default ButtonComponent;

const styles = StyleSheet.create({
    mainContainer:{
    //   justifyContent:'center',
        alignItems:'center',
      width:'100%',
      marginTop:15
    },
    touchableContainer:{
        borderColor:"#fd2e53",
        borderWidth:2,
        width:'80%',
        padding:8,
        borderRadius:25
    },
    textContainer:{
        textAlign:'center',
        color:'#fd2e53',
        fontFamily:"open-sans-bold",
        fontSize:18,
        flex:0.85
    },
    directionContainer:{
        flexDirection:'row'
    },
    iconContainer:{
        flex:0.15,
    }
});