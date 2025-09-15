import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { PostHogProvider, usePostHog } from "posthog-react-native";

function MainApp() {
  const [count, setCount] = useState(0);
  const posthog = usePostHog();

  // Example: identify the user once you know who they are
  useEffect(() => {
    posthog?.identify("user_123", {
      name: "John Doe",
      email: "john@example.com",
      plan: "free",
    });
  }, []);

  // Example: track screen view
  useEffect(() => {
    posthog?.screen("HomeScreen");
  }, []);

  const handleIncrement = () => {
    const newCount = count + 1;
    setCount(newCount);

    // Capture a custom event
    posthog?.capture("counter_incremented", {
      count: newCount,
    });
  };

  return (
    <View style={styles.body}>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.appBar}>
          <Text style={styles.title}>Flutter default app with React</Text>
        </View>
      </SafeAreaView>
      <View style={styles.content}>
        <Text style={styles.counterText}>counter : {count}</Text>
      </View>
      <TouchableOpacity style={styles.fab} onPress={handleIncrement}>
        <Text style={styles.fabIcon}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

export default function App() {
  return (
    <PostHogProvider
      apiKey="phc_PsyTMjE7qDJVJXymPwoY7WUoyxxjO0vHAKMd3K4JYju"
      options={{
        host: "https://us.i.posthog.com",
        enableSessionReplay: true,
      }}
      autocapture
    >
      <MainApp />
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
