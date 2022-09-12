import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Alert,
    Modal
  } from "react-native";
  

  import { MaterialCommunityIcons } from "@expo/vector-icons";
  import { MaterialIcons } from "@expo/vector-icons";
  import { Ionicons } from "@expo/vector-icons";
  import React, { useState } from "react";
import PopUp from "./PopUp";
  
  //const Drop = () => {
   // return <Ionicons name="chevron-down" size={24} color="black" />;
  //};
  
  function Card({press}) {
    const [show, setShow] = useState(false);
    const [visible, setVisible] = useState(false);
  
    const[isModalVisible, setModalVisible ] = useState(false);
    const [chooseData, setchooseData] = useState ();
    const changeModalVisible = (bool) => {
        setModalVisible(bool)
    };

    const setData = (data) => {
        setchooseData(data);
    }
    // const touchToTouchable = () => {
    //   Alert.alert(
    //     "No coupons allowed",
    //     "Myntra coupons are not compatible with StromXCrypto cashback yet.",
    //     [
    //       { text: "Ok", onPress: () => console.log("Ok Pressed") },
  
    //       {
    //         text: "cancel",
    //         onPress: () => console.log("Cancel Pressed"),
    //         style: "cancel",
    //       },
    //     ]
    //   );
    // };
    return (
      <>
        <View style={styles.firstContainer}>
          <View style={styles.cardContainer}>
            <Text style={styles.title}>About Myntra</Text>
            <Text style={styles.lastText}>
              Shop Online for Branded Shoes, Clothing and Accessories in India @
              Myntra.com,
              <TouchableOpacity onPress={() => setShow(!show)}>
              {!show && <Text style={styles.seeAll}>See all</Text>}
              {show && <Text style={styles.seeAll}> See less</Text>}
              </TouchableOpacity>
              <View>
                {show ? (
                  <Text style={{ fontFamily: "open-sans" }}>
                    India's largest Fashion Portal.
                  </Text>
                ) : null}
              </View>
            </Text>
          </View>
  
          <View style={styles.outerContainer}>
            <View style={styles.secondOuterMostConainer}>
              <View style={styles.cardContainer}>
                <View style={styles.firstText}>

                  <TouchableOpacity onPress={() => changeModalVisible(true)}>
                    <View style={styles.directionContainer}>
                      <View style={styles.containerOne}>
                        
                          <MaterialCommunityIcons
                            name="tag-off-outline"
                            size={24}
                            color="black"
                          />
                        
                      </View>
  
                      <View style={styles.containerTwo}>
                        <Text style={styles.secondText}>
                          Coupon codes not eligible
                        </Text>
                      </View>
  
                      <View style={styles.containerThree}>
                        
                          <MaterialIcons
                            name="error-outline"
                            size={22}
                            color="#767676"
                          />
                        
                      </View>
                    </View>
                  </TouchableOpacity>
                  <Modal
                            transparent= {true}
                            animationType = 'fade'
                            visible={isModalVisible}
                            nRequestClose={() =>changeModalVisible(true)}
                        >
                            <PopUp
                                changeModalVisible={changeModalVisible}
                                setData={setData}
                            />
                        </Modal>
                </View>
  
                <Text style={styles.divider}></Text>
  
                <View style={styles.firstText}>
                  <View style={styles.firstText}>
                    <TouchableOpacity onPress={() => setVisible(!visible)}>
                      <View style={styles.directionContainer}>
                        <View style={styles.containerOne}>
                          <MaterialIcons
                            name="error-outline"
                            size={25}
                            color="black"
                          />
                        </View>
  
                        <View style={styles.containerTwo}>
                          <Text style={styles.secondText}>Exclusions Apply</Text>
                      </View>

                  {visible && <View style={styles.containerThree}> 
                       <Ionicons name="chevron-down" size={24} color="#767676" />
                       </View> }
                       { !visible &&  <View style={styles.containerThree}>
                            <MaterialIcons  name="keyboard-arrow-right" size={24} color="#767676"  />
                        </View>}
                          
                      </View>
                      <View>
                        {visible ? (
                          <Text style={styles.dropDown}>
                            {"\n"}
                            5.32% - New Customers
                            {"\n"}
                            2.67% - Returning Customers
                            {"\n"}
                            {"\n"}
                            {"\n"}
                            {"\n"}
                            Does NOT APPLY to the following products/categories/
                            {"\n"}
                            {"\n"}
                            brands:
                            {"\n"}
                            {"\n"}- Cash on Delivery (COD) payment option is not
                            eligible for Crypto Cash-back
                            {"\n"}
                            {"\n"}- Maximum 3 orders per IP Address/ Per Email ID
                            & Phone Number/ Shipping Address in a calendar month.
                            {"\n"}
                            {"\n"}- Bulk orders are not permitted: Please note it
                            is against policy to use Myntra for non-personal or
                            commercial use. We may block all such accounts and
                            forfeit their Cashback balances without any prior
                            notice.
                          </Text>
                        ) : null}
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </>
    );
  }
  
  export default Card;
  const styles = StyleSheet.create({
    title: {
      fontFamily: "open-sans-bold",
      fontSize: 18,
      paddingBottom: 3,
      marginLeft: 5,
      fontWeight: "bold",
    },
    cardContainer: {
      margin: 8,
      borderWidth: 1,
      borderColor: "#d4d4d4",
      borderRadius: 15,
      elevation: 0.1,
      padding: 15,
  
      elevation: 10, // for android
      backgroundColor: "white", // for ios
      shadowColor: "black", // for ios
      shadowOpacity: 0.1, // for ios
      shadowOffset: { width: 4, height: 2 }, // for ios
      shadowRadius: 20, // for ios
    },
    secondOuterMostConainer: {
      width: "99%",
    },
    firstText: {
      marginTop: 5,
    },
    secondText: {
      fontSize: 16,
      marginLeft: 15,
      paddingBottom: 5,
      fontFamily: "open-sans-regular",
    },
    img: {
      width: 35,
      height: 35,
      marginLeft: 6,
    },
    divider: {
      borderBottomColor: "#C8C8C8",
      borderBottomWidth: 1,
      marginBottom: 3,
      width: "99%",
    },
    outerContainer: {
      paddingTop: 5,
    },
    lastText: {
      marginBottom: 5,
      fontSize: 15,
      marginRight: 7,
      marginLeft: 5,
      fontFamily: "open-sans-regular",
    },
    directionContainer: {
      flexDirection: "row",
    },
    containerOne: {
      flex: 0.1,
    },
    containerTwo: {
      flex: 0.8,
    },
    containerThree: {
      flex: 0.1,
    },
    seeAll: {
      fontFamily: "open-sans-bold",
      fontSize: 16,
    },
    dropDown: {
      // fontWeight:'bold',
      fontSize: 15,
      padding: 10,
      textAlign: "left",
      color: "#0d0d0d",
      fontFamily: "open-sans-regular",
    },
  });
  