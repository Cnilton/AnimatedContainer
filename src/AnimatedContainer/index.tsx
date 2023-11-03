import React, {ReactNode, useEffect} from 'react';
import {ScrollView, ScrollViewProps, ViewStyle} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';
import {style} from './styles';

/**
 * Props for the AnimatedContainer component.
 */
interface AnimatedContainerProps {
  /** The content to be displayed inside the AnimatedContainer. */
  children: ReactNode;
  /** Style for the main container. */
  containerStyle?: ViewStyle;
  /** Style for the internal ScrollView container. */
  innerScrollContainerStyle?: ViewStyle;
  /** Style for the content inside the internal ScrollView. */
  innerScrollContentContainerStyle?: ViewStyle;
  /** Additional props for the main container (if needed). */
  containerProps?: ViewStyle;
  /** Additional props for the internal ScrollView (if needed). */
  scrollContainerProps?: ScrollViewProps;
  /** Duration of the height animation in milliseconds. Default animation duration is 500 milliseconds */
  animationDuration?: number;
}

/**
 * Animated container that adjusts its height based on the content inside a ScrollView.
 */
export const AnimatedContainer: React.FC<AnimatedContainerProps> = ({
  children,
  containerStyle,
  innerScrollContainerStyle,
  innerScrollContentContainerStyle,
  containerProps,
  scrollContainerProps,
  animationDuration = 500, // Default animation duration is 500 milliseconds
}) => {
  const scrollViewHeight = useSharedValue(0);

  useEffect(() => {
    scrollViewHeight.value = withTiming(0, {duration: animationDuration});
  }, [children, animationDuration]);

  const animatedContainerStyle = useAnimatedStyle(() => {
    return {
      height: scrollViewHeight.value,
    };
  });

  const handleContentSizeChange = (_: number, contentHeight: number) => {
    const newHeight = contentHeight;
    scrollViewHeight.value = withTiming(newHeight, {
      duration: animationDuration,
    });
  };

  return (
    <Animated.View
      style={[style.animatedViewStyle, animatedContainerStyle, containerStyle]}
      {...containerProps}>
      <ScrollView
        style={innerScrollContainerStyle}
        contentContainerStyle={innerScrollContentContainerStyle}
        onContentSizeChange={handleContentSizeChange}
        showsVerticalScrollIndicator={false}
        bounces={false}
        {...scrollContainerProps}>
        {children}
      </ScrollView>
    </Animated.View>
  );
};
