import { createStackNavigator } from '@react-navigation/stack';
// ...existing imports...
import DetailsScreen from '../../app/details';

const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <Stack.Navigator>
      // ...existing routes...
      <Stack.Screen 
        name="ProductList" 
        component={DetailsScreen}
        options={{
          title: 'Nos Produits',
          headerStyle: {
            backgroundColor: '#2196F3',
          },
          headerTintColor: '#fff',
        }}
      />
    </Stack.Navigator>
  );
}

export default AppNavigator;
