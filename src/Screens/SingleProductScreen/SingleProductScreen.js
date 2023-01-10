import React, { useState } from 'react';
import { View, Text, Box, ScrollView, Image, Heading, HStack, Spacer } from 'native-base';
import Colors from './../../GeneralImportantThings/colors';
import RatingComponent from './../../components/RatingComponent/RatingComponent';
import NumericInput from 'react-native-numeric-input';
import ButtonComponent from './../../components/ButtonComponent/ButtonComponent';
import ReviewComponent from '../../components/ReviewComponent/ReviewComponent';
import { useNavigation } from '@react-navigation/native';

const SingleProductScreen = ({ route }) => {

  const [value, setValue] = useState(0);
  const navigation = useNavigation();
  const product = route.params;
  return (
    <Box safeArea flex={1} bg={Colors.white}>
      <ScrollView
        px={5}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        <Image
          alt='image'
          w='full'
          h={300}
          resizeMode='contain'
          source={{ uri: product.image }}
        />
        <Heading bold fontSize={15} mb={2} lineHeight={22}>
          {product.name}
        </Heading>
        <RatingComponent value={product.rating} text={`${product.numReviews} Reviews`} size={15} />
        <HStack space={2} alignItems='center' my={5}>
          {product.countInStock <= 0 ? <Heading bold color={Colors.red} fontSize={12}>out of Stuck</Heading> :
            <>
              <NumericInput
                value={value}
                totalWidth={140}
                totalHeight={30}
                iconSize={25}
                step={1}
                maxValue={product.countInStock}
                minValue={0}
                borderColor={Colors.deepGray}
                rounded
                textColor={Colors.black}
                iconStyle={{ color: Colors.white }}
                rightButtonBackgroundColor={Colors.main}
                leftButtonBackgroundColor={Colors.main}
              />
            </>
          }

          <Spacer />
          <Heading bold color={Colors.black} fontSize={12}>${product.price}</Heading>
        </HStack>
        <Text fontSize={12} lineHeight={24}>
          {product.description}
        </Text>
        <ButtonComponent bg={Colors.main} mt={10} color={Colors.white}
          onPress={() => navigation.navigate('Cart')}
        >ADD TO CART</ButtonComponent>
        <ReviewComponent />
      </ScrollView>
    </Box>
  );
};

export default SingleProductScreen;