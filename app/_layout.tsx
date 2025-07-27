import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import CircularProgressIndicator from "react-native-circular-progress-indicator";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";
import { Text as UIText } from "../components/ui/text";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.body}>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.appBar}>
          <Text style={styles.title}>flutter default app with react</Text>
        </View>
      </SafeAreaView>

      <ScrollView
        style={styles.scrollContainer}
        contentContainerStyle={styles.content}
      >
        <Text style={styles.counterText}>counter : {count}</Text>

        <View style={styles.progressContainer}>
          <CircularProgressIndicator
            value={55}
            radius={73}
            duration={1000}
            progressValueColor={"#333"}
            maxValue={100}
            activeStrokeWidth={11}
            inActiveStrokeWidth={11}
            title={`55/100`}
            subtitle={"Based on your\nhabit tracker or\nsomething"}
            titleColor={"#333"}
            subtitleColor={"#999"}
            titleStyle={{ fontWeight: "bold", fontSize: 24 }}
            subtitleStyle={{ fontSize: 12, textAlign: "center" }}
            activeStrokeColor={"#FF6B35"}
            inActiveStrokeColor={"#E8E8E8"}
            showProgressValue={false}
          />
        </View>

        <View style={styles.accordionContainer}>
          <Text style={styles.sectionTitle}>App Features</Text>

          <Accordion type="multiple" className="w-full">
            <AccordionItem value="counter">
              <AccordionTrigger>
                <UIText className="text-lg font-medium">
                  Counter Function
                </UIText>
              </AccordionTrigger>
              <AccordionContent>
                <UIText className="text-gray-600">
                  This counter allows you to increment the value by pressing the
                  + button. The current count is {count}. It's a simple state
                  management demonstration.
                </UIText>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="progress">
              <AccordionTrigger>
                <UIText className="text-lg font-medium">
                  Progress Indicator
                </UIText>
              </AccordionTrigger>
              <AccordionContent>
                <UIText className="text-gray-600">
                  The circular progress indicator shows 55/100 completion. It
                  could represent your daily goals, habit tracking, or any
                  progress-based metric in the app.
                </UIText>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="features">
              <AccordionTrigger>
                <UIText className="text-lg font-medium">
                  Additional Features
                </UIText>
              </AccordionTrigger>
              <AccordionContent>
                <UIText className="text-gray-600">
                  This app includes React Native Reanimated animations, custom
                  components, and a modern UI with accordion functionality. You
                  can expand and collapse sections to organize content
                  efficiently.
                </UIText>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="customization">
              <AccordionTrigger>
                <UIText className="text-lg font-medium">
                  Customization Options
                </UIText>
              </AccordionTrigger>
              <AccordionContent>
                <UIText className="text-gray-600">
                  The app supports theming, custom colors, and flexible layouts.
                  You can modify the progress indicator values, counter
                  increments, and accordion content based on your needs.
                </UIText>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </View>
      </ScrollView>

      <TouchableOpacity
        style={styles.fab}
        onPress={() => setCount((prev) => prev + 1)}
      >
        <Text style={styles.fabIcon}>+</Text>
      </TouchableOpacity>
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
  scrollContainer: {
    flex: 1,
  },
  content: {
    padding: 20,
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
    marginBottom: 20,
  },
  progressContainer: {
    marginBottom: 30,
    alignItems: "center",
  },
  accordionContainer: {
    width: "100%",
    maxWidth: 400,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 15,
    textAlign: "center",
    color: "#333",
  },
});
