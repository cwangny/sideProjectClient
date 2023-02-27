/* eslint-disable react/prop-types */
import React from "react";
import { View, Text, Button, Image, ScrollView } from "react-native";
import { connect } from "react-redux";

// navigation prop is passed to every component by native stack navigator
const Home = ({ navigation, images }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home</Text>
      <Button
        title="Open Camera"
        onPress={() => navigation.navigate("Camera")}
      />
      <ScrollView>
        {images.map((image, index) => (
          <Image
            key={index}
            source={{ uri: image }}
            style={{ width: 200, height: 200 }}
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

export default connect(mapStateToProps)(Home);
