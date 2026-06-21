import { useRouter } from "expo-router";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function Index() {
  const screens = ["First Animation"];
  const router = useRouter();

  const handlePress = (screenName: string) => {
    if (screenName === "First Animation") {
      router.navigate("/firstanimation");
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={screens}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handlePress(item)}>
            <View style={styles.listItem}>
              <Text
                onPress={() => handlePress(item)}
                suppressHighlighting={false}
              >
                {item}
              </Text>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listItem: {
    padding: 20,
    marginHorizontal: 16,
    marginVertical: 8,
    backgroundColor: "lightgray",
    borderRadius: 5,
    flexDirection: "row",
    flex: 1,
  },
});
