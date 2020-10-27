console.disableYellowBox = true;
import React , { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import * as Font from 'expo-font';
import {AppLoading} from 'expo';
import {createAppContainer } from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Onboarding from './screens/onboarding';


const getFonts = () => Font.loadAsync({
    'Staatliches': require('./assets/fonts/Staatliches/Staatliches-Regular.ttf'),
    'Roboto-Regular': require('./assets/fonts/Roboto/Roboto-Regular.ttf'),
    'Roboto-Bold': require('./assets/fonts/Roboto/Roboto-Bold.ttf'),
  })

  var StackNavigator = createStackNavigator({
    Onboarding: Onboarding,  
    // ExempleB: ExempleScreenB,
  },
  {headerMode: 'none'}
  );

  const Navigation = createAppContainer(StackNavigator);

 export default function App() {

  const [ fontsLoaded, setFontsLoaded ] = useState(false);


  if(fontsLoaded){
    return (
     <Navigation/>
    )
  } else {
      return (
        <AppLoading
          startAsync={getFonts}
          onFinish={()=> setFontsLoaded(true)}
        />
      )
    } 
  }



  // pour la navigation via StackNavigator, coller ce genre de lien dans les screens
// function ExempleScreenA(props){
//   return (
//     <View> <Button title="Go to page B"
//      onPress={() => props.navigation.navigate('ScreenB')} />
//     </View>
//   );
// }