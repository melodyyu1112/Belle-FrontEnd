import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
} from "react-native";
import Swiper from "react-native-swiper";
import {useRouter} from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";

const {width, height} = Dimensions.get("window");

const OnboardingScreen = () => {
  console.log("Onboarding Screen Loaded"); // Debugging

  const router = useRouter();

  const handleFinish = async () => {
    // await AsyncStorage.setItem("hasSeenOnboarding", "true");
    router.replace("/(tabs)"); // Navigate to the main app
  };

  return (
    <Swiper
      loop={false}
      showsPagination={true}
      dotColor="gray"
      activeDotColor="#FF69B4"
    >
      {/* Slide 1 */}
      <View style={styles.slide}>
        {/* <Image
          source={require("../assets/onboarding1.png")}
          style={styles.image}
        /> */}
        <Text style={styles.title}>Your Beauty Bestie Awaits!</Text>
        <Text style={styles.description}>
          Belle is your beauty companion providing personalized recommendations
          for beauty treatments that suit you best!
        </Text>
      </View>

      {/* Slide 2 */}
      <View style={styles.slide}>
        {/* <Image
          source={require("../assets/onboarding2.png")}
          style={styles.image}
        /> */}
        <Text style={styles.title}>
          Discover Treatments Tailored to Your Needs!
        </Text>
        <Text style={styles.description}>
          Belle learns your preferences and skin type to suggest the best beauty
          services, ensuring you get the right treatment every time!
        </Text>
      </View>

      {/* Slide 3 */}
      <View style={styles.slide}>
        {/* <Image
          source={require("../assets/onboarding3.png")}
          style={styles.image}
        /> */}
        <Text style={styles.title}>Seamless Beauty Discovery!</Text>
        <Text style={styles.description}>
          Explore top beauty services near you, compare styles, and book
          effortlessly all in one place.
        </Text>
        <TouchableOpacity style={styles.button} onPress={handleFinish}>
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </Swiper>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  slide: {flex: 1, justifyContent: "center", alignItems: "center", padding: 20},
  image: {
    width: width * 0.8,
    height: height * 0.4,
    resizeMode: "contain",
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    textAlign: "center",
    color: "#666",
    marginBottom: 20,
  },
  button: {
    marginTop: 20,
    backgroundColor: "#FF69B4",
    padding: 15,
    borderRadius: 10,
  },
  buttonText: {color: "#fff", fontSize: 18, fontWeight: "bold"},
});
