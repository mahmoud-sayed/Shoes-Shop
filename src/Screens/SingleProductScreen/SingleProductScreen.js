import React, { useState } from 'react';
import { View, Text, Box, ScrollView, Image, Heading, HStack, Spacer } from 'native-base';
import Colors from './../../GeneralImportantThings/colors';
import RatingComponent from './../../components/RatingComponent/RatingComponent';
import NumericInput from 'react-native-numeric-input';
import ButtonComponent from './../../components/ButtonComponent/ButtonComponent';
import ReviewComponent from '../../components/ReviewComponent/ReviewComponent';

const SingleProductScreen = () => {

  const [value, setValue] = useState(0);
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
          source={require('./../../../assets/FavIcon.png')}
        />
        <Heading bold fontSize={15} mb={2} lineHeight={22}>
          New adidas shoes from amazon shop
        </Heading>
        <RatingComponent value={3.5} size={15} />
        <HStack space={2} alignItems='center' my={5}>
          <NumericInput
            value={value}
            totalWidth={140}
            totalHeight={30}
            iconSize={25}
            step={1}
            maxValue={15}
            minValue={0}
            borderColor={Colors.deepGray}
            rounded
            textColor={Colors.black}
            iconStyle={{ color: Colors.white }}
            rightButtonBackgroundColor={Colors.main}
            leftButtonBackgroundColor={Colors.main}
          />
          <Spacer />
          <Heading bold color={Colors.black} fontSize={12}>$400</Heading>
        </HStack>
        <Text fontSize={12} lineHeight={24}>
          Bengaluru (also called Bangalore) is the center of India's
          high-tech industry. It is located in southern India on the Deccan
          Plateau.The city is also known for its parks and nightlife.
          Bangalore is the major center of India's IT industry, popularly
          known as the Silicon Valley of India.Bengaluru (also called Bangalore) is the center of India's
          high-tech industry. It is located in southern India on the Deccan
          Plateau.The city is also known for its parks and nightlife.
          Bangalore is the major center of India's IT industry, popularly
          known as the Silicon Valley of India.
        </Text>
        <ButtonComponent bg={Colors.main} mt={10} color={Colors.white}>ADD TO CART</ButtonComponent>
        <ReviewComponent />
      </ScrollView>
    </Box>
  );
};

export default SingleProductScreen;