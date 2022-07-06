import { View, Text, Image } from 'react-native';
import DragonLogoText from '../assets/images/dragonslairlogo.svg';
import DragonLogo from '../assets/images/logo.jpg';
import RenderProduct from '../features/products/RenderProduct';
import ProductsScreen from './ProductsScreen';
import { useState } from 'react';
import { PRODUCTSARRAY } from '../shared/PRODUCTS';

const HomeScreen = () => {
  const [products, setProducts] = useState(PRODUCTSARRAY);
  return (
    <>
      <View style={{ marginTop: 80, marginBottom: 0, alignItems: 'center' }}>
        <Image source={DragonLogo} style={{ width: '100%', height: 200 }} />
        <Text style={{ fontSize: 30 }}>Welcome to Dragon's Lair</Text>
      </View>
      <ProductsScreen products={products} />
    </>
  );
};

export default HomeScreen;
