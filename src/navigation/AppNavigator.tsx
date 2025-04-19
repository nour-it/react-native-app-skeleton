import { createStackNavigator } from '@react-navigation/stack';
// ...existing imports...
import ProductListScreen from '../../app/products';

const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <Stack.Navigator>
      // ...existing routes...
      <Stack.Screen 
        name="ProductList" 
        component={ProductListScreen}
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
