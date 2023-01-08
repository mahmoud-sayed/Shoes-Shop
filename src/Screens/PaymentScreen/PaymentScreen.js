import React from 'react';
import { View, Text, Box, Center, ScrollView, VStack, FormControl, Input, HStack, Image } from 'native-base';
import Colors from '../../GeneralImportantThings/colors';
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent';
import { Ionicons, FontAwesome } from '@expo/vector-icons';


const PaymentScreen = () => {

  const paymentMethod = [
    {
      image: require('./../../../assets/paypal.png'),
      alt: 'paypal',
      Icons: 'Ionicons'
    }, {
      image: require('./../../../assets/discover.png'),
      alt: 'discover',
      Icons: 'fontAwesome'
    }, {
      image: require('./../../../assets/googlepay.png'),
      alt: 'googlepay',
      Icons: 'fontAwesome'
    },

  ];


  return (
    <Box flex={1} safeAreaTop bg={Colors.main} py={5}>
      {/* Header */}
      <Center pb={15}>
        <Text color={Colors.white} fontSize={14} bold>Select Payment Method</Text>
      </Center>
      {/* Inputs */}
      <Box h='full' px='5' bg={Colors.deepGray}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <VStack space={6} mt={5}>
            {paymentMethod.map((i, index) => (

              <HStack
                key={index}
                alignItems='center'
                justifyContent='space-between'
                px={1}
                py={1}
                rounded={10}
                bg={Colors.white}

              >
                <Box>
                  <Image
                    source={i.image}
                    alt={i.alt}
                    resizeMode='contain'
                    w={120}
                    h={50}
                  />
                </Box>
                {i.Icons === 'Ionicons' ? <Ionicons name='checkmark-circle' size={30} color={Colors.main} /> : <FontAwesome name='circle-thin' size={30} color={Colors.main} />}

              </HStack>
            ))}
            <ButtonComponent color={Colors.white} bg={Colors.main}>CONTINUE</ButtonComponent>
            <Text italic textAlign='center'>Payment Method IS <Text bold>Paypal</Text> by default</Text>
          </VStack>
        </ScrollView>
      </Box>
    </Box>
  );
};

export default PaymentScreen;