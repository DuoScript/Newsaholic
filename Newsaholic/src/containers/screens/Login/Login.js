import React from "react";
import { Text, View, Image, TextInput, StyleSheet } from "react-native";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faKey, faUser } from '@fortawesome/free-solid-svg-icons'
import { Actions } from "react-native-router-flux";
import signinImage from "../../../../assects/images/signin.png"
// import rss from '../../../Feed/testFeed'

class Login extends React.Component {
  render() {
    return (
      <View style={styles.loginPage}>
        {/* Image Part */}
        <Image
          source={signinImage}
          style={styles.loginImage}
        />

        {/* Text Part */}
        <Text
          style={styles.Title}>
          Know The World
        </Text>
        <Text
          style={styles.subTitle}>
          Read Newsaholic, Stay Connected.
        </Text>

        {/* Text Input, Sign In & New User */}
        <View
          style={styles.textInputBox1}>
          <FontAwesomeIcon icon={faUser} color="#00716F" size={24} />
          <TextInput
            placeholder="Username"
            placeholderTextColor="black"
            style={styles.textInput}
          />
        </View>
        <View style={styles.textInputBox2}>
          <FontAwesomeIcon icon={faKey} color="#00716F" size={24} />
          <TextInput
            placeholder="Password"
            placeholderTextColor="black"
            secureTextEntry={true}
            style={styles.textInput}
          />
        </View>
        <View style={styles.signIn}>
          <Text style={{
            color: "white",
          }}  onPress={() => Actions.replace('homenews')}>Log In</Text>
        </View>
        <Text style={styles.newUser}>
          <Text
            style={{ color: "#000000" }}>
            New User?
          </Text>
          <Text
            style={{ color: "#00716F", fontSize: 17 }}
            onPress={() => Actions.replace('register')}>
            &nbsp;Register
          </Text>
        </Text>

        {/* Google & Facebook */}
        <View style={styles.registerWith}>
          <Text>--- LOGIN  WITH ---</Text>
        </View>
        <View style={styles.otherOptionContainer}>
          <View style={styles.Google}>
            <Text style={{
              color: "white",
            }}>Google</Text>
          </View>
          <View style={styles.Facebook}>
            <Text style={{
              color: "white",
            }}>Facebook</Text>
          </View>
        </View>


      </View>
    );
  }
}

export default Login

const styles = StyleSheet.create({
  loginPage: {
    backgroundColor: "#FFF",
    height: "100%"
  },
  loginImage: {
    width: "100%",
    height: "37%"
  },
  Title: {
    fontSize: 30,
    alignSelf: "center",
    marginTop: 15
  },
  subTitle: {
    marginHorizontal: 55,
    textAlign: 'center',
    marginTop: 5,
    opacity: 0.4
  },
  textInputBox1: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 55,
    borderWidth: 2,
    marginTop: 30,
    paddingHorizontal: 10,
    borderColor: "#00716F",
    borderRadius: 23,
    paddingVertical: 2
  },
  textInputBox2: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 55,
    borderWidth: 2,
    marginTop: 20,
    marginBottom: 15,
    paddingHorizontal: 10,
    borderColor: "#00716F",
    borderRadius: 23,
    paddingVertical: 2
  },
  textInput: {
    paddingHorizontal: 10,
    width: '100%'
  },
  signIn: {
    marginHorizontal: 55,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 15,
    marginBottom: 10,
    backgroundColor: "#00716F",
    paddingVertical: 10,
    borderRadius: 23,
    width: '40%',
    height: 45,
    marginLeft: '30%'
  },
  newUser: {
    alignSelf: "center",
    color: "#00716F",
    fontWeight: '600',
    marginTop: -2,
    marginBottom: 10,
  },
  registerWith: {
    flexDirection: "row", 
    alignItems: "center", 
    justifyContent: "center", 
    marginTop: 13
  },
  otherOptionContainer: {
    flex: 1,
    width: '100%',
    flexDirection: 'row'
  },
  Google: {
    marginHorizontal: 55,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    backgroundColor: "#BB001B",
    paddingVertical: 15,
    borderRadius: 23,
    width: '25%',
    height: '22%',
    marginLeft: '22%',
    marginRight: '3%'
  },
  Facebook: {
    marginHorizontal: 55,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    backgroundColor: "#3B5998",
    paddingVertical: 15,
    borderRadius: 23,
    width: '25%',
    height: '22%',
    marginLeft: '3%',
    marginRight: '22%'
  }
})