import { View, Text, Box } from 'native-base';
import React from 'react';
import HomeProduct from '../../components/HomeProduct/HomeProduct';
import HomeSearch from '../../components/HomeSearch/HomeSearch';
import Colors from './../../GeneralImportantThings/colors';

const HomeScreen = () => {
  return (
    <Box flex={1} bg={Colors.subGreen}>
      <HomeSearch />
      <HomeProduct />
    </Box>
  );
};

export default HomeScreen;