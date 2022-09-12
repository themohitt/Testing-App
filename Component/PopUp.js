import React from "react";
import { Entypo } from '@expo/vector-icons';
import {Text, TouchableOpacity, View,StyleSheet} from "react-native";
import {useFonts} from 'expo-font';

function PopUp(props){
    PopUp = (bool,data) => {
        props.changeModalVisible(bool);
        props.setData(data);
    }

        return(
            <View style={styles.MainContainer}>
            <View style={styles.Container}>

                <TouchableOpacity disabled={false} onPress={() => PopUp(false,'cross')}>
                    <View>
                        <Entypo name="cross" size={40} color="black" style={styles.icons}/>
                    </View>
                </TouchableOpacity>
                <View>
                    <View >
                        <Entypo name="untag" size={70} color="#dc6e0d" style={styles.BigIcon}/>
                    </View>
                    <View>
                        <Text style={styles.Text}>No Coupon Allowed</Text>
                    </View>
                    <View>
                        <Text style={styles.text}>
                            Myntra coupons are not compatible with StormX Cropto Cashback yet.
                        </Text>
                    </View>
                </View>
            </View>
            </View>

        );

}
export default PopUp;
const styles = StyleSheet.create({
    MainContainer:{
        flex:1,
        justifyContent:"center",
       opacity:0.9,
        backgroundColor:"#545050"
    },
Container: {

    backgroundColor:'#ffffff',
    borderColor: '#ffffff',
    padding: 20,
    borderRadius: 30,
    elevation: 4,
    shadowColor: 'black',
    // justifyContent:"center",
    marginHorizontal:'5%',

},
    BigIcon:{
    justifyContent:"center",
        textAlign:"center",
        borderColor:'#dc6e0d',
        borderRadius:90,
        borderWidth:3,
        marginHorizontal:'35%',
        paddingVertical:'3%',

    },
    Text:{
    marginTop:15,
        // fontWeight:'bold',
        fontSize:25,
        fontFamily:'open-sans-bold',
        textAlign:'center',
    },
    text:{
        marginTop:10,
       padding:10,
        fontSize:15,
        textAlign:'center',
        fontFamily:'open-sans-bold',

    },
    icons:{
    textAlign:"right",
    }
})