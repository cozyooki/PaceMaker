import React, { Component } from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";

const PaceDepth1 = () => {
  return(
    <View style={styles.allContainer}>
      <View style={{marginTop: 0}}>
        <ScrollView>
          <View style={{borderWidth: 1, height: 200, backgroundColor: 'white'}}>
            <Text>111111</Text>
          </View>
          <View style={{borderWidth: 1, height: 280, backgroundColor: 'white'}}>
            <Text>111111</Text>
          </View>
          <View style={{borderWidth: 1, height: 250, backgroundColor: 'white'}}>
            <Text>111111</Text>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  allContainer: {
    marginTop: 20,
    flex: 1,
    backgroundColor: 'red',
  },
})

export default PaceDepth1;