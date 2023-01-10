import React from 'react';
import { Box, HStack, Input, Text } from 'native-base';
import Colors from './../../GeneralImportantThings/colors';
import { Pressable } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const HomeSearch = () => {
  const navigation = useNavigation();
  return (
    <HStack space={3} w='full' px={6} bg={Colors.main} py={4} alignItems='center' safeAreaTop>
      <Input
        placeholder='Nike, Puma, Adidas ...etc'
        w='85%'
        bg={Colors.white}
        type='search'
        h={12}
        borderWidth={0}
        _focus={{
          bgColor: Colors.white
        }}
        variant='filled'
      />
      <Pressable ml={3} onPress={() => navigation.navigate('Cart')}>
        <FontAwesome5
          name='shopping-basket'
          size={24}
          color={Colors.white}

        />
        <Box
          px={1}
          rounded='full'
          position='absolute'
          top={-13}
          left={2}
          bg={Colors.red}
          _text={{
            color: Colors.white,
            fontSize: '11px'
          }}
        >
          1
        </Box>
      </Pressable>

    </HStack>
  );
};

export default HomeSearch;