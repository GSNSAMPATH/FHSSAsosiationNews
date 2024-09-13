import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { PitaLogo, SjpLogo } from "../components/Logo/Logo";
import NewsComponent from "../components/News/newsComponent";


const HomeScreen = () => {
  return (
    <View style={styles.container1}>
      <View style={styles.view1}>
        <SjpLogo />
        <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
        <Text style={{ fontSize: 11, fontWeight: "bold" }}>Student Assosiation </Text>
        <Text style={{ fontSize: 11, fontWeight: "bold" }}>Faculty Of Humanities and Social Sciences</Text>
        <Text style={{ fontSize: 11, fontWeight: "bold" }}>Uiversity of Sri Jayawardanapura</Text>
        </View>
        <PitaLogo  />
      </View> 
      <NewsComponent/>
  
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  container1: {

    backgroundColor: "#fff",
  },
  text: {
    fontSize: 30,
    fontWeight: "bold",
    color: "red",
  },
  view1: {
    height: 100,
    width: "100%",
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    
  },
});

export default HomeScreen;
