import { Button, StyleSheet, View } from "react-native";
import Animated, {
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";
export default function firstAnimation() {
  const height = useSharedValue(100);
  const width = useSharedValue(100);
  const color = useSharedValue("blue");
  const handlePress = () => {
    height.value = withSpring(Math.random() * 300);
    width.value = withSpring(Math.random() * 300);
    color.value = withTiming(
      `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`,
    );
  };
  return (
    <View style={styles.container}>
      <Animated.View
        style={{ height: height, width: width, backgroundColor: color }}
      ></Animated.View>
      <Button title="Animate" onPress={handlePress} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
