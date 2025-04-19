import { View, Text, Dimensions, StyleSheet, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Animated, {
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
  interpolate,
  withSpring,
} from 'react-native-reanimated';

const { width, height } = Dimensions.get('window');

const Showcase3DScreen = () => {
  const scrollX = useSharedValue(0);
  const products = [
    {
      id: 1,
      name: 'Product 3D 1',
      image: 'https://picsum.photos/400/300',
      description: '3D Showcase product description',
      price: '$199.99'
    },
    {
      id: 2,
      name: 'Product 3D 2',
      image: 'https://picsum.photos/400/300',
      description: 'Another 3D product description',
      price: '$299.99'
    },
  ];

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      scrollX.value = event.contentOffset.x;
    },
  });

  const ProductCard = ({ item, index }: any) => {
    const animatedStyle = useAnimatedStyle(() => {
      const inputRange = [
        (index - 1) * width,
        index * width,
        (index + 1) * width,
      ];

      const rotate = interpolate(
        scrollX.value,
        inputRange,
        ['-45deg', '0deg', '45deg'],
      );

      const scale = interpolate(
        scrollX.value,
        inputRange,
        [0.8, 1, 0.8],
      );

      return {
        transform: [
          { perspective: 1000 },
          { rotateY: rotate },
          { scale },
        ],
      };
    });

    return (
      <Animated.View style={[styles.card, animatedStyle]}>
        <Image source={{ uri: item.image }} style={styles.image} />
        <View style={styles.productInfo}>
          <Text style={styles.productName}>{item.name}</Text>
          <Text style={styles.productPrice}>{item.price}</Text>
          <Text style={styles.productDescription}>{item.description}</Text>
        </View>
      </Animated.View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Animated.ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={scrollHandler}
        scrollEventThrottle={16}
      >
        {products.map((item, index) => (
          <ProductCard key={item.id} item={item} index={index} />
        ))}
      </Animated.ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  card: {
    width: width,
    height: height * 0.7,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderRadius: 20,
    margin: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: {
    width: width - 80,
    height: height * 0.4,
    borderRadius: 15,
  },
  productInfo: {
    padding: 20,
    alignItems: 'center',
  },
  productName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  productPrice: {
    fontSize: 20,
    color: '#666',
    marginBottom: 10,
  },
  productDescription: {
    fontSize: 16,
    textAlign: 'center',
    color: '#333',
  },
});

export default Showcase3DScreen;
