import {Text, Image, StyleSheet, View} from 'react-native';
function TopContainer(){

    return(
        <>
        <View style={styles.rootContainer}>
        <Image 
              style={styles.image}       
              source={require('../assets/Images/1.jpeg')}/>
                        
        <Text style={styles.myntraText}>Myntra</Text>
        <Text style={styles.textCo}>Up to 2.67% Crypto Cashback</Text>
        </View>
        </>
    );
}

export default TopContainer;

const styles = StyleSheet.create({
  rootContainer:{
    margin:50,
    justifyContent:'center',
    alignItems:'center'
  },
    image: {
      width:100,
      height:100,
      borderRadius:200,
      borderWidth:1,
      borderColor:'#C8C8C8',
      marginBottom:6,
      

      },
      textCo:{
        color:'#fd2e53',
        fontSize:20,
        fontFamily:'open-sans-bold',     
       // fontWeight:'bold'
      },
      myntraText:{
      fontSize:22,
      marginBottom:6,
      fontFamily:'open-sans-bold',
     // fontWeight:'bold'
      
    },
});