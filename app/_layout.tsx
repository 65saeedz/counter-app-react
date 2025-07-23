import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.body}>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.appBar}>
          <Text style={styles.title}>flutter default app with react</Text>
        </View>
      </SafeAreaView>
      <View style={styles.content}>
        <Text>محتوای اصلی برنامه</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: "#2196F3",
  },
  appBar: {
    height: 56,
    backgroundColor: "#2196F3",
    justifyContent: "center",
    alignItems: "center",
    elevation: 4,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "#ff1f",
    fontSize: 20,
    fontWeight: "bold",
  },
  body: {
    flex: 1,
    backgroundColor: "#f2ff",
  },
});
