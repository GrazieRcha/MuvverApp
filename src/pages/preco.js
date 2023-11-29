import React, { useState } from 'react';
import { View, Text } from 'react-native';
import Slider from '@react-native-community/slider';

const Preco = () => {
  const [preco, setPreco] = useState(50); 

  const handlePrecoChange = (valor) => {
    setPreco(valor);
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    
      <Text>Preço: R${preco.toFixed(2)}</Text>

      <Slider
        style={{ width: '80%', marginTop: 10 }}
        minimumValue={0}
        maximumValue={100}
        value={preco}
        onValueChange={handlePrecoChange}
        step={1}
      />
    </View>
  );
};

export default Preco;
