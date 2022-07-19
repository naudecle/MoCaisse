import { SafeAreaView, TouchableOpacity,Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator} from '@react-navigation/native-stack';

//Screens
import Log from './screens/Log';
import Register from './screens/Register';
import AppStyle from './style/AppCss';
//***** */

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName='LogIn'>
        
        <Stack.Screen name="LogIn" component={Log} options={{headerShown:false}}/>

        <Stack.Screen name='SignUp' component={Register}/>

        
      </Stack.Navigator>
    </NavigationContainer>
    
  );
};

// function MainApp({navigation}){
//   return(
//     <SafeAreaView style={AppStyle.container}>
//       <View style={AppStyle.viewContainer}>
//         <TouchableOpacity style={AppStyle.button} onPress={()=>navigation.navigate('LogIn',{name:'LogIn'})}>
//           <Text style={AppStyle.textButton}>Sign In</Text>
//         </TouchableOpacity>

//         <TouchableOpacity style={AppStyle.button} onPress={()=>navigation.navigate('SignUp',{name:'SignUp'})}>
//           <Text style={AppStyle.textButton}>Sign Up</Text>
//         </TouchableOpacity>
//       </View>
//     </SafeAreaView>
//   )
// }


export default App;
