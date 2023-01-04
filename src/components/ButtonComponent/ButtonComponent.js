import React from 'react';
import { Button } from 'native-base';

const ButtonComponent = ({ mt, bg, color, children, onPress }) => {
  return (
    <Button
      width='full'
      h={55}
      mt={mt}
      bg={bg}
      rounded='full'
      _text={{
        color: color,
        fontWeight: 'bold',
      }}
      _pressed={{ bg: bg }}
      onPress={onPress}
    >
      {children}
    </Button >
  );
};

export default ButtonComponent;