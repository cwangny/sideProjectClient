/* eslint-disable react/prop-types */
import React from "react";
import {
  View,
  Text,
  Button,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { connect } from "react-redux";
import { auth } from "../../firebase";

// navigation prop is passed to every component by native stack navigator
const Home = ({ navigation, images }) => {
  const handleLogOut = () => {
    auth
      .signOut()
      .then(() => {
        console.log("Logged out");
        navigation.replace("Login");
      })
      .catch((error) => alert(error.message));
  };

  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <Text>Email: {auth.currentUser?.email}</Text>
      <TouchableOpacity>
        <Text onPress={() => handleLogOut()}>Log Out</Text>
      </TouchableOpacity>
      <Button
        title="Open Camera"
        onPress={() => navigation.navigate("Camera")}
      />
      <ScrollView>
        {images.map((image, index) => (
          <Image
            key={index}
            source={{ uri: image }}
            style={{
              width: 300,
              height: 500,
            }}
          />
        ))}
      </ScrollView>
    </View>
  );
};

const mapStateToProps = (state) => {
  return {
    images: state.images,
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default connect(mapStateToProps)(Home);
