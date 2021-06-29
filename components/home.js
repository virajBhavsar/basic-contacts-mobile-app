import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
  FlatList,
  TextInput,
  Button,
  Pressable,
  SectionList,
} from "react-native";

import AddContact from "./addContact";
import DisplayContacts from "./displayContact";

export default function Home(prop) {
  const showAddform = () => {
    prop.changeView(1);
  };

  const renderSectionHeader = (obj) => {
    <Text>{obj.section.title}</Text>;
  };

  if (prop.stateValues.view === 0) {
    return (
      <DisplayContacts
        stateValues={prop.stateValues}
        addContact={prop.addContact}
        changeView={prop.changeView}
      ></DisplayContacts>
    );
  } else if (prop.stateValues.view === 1) {
    return (
      <AddContact addContact={prop.addContact} changeView={prop.changeView} />
    );
  } else {
    return (
      <View style={styles.container}>
        <Text>home err</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    width: Dimensions.get("window").width,
    alignItems: "center",
  },

  newBtn: {
    width: Dimensions.get("window").width,
    alignItems: "flex-end",
    padding: 10,
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
  contactList: {
    borderTopWidth: 1,
    borderTopColor: "#cfcfcf",
    paddingBottom: 220,
  },
  oneContact: {
    marginLeft: 10,
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#cfcfcf",
    width: Dimensions.get("window").width - 20,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  contactIcon: {
    borderColor: "grey",
    width: 40,
    height: 40,
    borderRadius: 40 / 2,
    borderWidth: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 20,
  },
  contactNameText: {
    fontSize: 20,
  },
  contactIconText: {
    fontSize: 24,
    color: "grey",
  },
  inputs: {
    width: Dimensions.get("window").width - 20,
    margin: 10,
    padding: 3,
    borderBottomWidth: 1,
    borderBottomColor: "#dbdbdb",
  },
});
