import React, {ReactNode} from 'react';
import {ScrollView, ScrollViewProps, ViewProps, ViewStyle} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
} from 'react-native-reanimated';

/**
 * Props for the AnimatedContainer component.
 */
interface AnimatedContainerProps {
  /** The content to be displayed inside the AnimatedContainer. */
  children: ReactNode;
  /** Style for the main container. */
  containerStyle?: ViewStyle | ViewStyle[];
  /** Style for the internal ScrollView container. */
  innerScrollContainerStyle?: ViewStyle;
  /** Style for the content inside the internal ScrollView. */
  innerScrollContentContainerStyle?: ViewStyle;
  /** Additional props for the main container (if needed). */
  containerProps?: ViewProps;
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

  const animatedContainerStyle = useAnimatedStyle(() => {
    return {
      height: scrollViewHeight.value,
    };
  });

  const handleContentSizeChange = (_: number, contentHeight: number) => {
    const newHeight = contentHeight;
    scrollViewHeight.value = withTiming(newHeight, {
      duration: animationDuration,
      easing: Easing.bezier(0.25, 0.1, 0.25, 1),
    });
  };

  return (
    <Animated.View
      style={[animatedContainerStyle, containerStyle]}
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
