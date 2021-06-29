import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TextInput,
  Pressable,
} from "react-native";
import PropTypes from "prop-types";

export default function AddContact(prop) {
  const [username, setUserName] = useState("");
  const [usernumber, setUserNumber] = useState("");

  const back = () => {
    prop.changeView(0);
  };
  const handleAddContact = () => {
    prop.addContact(username, usernumber);
    prop.changeView(0);
    clear();
  };
  const clear = () => {
    setUserName("");
    setUserNumber("");
  };
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>add contact</Text>
      <TextInput
        style={styles.inputs}
        placeholder="name"
        onChangeText={(text) => setUserName(text)}
        defaultValue={username}
      ></TextInput>
      <TextInput
        style={styles.inputs}
        placeholder="number"
        onChangeText={(text) => setUserNumber(text)}
        defaultValue={usernumber}
        keyboardType="numeric"
      ></TextInput>

      <View style={styles.navBtns}>
        <Pressable style={styles.newBtnBtn} onPress={back}>
          <Text style={styles.newBtnText}>back</Text>
        </Pressable>
        <Pressable style={styles.newBtnBtn} onPress={handleAddContact}>
          <Text style={styles.newBtnText}>save</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    width: Dimensions.get("window").width,
    alignItems: "center",
  },

  navBtns: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: Dimensions.get("window").width,
    paddingHorizontal: 10,
  },
  newBtnBtn: {
    padding: 10,
    borderRadius: 10,
  },
  newBtnText: {
    color: "#30b1db",
    fontSize: 20,
  },
  titleText: {
    fontSize: 16,
  },

  inputs: {
    width: Dimensions.get("window").width - 20,
    margin: 10,
    padding: 3,
    borderBottomWidth: 1,
    borderBottomColor: "#dbdbdb",
  },
});
