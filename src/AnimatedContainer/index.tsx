import React, {useState, useEffect} from 'react';
import {ScrollView, View} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';

const AnimatedContainer: React.FC = ({children}) => {
  const [totalHeight, setTotalHeight] = useState(0);
  const scrollViewHeight = useSharedValue(0);
  const containerHeight = useSharedValue(0);

  useEffect(() => {
    let contentHeight = 0;
    React.Children.forEach(children, child => {
      if (child && child.type === Animated.Text) {
        child.measureLayout(
          0,
          0,
          (_, measuredHeight) => {
            contentHeight += measuredHeight;
          },
          () => {},
        );
      }
    });

    scrollViewHeight.value = withTiming(contentHeight, {duration: 500});
    setTotalHeight(contentHeight);
  }, [children]);

  const containerStyle = useAnimatedStyle(() => {
    return {
      height: Math.min(scrollViewHeight.value, containerHeight.value),
    };
  });

  const handleContentSizeChange = (_, contentHeight: number) => {
    scrollViewHeight.value = withTiming(contentHeight, {duration: 500});
    setTotalHeight(contentHeight);
  };

  const handleContainerLayout = (event: any) => {
    containerHeight.value = event.nativeEvent.layout.height;
  };

  return (
    <View style={{flex: 1}} onLayout={handleContainerLayout}>
      <Animated.View
        style={[
          {
            borderRadius: 8,
            elevation: 4,
            zIndex: 1,
            backgroundColor: 'white',
            shadowColor: '#171717',
            shadowOffset: {width: -2, height: 4},
            shadowOpacity: 0.6,
            shadowRadius: 3,
          },
          containerStyle,
        ]}>
        <ScrollView
          style={{flex: 1}}
          contentContainerStyle={{paddingVertical: 16}}
          onContentSizeChange={handleContentSizeChange}
          showsVerticalScrollIndicator={false}
          bounces={false}>
          {children}
        </ScrollView>
      </Animated.View>
    </View>
  );
};

export default AnimatedContainer;
