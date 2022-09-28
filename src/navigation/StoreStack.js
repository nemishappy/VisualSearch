import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SearchScreen from '../screens/store/SearchScreen';
const Stack = createNativeStackNavigator();

function StoreStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Setting" component={SearchScreen} />
    </Stack.Navigator>
  );
}
export default StoreStack;
