import React, {useEffect} from 'react';
import {View, Text, Button, TextInput} from 'react-native';
import {AnimatedContainer} from './src/AnimatedContainer'; // Importe o componente criado

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
      <View
        style={{
          height: 60,
          width: '100%',
          borderWidth: 1,
          borderColor: 'gray',
        }}>
        <Text>animationTest</Text>
      </View>
      <View style={{}}>
        <Button
          title="asd"
          onPress={() => {
            console.log('object', texts.length);
            setTexts(t => [...t, 'animationTest', 'Powered by React Native']);
          }}
        />
      </View>

      <AnimatedContainer>
        {texts.map((t, index) => (
          <View key={index} style={{padding: 6}}>
            <Text>{t}</Text>
            <TextInput multiline numberOfLines={2} />
          </View>
        ))}
      </AnimatedContainer>

      <Text>Powered by React Native</Text>

      <View style={{height: 20}}></View>
    </View>
  );
};

export default App;
