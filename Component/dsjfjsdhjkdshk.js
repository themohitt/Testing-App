import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Modal } from 'react-native';
import Card from "../components/cards";
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Button from "../components/Button";
import React, { useState } from 'react';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import  ModalComponents from './components/ModalComponents';


export default function App() {
  const [show, setShow] = useState(false);
  const [visible, setVisible] = useState(false);

  const [isModalVisible, setModalVisible] = useState(false);
  const [chooseData, setchooseData] = useState();
  const changeModalVisible = (bool) => {
    setModalVisible(bool);
  };

  const setData = (data) => {
    setchooseData(data);
  };

  const [fontsLoaded] = useFonts({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <>

      <View style={styles.haderContainer}>
        <View style={styles.iconContainer}>
          <Ionicons name="arrow-back-outline" size={24} color="black" />
        </View>
      </View>
          <Card>
            <Text style={styles.textInner}>About Myntra</Text>
            <Text style={styles.innertext}>
              Shop online for Branded shoes,Clothing & Accesories in mailto:india@myntra.com,

              <TouchableOpacity onPress={() => setShow(!show)}>
                {!show && <Text style={styles.innerContainerText}>  See all</Text>}
                {show && <Text style={styles.innerContainerText}> See less</Text>}
              </TouchableOpacity>

              <View>
                {show ? <Text>  India's largest Fashion Portal. </Text> : null}
              </View>
            </Text>
          </Card>

          <Card>
            <TouchableOpacity onPress={() => changeModalVisible(true) }>
              <View style={styles.innerContainer}>
                <View style={styles.innerIcon}>
                  <MaterialCommunityIcons name="tag-remove-outline" size={24} color="black" />
                </View>
                <View style={styles.couponText}>
                  <Text>Coupon codes not eligible</Text>
                </View>
                <View style={styles.circleIcon}>
                  <Ionicons name="information-circle-outline" size={21} color="#c8c8c8" />
                </View>
              </View>
            </TouchableOpacity>

            <Modal transparent={true}
              animationType="fade"
              visible={isModalVisible}
              nRequestClose={() => changeModalVisible(true)}
            >
              < ModalComponents
              changeModalVisible={ changeModalVisible}
              setData={setData}
               />
            </Modal>

            <Text style={styles.divider}></Text>


            <TouchableOpacity onPress={() => setVisible(!visible)}>
              <View style={styles.viewContainer}>
                <View style={styles.alertIcon}>
                  <Ionicons name="alert-circle-outline" size={24} color="black" />
                </View>
                <View style={styles.exclusionText}>
                  <Text>Exclusions Apply</Text>
                </View>

                {!visible && <View  style={styles.forwardIcon}>
                <Ionicons name="chevron-forward" size={21} color="#c8c8c8" />
                </View> }
               {visible && <View style={styles.forwardIcon}>
                  <Ionicons name="chevron-down-sharp" size={21} color="#c8c8c8" />
                </View> }
              </View>
              <View>
                {visible ? (
                  <Text style={styles.visibleText}>
                    532%- New Customers{'\n'}2.67%- Returning Customers  {'\n'}{'\n'}{'\n'}

                    Does NOT APPLY to the following products/categories/brands:{'\n'}  {'\n'} {'\n'}



                    - Cash on Delivery (COD) payment option is not eligible for Crypto Cash-back {'\n'} {'\n'} {'\n'}

                    - Maximum 3 orders per JP Address/ Per Email ID & Phone Number/ Shipping Address in a calendar month. {'\n'}
                    {'\n'}{'\n'}
                    - Bulk orders are not permitted: Please note it is against policy to use Myntra for non-personal or commercial use. We may block all such accounts and forfeit their Cashback balances without any prior notice.
                  </Text>
                ) : null}
              </View>
            </TouchableOpacity>
          </Card>
      <Button // press={} 
      />
    </>
  );
}

const styles = StyleSheet.create({
  haderContainer: {
    height: 45,
    backgroundColor: 'white'
  },
  iconContainer: {
    marginLeft: 15,
    marginTop: 25,
  },
  textInner: {
    fontFamily: 'open-sans-bold',
    fontSize: 20,
    // fontWeight: 'bold',
  },
  innertext: {
    //fontFamily: 'open-sans',
    //fontSize: 13,
    paddingTop: 10,
  },
  innerContainerText: {
    fontFamily: 'open-sans-bold',
    fontSize: 14,
    // fontWeight: 'bold',
  },
  innerContainer: {
    flexDirection: 'row',
  },
  innerIcon: {
    // justifyContent: 'flex-start'
    flex: 0.1,
    borderRadius: 8,
    borderColor: "#ccc",
    borderWidth: 1,
    alignItems: 'center'
  },

  couponText: {
    fontFamily: 'open-sans',
    flex: 0.8,
    marginLeft: 10,
    fontSize: 20,
  },
  circleIcon: {
    // justifyContent: 'flex-end',
    flex: 0.1,
    //alignItems:'flex-end'
  },
  divider: {
    borderBottomWidth: 2,
    borderBottomColor: '#ccc',
  },
  viewContainer: {
    flexDirection: 'row',
    marginTop: 15
  },
  alertIcon: {
    // justifyContent: 'flex-start'
    flex: 0.1,
    borderRadius: 8,
    borderColor: "#ccc",
    borderWidth: 1,
    alignItems: 'center'
  },
  exclusionText: {
    fontFamily: 'open-sans',
    flex: 0.9,
    marginLeft: 10,

  },
  forwardIcon: {
    //justifyContent: 'flex-end',
    flex: 0.1,
    //alignItems:'flex-end'
    flexDirection: 'row',
    // transform: [{ rotate: '40deg' }],

  },
  visibleText: {
    fontFamily: 'open-sans',
    fontSize: 13,
    textAlign: 'left',
    marginTop: 20,
  },
  showStyle: {
    fontFamily: 'open-sans',
    fontSize: 14,
    paddingTop: 7,
  }

});

