import { FlatList } from 'react-native';
import { Avatar, ListItem } from 'react-native-elements';
import RenderProduct from '../features/products/RenderProduct';

const ProductsScreen = (props) => {
  const renderProductItem = ({ item: product }) => {
    return (
      <ListItem>
        <Avatar source={product.image} />
        <ListItem.Content>
          <ListItem.Title>{product.name}</ListItem.Title>
          <ListItem.Subtitle>{product.description}</ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
    );
  };
  return (
    <FlatList
      data={props.products}
      renderItem={renderProductItem}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

export default ProductsScreen;
