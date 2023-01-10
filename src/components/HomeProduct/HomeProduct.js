import React from 'react';
import { Box, FlatList, Flex, Heading, Image, Pressable, ScrollView, Text } from 'native-base';
import Products from '../../data/products';
import Colors from './../../GeneralImportantThings/colors';
import RatingComponent from '../RatingComponent/RatingComponent';
import { useNavigation } from '@react-navigation/native';


const HomeProduct = () => {
  console.log({ Products });
  const navigation = useNavigation();
  return (
    <ScrollView flex={1} showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
      <Flex
        flexWrap='wrap'
        direction='row'
        justifyContent='space-between'
        px={6}
      >
        {Products.map(p =>
          <Pressable
            key={p._id}
            w='47%'
            bg={Colors.white}
            rounded='md'
            shadow={2}
            pt={0.3}
            my={3}
            pb={2}
            overflow='hidden'
            onPress={() => navigation.navigate('Single', p)}
          >
            <Image
              source={{ uri: p.image }}
              alt='name'
              w='full'
              h={24}
              resizeMode='contain'
            />
            <Box px={4} pt={1}>
              <Heading size='sm' bold>
                {p.price}
              </Heading>
              <Text
                fontSize={10}
                mt={1}
                width='full'
                isTruncated
              >{p.name}</Text>
              <RatingComponent value={p.rating} />
            </Box>
          </Pressable>
        )}

      </Flex>
    </ScrollView >
  );
};

export default HomeProduct;