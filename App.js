import React from "react";
import { StyleSheet, View, Text, Dimensions, Button } from "react-native";
import Home from "./components/home.js";
import Constants from "expo-constants";
const Data = [
  "Adam",
  "Alex",
  "Aaron",
  "Ben",
  "Carl",
  "Dan",
  "David",
  "Edward",
  "Fred",
  "Frank",
  "George",
  "Hal",
  "Hank",
  "Ike",
  "John",
  "Jack",
  "Joe",
  "Larry",
  "Monte",
  "Matthew",
  "Mark",
  "Nathan",
  "Otto",
  "Paul",
  "Peter",
  "Rogere",
  "Roger",
  "Steve",
  "Thomas",
  "Tim",
  "Ty",
  "Victor",
  "Walter",
  "Anderson",
  "Ashwoon",
  "Aikin",
  "Bateman",
  "Bongard",
  "Bowers",
  "Boyd",
  "Cannon",
  "Cast",
  "Deitz",
  "Dewalt",
  "Ebner",
  "Frick",
  "Hancock",
  "Haworth",
  "Hesch",
  "Hoffman",
  "Kassing",
  "Knutson",
  "Lawless",
  "Lawicki",
  "Mccord",
  "McCormack",
  "Miller",
  "Myers",
  "Nugent",
  "Ortiz",
  "Orwig",
  "Ory",
  "Paiser",
  "Pak",
  "Pettigrew",
  "Quinn",
  "Quizoz",
  "Ramachandran",
  "Resnick",
  "Sagar",
  "Schickowski",
  "Schiebel",
  "Sellon",
  "Severson",
  "Shaffer",
  "Solberg",
  "Soloman",
  "Sonderling",
  "Soukup",
  "Soulis",
  "Stahl",
  "Sweeney",
  "Tandy",
  "Trebil",
  "Trusela",
  "Trussel",
  "Turco",
  "Uddin",
  "Uflan",
  "Ulrich",
  "Upson",
  "Vader",
  "Vail",
  "Valente",
  "Van Zandt",
  "Vanderpoel",
  "Ventotla",
  "Vogal",
  "Wagle",
  "Wagner",
  "Wakefield",
  "Weinstein",
  "Weiss",
  "Woo",
  "Yang",
  "Yates",
  "Yocum",
  "Zeaser",
  "Zeller",
  "Ziegler",
  "Bauer",
  "Baxster",
  "Casal",
  "Cataldi",
  "Caswell",
  "Celedon",
  "Chambers",
  "Chapman",
  "Christensen",
  "Darnell",
  "Davidson",
  "Davis",
  "DeLorenzo",
  "Dinkins",
  "Doran",
  "Dugelman",
  "Dugan",
  "Duffman",
  "Eastman",
  "Ferro",
  "Ferry",
  "Fletcher",
  "Fietzer",
  "Hylan",
  "Hydinger",
  "Illingsworth",
  "Ingram",
  "Irwin",
  "Jagtap",
  "Jenson",
  "Johnson",
  "Johnsen",
  "Jones",
  "Jurgenson",
  "Kalleg",
  "Kaskel",
  "Keller",
  "Leisinger",
  "LePage",
  "Lewis",
  "Linde",
  "Lulloff",
  "Maki",
  "Martin",
  "McGinnis",
  "Mills",
  "Moody",
  "Moore",
  "Napier",
  "Nelson",
  "Norquist",
  "Nuttle",
  "Olson",
  "Ostrander",
  "Reamer",
  "Reardon",
  "Reyes",
  "Rice",
  "Ripka",
  "Roberts",
  "Rogers",
  "Root",
  "Sandstrom",
  "Sawyer",
  "Schlicht",
  "Schmitt",
  "Schwager",
  "Schutz",
  "Schuster",
  "Tapia",
  "Thompson",
  "Tiernan",
  "Tisler",
];

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      view: 0,
      /*
        {
          0: home,
          1:add,
        }
      */
      contacts: [
        {
          name: "viraj",
          number: "+911234567890",
        },
      ],
    };
  }

  handleViewChange = (no) => {
    this.setState({ view: no });
  };

  handleAddContact = (username, usernumber) => {
    let temp = this.state.contacts;
    let arr = [];
    temp.map((contact) => {
      arr.push(contact.name);
    });
    arr.push(username);
    arr.sort();
    let index = arr.indexOf(username);
    temp.splice(index, 0, { name: username, number: usernumber });
    this.setState({ contacts: temp });
  };

  addDummy = () => {
    let num = 180;
    for (let i = 0; i < num; i++) {
      this.handleAddContact(
        Data[i],
        i.toString() * 10 + i.toString() * 1000 + 999999
      );
    }

    console.log("done");
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.appTitle}>
          <Text style={styles.appTitleText}>Contacts</Text>
          <Button title="adddummy" onPress={this.addDummy}></Button>
        </View>
        <Home
          addContact={this.handleAddContact}
          changeView={this.handleViewChange}
          stateValues={this.state}
        ></Home>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    top: Constants.statusBarHeight,
  },
  appTitle: {
    fontSize: 24,
    padding: 10,
    backgroundColor: "#fafafa",
    width: Dimensions.get("window").width,
    borderBottomColor: "#dbdbdb",
    borderBottomWidth: 1,
    display: "flex",
    alignItems: "center",
    marginBottom: 10,
  },
  appTitleText: {
    color: "#30b1db",
    fontSize: 24,
  },
});
