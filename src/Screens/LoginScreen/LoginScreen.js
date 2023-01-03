import React from 'react';
import { View, Text, Box } from 'native-base';
import colors from './../../GeneralImportantThings/colors';

const LoginScreen = () => {
  return (
    <Box flex={1} bg={colors.black}>
      <Text color={colors.}>LoginScreen</Text>
    </Box>
  );
};

export default LoginScreen;