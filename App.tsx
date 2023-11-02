import React, {useEffect} from 'react';
import {View, Text, Button} from 'react-native';
import DynamicHeightComponent from './src/AnimatedContainer'; // Importe o componente criado

const App = () => {
  const [texts, setTexts] = React.useState<string[]>([
    'animationTest',
    'Powered by React Native',
  ]);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#ffffff',
        alignItems: 'center',
      }}>
      <View style={{flex: 1}}>
        <Button
          title="asd"
          onPress={() => {
            console.log('object', texts.length);
            setTexts(t => [...t, 'animationTest', 'Powered by React Native']);
          }}
        />
      </View>
      <DynamicHeightComponent>
        {texts.map((t, index) => (
          <Text key={index}>{t}</Text>
        ))}
      </DynamicHeightComponent>
      <View style={{height: 20}}></View>
    </View>
  );
};

export default App;
