import React, { useState } from "react";
import { Text, View, StyleSheet, ScrollView, FlatList, TouchableOpacity } from "react-native";
import PaceCircle from "../../components/paceCircle";

const Home = () => {
  const today = new Date();
  const formattedDate = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;
  const [items, setItems] = useState([
    { id: '1', name: 'Item 1', checked: false },
    { id: '2', name: 'Item 2', checked: false },
    { id: '3', name: 'Item 3', checked: false },
    // Add more items as needed
  ]);
  const toggleItem = (id) => {
    setItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  };
  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => toggleItem(item.id)} style={styles.item}>
      <Text style={item.checked ? styles.checkedText : styles.uncheckedText}>{item.name}</Text>
    </TouchableOpacity>
  );
  return(
    <View style={styles.allContainer}>
      <View style={{flex: 10, borderWidth: 0}}>
        <Text style={styles.date}>{formattedDate}</Text>
      </View>
      <View style={{flex: 30, marginHorizontal: 15, marginTop: 0, marginBottom: 10, borderWidth: 3}}>
        <FlatList
          data={items}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
      <View style={{flex: 35, marginHorizontal: 15, marginTop: 10, marginBottom: 10, borderWidth: 3}}>
        <ScrollView
          horizontal="true"
          contentContainerStyle={{flexGrow: 0,
            flexDirection: "row",
            justifyContent: 'center',
            paddingTop: 20}}>
              <PaceCircle />
              <PaceCircle />
              <PaceCircle />
        </ScrollView>
      </View>
      <View style={{flex: 25, marginHorizontal: 15, marginTop: 10, marginBottom: 10, borderWidth: 3}}></View>
      <View style={{flex: 13, marginTop: 0, marginBottom: 0, borderWidth: 3}}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  allContainer: {
    marginTop: 20,
    flex: 1,
    backgroundColor: 'white',
  },
  date: {
    flex: 1,
    fontSize: 40,
    fontWeight: "600",
    alignContent: 'center',
    marginTop: 5,
    marginLeft: 20,
    marginRight: 20,
  },
});

export default Home;