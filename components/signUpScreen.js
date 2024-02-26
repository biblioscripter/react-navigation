import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default function SignUpScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.bg}>
        <Image
          source={require("../assets/sign-up-bg.png")}
          style={styles.image}
        ></Image>
      </View>
      <Text style={styles.text}>Create Account</Text>
      <View style={styles.main}>
        <TextInput style={styles.input} placeholder="First Name" require/>
        <TextInput style={styles.input} placeholder="Last Name" />
        <TextInput style={styles.input} placeholder="Email" />
        <TextInput style={styles.input} placeholder="Password" />
        <TouchableOpacity style={styles.submitButton} onPress={() => {
          navigation.navigate("Dashboard", {
            name: "Jameel"
          })
        }}>
          <Text style={styles.submitButtonText}>Submit</Text>
        </TouchableOpacity>
        <View style={styles.last}>
        <TouchableOpacity>
          <Text style={styles.question}>Already have an account?</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {
          navigation.navigate("Sign In")
        }}>
          <Text style={styles.goto}> Sign in</Text>
        </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bg: {
    flex: 2,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  main: {
    flex: 2.4,
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
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  submitButton: {
    backgroundColor: "#6C63FF",
    width: "90%",
    height: 50,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: "#6C63FF",
    paddingTop: 10,
    marginTop: 25,
  },
  submitButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  last: {
    marginTop: 15,
    flex: 1,
    flexDirection: "row",
  },
  question: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#D6D5DA",
    textAlign: "center",
  },
  goto: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#6C63FF",
    textAlign: "center",
  },
});
