[![npm version](https://badge.fury.io/js/react-native-reanimated-container.svg)](https://www.npmjs.com/package/react-native-reanimated-container)
[![Downloads](https://img.shields.io/npm/dm/react-native-reanimated-container)](https://www.npmjs.com/package/react-native-reanimated-container)
[![Downloads](https://img.shields.io/npm/dt/react-native-reanimated-container)](https://www.npmjs.com/package/react-native-reanimated-container)

# Animated Container

**AnimatedContainer** is a React Native animated component that dynamically adjusts its height based on the content inside a ScrollView. It is powered by `react-native-reanimated` to provide smooth and fluid animations.

# Example

https://appetize.io/app/as5bsp6sgnrykx36any6ssgwde?device=pixel7&osVersion=13.0

## Installation

- Before using AnimatedContainer, make sure you have `react-native-reanimated` installed in your project. If not, you can install it using the following command:

```bash
npm install react-native-reanimated
# or
yarn add react-native-reanimated
```

and don't forget to add the following code to babel.config.js

```jsx
...
plugins: ['react-native-reanimated/plugin']
```

If you have any trouble installing reanimated, please follow their guide: https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/getting-started/.

<br />

- Next, install the AnimatedContainer package:

```bash
npm install react-native-reanimated-container
# or
yarn add react-native-reanimated-container
```

<br />

⚠️ on iOS, add the following to your podfile:

```
pod 'react-native-animated-container', :path => '../node_modules/react-native-animated-container'
```

## Usage

Import AnimatedContainer into your React Native file and use it in your component:

```jsx
import React from 'react';
import {View, Text} from 'react-native';
import {AnimatedContainer} from 'react-native-reanimated-container';

const App = () => {
  return (
    <View style={{flex: 1}}>
      <AnimatedContainer>
        <Text>Your content here</Text>
      </AnimatedContainer>
    </View>
  );
};

export default App;
```

## Props

- `children (ReactNode, required)`: The content to be displayed inside the AnimatedContainer.
- `containerStyle (ViewStyle, optional)`: Additional styles for the main container.
- `innerScrollContainerStyle (ViewStyle, optional)`: Additional styles for the internal ScrollView container.
- `innerScrollContentContainerStyle (ViewStyle, optional)`: Additional styles for the content inside the ScrollView.
- `containerProps (ViewStyle, optional)`: Additional props for the main container.
- `scrollContainerProps (ScrollViewProps, optional)`: Additional props for the internal ScrollView.
- `animationDuration (number, optional)`: Duration of the animation in milliseconds. Default is 500.

## Contribution

Contributions are welcome! Feel free to open issues or submit pull requests.

## License

This project is licensed under the MIT License.
