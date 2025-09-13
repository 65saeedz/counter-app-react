import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { PostHogProvider } from "posthog-react-native";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <PostHogProvider
      apiKey="phc_PsyTMjE7qDJVJXymPwoY7WUoyxxjO0vHAKMd3K4JYju"
      options={{
        host: 'https://us.i.posthog.com',
        enableSessionReplay: true,
      }}
      autocapture
    >
      <View style={styles.body}>
        <SafeAreaView style={styles.safeArea}>
          <View style={styles.appBar}>
            <Text style={styles.title}>flutter default app with react</Text>
          </View>
        </SafeAreaView>
        <View style={styles.content}>
          <Text style={styles.counterText}>counter : {count}</Text>
        </View>
        <TouchableOpacity
          style={styles.fab}
          onPress={() => setCount((prev) => prev + 1)}
        >
          <Text style={styles.fabIcon}>+</Text>
        </TouchableOpacity>
      </View>
    </PostHogProvider>
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
    color: "#ffffff",
    fontSize: 20,
    fontWeight: "bold",
  },
  body: {
    flex: 1,
    backgroundColor: "#f2f2ff",
  },
  fab: {
    position: "absolute",
    right: 40,
    bottom: 60,
    backgroundColor: "#2196F3",
    width: 64,
    height: 64,
    borderRadius: 128,
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
  },
  fabIcon: {
    fontSize: 32,
    color: "#fff",
  },
  counterText: {
    fontSize: 26,
  },
});