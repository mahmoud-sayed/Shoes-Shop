import React from 'react';
import { View, Text, Box, Center, ScrollView, Pressable, HStack, Image, VStack, Button } from 'native-base';
import CartEmpty from '../../components/CartEmpty/CartEmpty';
import { SwipeListView } from 'react-native-swipe-list-view';
import Products from './../../data/products';
import { FontAwesome } from '@expo/vector-icons';
import Colors from './../../GeneralImportantThings/colors';


const Swiper = () => {
  return (
    <SwipeListView
      rightOpenValue={-50}
      previewOpenValue={-40}
      previewRowKey={0}
      previewOpenDelay={3000}
      data={Products.slice(0, 2)}
      renderHiddenItem={renderHiddenItem}
      renderItem={renderItem}
      showsVerticalScrollIndicator={false}
    />
  );
};

const renderItem = (data) => {
  return (
    <Pressable>
      <Box ml={6} mb={3}>
        <HStack
          alignItems='center'
          bg={Colors.white}
          shadow={5}
          rounded={10}
          overFlow='hidden'
        >
          <Center w='25%' bg={Colors.deepGray}>
            <Image source={{ uri: data.item.image }} alt={data.item.name} w='full' h={24} resizeMode='contain' />
          </Center>
          <VStack w='60%' px={2} space={2}>
            <Text isTruncated color={Colors.black} bold fontSize={10}>
              {data.item.name}
            </Text>
            <Text bold color={Colors.lightBlack}>${data.item.price}</Text>
          </VStack>
          <Center>
            <Button bg={Colors.main} _pressed={{ bg: Colors.deepGray }} color={Colors.white}>5</Button>
          </Center>
        </HStack>
      </Box>
    </Pressable>
  );
};

const renderHiddenItem = () => {
  return (
    <Pressable w={50} roundedTopRight={10} roundedBottomRight={10} h='88%' ml='auto' justifyContent='center' bg={Colors.red}>
      <Center alignItems='center' space={2}>
        <FontAwesome name='trash' size={24} color={Colors.white} />
      </Center>
    </Pressable>
  );
};

const CartItems = () => {
  return (
    <Box m={6}>
      <Swiper />
    </Box>
  );
};

export default CartItems;