import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>
        Bismillah Alhamdulillah Allah u akbar, mays allah help me guide us all
        and make this developpement beneficial! Amin
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#b11818ff",
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 10,
  },
});
