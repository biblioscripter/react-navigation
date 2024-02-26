import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default function SignInScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.bg}>
        <Image
          source={require("../assets/sign-in-bg.png")}
          style={styles.image}
        ></Image>
      </View>
      <Text style={styles.text}>Welcome</Text>
      <View style={styles.main}>
        <TextInput style={styles.input} placeholder="Email" />
        <TextInput style={styles.input} placeholder="Password" />
        <TouchableOpacity style={styles.signInButton} onPress={() => {
          navigation.navigate("Dashboard", {name: "Jameel"})
        }}>
          <Text style={styles.signInButtonText}>Sign In</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.forgotPasswordText}>Forgot password?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.createAccountButton} onPress={() => {
          navigation.navigate("Sign Up")
        }}>
          <Text style={styles.createAccountButtonText}>Create Account</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bg: {
    flex: 1,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  main: {
    flex: 1,
    alignItems: "center",
  },
  text: {
    fontSize: 22,
    marginBottom: 20,
    fontWeight: "bold",
    paddingLeft: 20,
  },
  input: {
    width: "90%",
    height: 50,
    borderWidth: 2,
    borderColor: "#E2E3E4",
    borderRadius: 8,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  signInButton: {
    backgroundColor: "#fff",
    width: "90%",
    height: 50,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: "#6C63FF",
    paddingTop: 10,
    marginBottom: 10,
  },
  signInButtonText: {
    color: "#6C63FF",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  forgotPasswordText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#D6D5DA",
    textAlign: "center",
    marginBottom: 30,
  },
  createAccountButton: {
    backgroundColor: "#6C63FF",
    width: "90%",
    height: 50,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: "#6C63FF",
    paddingTop: 10,
  },
  createAccountButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});
