import React from 'react';
import { StatusBar } from 'expo-status-bar';
import {  TouchableOpacity, Image, StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { TextInput } from 'react-native-paper'; 
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { AppRegistry } from 'react-native';
import App from './App'; // Change this to the path of your main component
import { name as appName } from './app.json';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen} from './screens/Home'
import { ProfileScreen} from './screens/Profile'
// import{ Home } from './Home'


AppRegistry.registerComponent(appName, () => App);

const picture = require('./assets/picture.png');
const borderimage = require('./assets/borderimage.png'); // Replace 'border-image.png' with your actual image file name
const borderimagetwo = require('./assets/borderimagetwo.png'); // Add the path to the second image
const Stack = createStackNavigator();



const mystack = () => {
  return (
    <LinearGradient
      colors={['#0BD474' , '#FFFFFF']}
      style={styles.container}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <NavigationContainer>
      { <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Welcome'}}
        />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>}
    </NavigationContainer>

    {/* <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
        <Stack.Screen name="NewScreen" component={NewScreen} />
      </Stack.Navigator>
    </NavigationContainer> */}
  
      
      {/* Add the welcome title */}
      <Text style={styles.welcomeTitle}>Welcome!</Text>
      <View style={styles.content}>
        </View>
        {/* <Image source={picture} style={styles.image} /> */}

        <View style={styles.circleContainer}>
          <View style={styles.dottedCircleSmall} />
          <View style={styles.dottedCircleMedium} />
          <View style={styles.dottedCircleLarge} />
        </View>

        <View style={[styles.circle, styles.outerCircle]}>
          {/* Inner circle */}
           {/* Colored Circle on the Edge of the Outer Circle */}
           <View style={styles.coloredCircleOnEdge} />
           <View style={styles.dottedCircle} />
           
          <View style={[styles.circle, styles.innerCircle]}>
            {/* Dotted line forming a circle */}
          <Image
              source={(picture)}
              style={styles.innerImage}
            /> 
            <Image source={borderimagetwo} style={styles.secondImageOnBorder} /> 
          </View>
        </View>


        {/* <TextInput
          style={styles.textInput}
          placeholder="Get Started"
          placeholderTextColor="#000000"
        />  */}
         {/* Add the TouchableOpacity component as a button */}

         {/* Add the Image component on the border of the outer circle */}
         <Image source={(borderimage)} style={styles.imageOnBorder} />

        
          
        <View>

         <TouchableOpacity style={styles.button} onPress={() => console.log('Navigation.Navigate')}>
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>

        <Text>Angie is the most amazing person in the world wide world :-)
        </Text>

        <StatusBar style="auto" />
      </View>
    </LinearGradient>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  welcomeTitle: { 
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 50,
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.5)', 
    padding: 20,
    borderRadius: 10,
  },
  image: {
    width: 200, 
    height: 200,
    marginBottom: 20,
  },
  
  button: {
    backgroundColor: 'gold',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
   width: 150,
   paddingVertical: 10,
   paddingHorizontal: 20,
   alignSelf: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  circle: {
    width: 300,
    height: 300,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  outerCircle: {
    borderWidth: 2,
    borderStyle: 'dotted',
    borderColor: 'black',
    width: 200,
    height: 200,
    borderRadius: 100,
  },
  innerCircle: {
    borderWidth: 2,
    borderStyle: 'dotted',
    borderColor: 'black',
    position: 'relative',
    top: 1,
    left: 1,
    zIndex: 2,
    width: 100,
    height: 100,

  },
  innerImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  imageOnBorder: {
    position: 'absolute',
    width: 55,
    height: 55,
    top: 320, // Adjust the top and left values to position the image on the border
    left: 90,
    borderRadius: 40,
  },
  secondImageOnBorder: {
    position: 'absolute',
    width: 55,
    height: 55,
    top: 85, // Adjust the top and left values to position the image on the border
    left: 100,
    borderRadius: 40,
  },
  // coloredCircleOnEdge: {
  //   width: 50,
  //   height: 50,
  //   backgroundColor: 'brown',
  //   borderRadius: 25,
  //   position: 'absolute',
  //   bottom: 50, // Adjust this value to move the colored circle up or down
  //   left: '70%', // Center the circle horizontally within the outer circle
  //   marginLeft: -15,
  // },
  dottedCircle: {
    borderWidth: 2,
    borderStyle: 'dotted',
    borderColor: 'black',
    position: 'absolute',
    top: '50%', // Position it vertically centered on the outer circle
    left: '50%', // Position it horizontally centered on the outer circle
    width: 140, // Adjust the size of the dotted circle
    height: 140, // Adjust the size of the dotted circle
    borderRadius: 70, // To make it a perfect circle, set borderRadius to half of width/height
    marginTop: -70, // To vertically center the circle, apply negative margin half of height
    marginLeft: -70, // To horizontally center the circle, apply negative margin half of width
    zIndex: 1,
  },
  
});

export default mystack
