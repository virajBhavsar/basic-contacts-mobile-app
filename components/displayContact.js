import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Pressable,
  SectionList,
} from "react-native";

export default function DisplayContacts(prop) {
  const showAddform = () => {
    prop.changeView(1);
  };
  const renderSectionHeader = (obj) => {
    <Text>{obj.section.title}</Text>;
  };
  const RenderOne = ({ item }) => {
    return (
      <View style={styles.oneContact} key={item.name}>
        <View style={styles.contactIcon}>
          <Text style={styles.contactIconText}>{item.name[0]}</Text>
        </View>
        <View style={styles.contactName}>
          <Text style={styles.contactNameText}>{item.name}</Text>
          <Text style={styles.contactNameText}>{item.number}</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.newBtn}>
        <Pressable style={styles.newBtnBtn} onPress={showAddform}>
          <Text style={styles.newBtnText}>new contact</Text>
        </Pressable>
      </View>
      <View style={styles.contactList}>
        <SectionList
          sections={[
            {
              title: "A",
              data: prop.stateValues.contacts,
            },
          ]}
          renderSectionHeader={renderSectionHeader}
          renderItem={RenderOne}
          keyExtractor={(item) => item.name}
        />
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

  newBtn: {
    width: Dimensions.get("window").width,
    alignItems: "flex-end",
    padding: 10,
  },

  newBtnBtn: {
    padding: 10,
    borderRadius: 10,
  },
  newBtnText: {
    color: "#30b1db",
    fontSize: 20,
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
    fontSize: 16,
  },
  contactIconText: {
    fontSize: 24,
    color: "grey",
  },
});
