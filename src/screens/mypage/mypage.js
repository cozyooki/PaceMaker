import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function MyPage() {
  return(
    <View style={styles.container}>
      <View style={styles.setting}>
        <View style={styles.settingCircle}></View>
      </View>
      <View style={styles.me}>
        <View style={styles.image}>
        </View>
        <View>
          <Text style={styles.mee}>me</Text>
          <Text style={styles.follow}>팔로잉 0  팔로워 0</Text>
        </View>
      </View>
      <View style={styles.shop}>
        <View style={styles.blbo}>
          <View style={styles.draw}></View>
          <Text style={styles.blboo}>나의 기록</Text>
        </View>
        <View style={styles.blbo}>
          <View style={styles.draw}></View>
          <Text style={styles.blboo}>Premium</Text>
        </View>
        <View style={styles.blbo}>
          <View style={styles.draw}></View>
          <Text style={styles.blboo}>스티커샵</Text>
        </View>
      </View>
      <View style={styles.rulu}>
        <View style={styles.guitar}>
          <Text style={styles.bold}>노트</Text>
        </View>
        <View style={styles.guitar}>
          <Text style={styles.bold}>보관함</Text>
        </View>
      </View>
      <View style={styles.talk}>
        <Text style={styles.big}>"무거운 마음을 가지고 가벼운 시를 즐길 수 없다"</Text>
        <Text style={styles.small}>베이커</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  setting: {
    flex: 0.5,
    backgroundColor: "black",
  },
  settingCircle: {
    backgroundColor: "white",
    borderRadius: 50,
    alignSelf: "flex-end",
    width: 30,
    height: 30,
    marginTop: 10,
    marginRight: 15,
  },
  me: {
    flex: 1.5,
    backgroundColor: "black", 
    flexDirection: "row",
  },
  shop: {
    flex: 1.5,
    flexDirection: "row",
    backgroundColor: "#3A3D40",
    borderRadius: 30,
    paddingVertical: 15,
    paddingHorizontal: 20,
    margin: 10, 
    zIndex: 2,
  }, 
  draw: {
    flex: 0.8,
    backgroundColor: "White",
    width: 50,
    height: 50,
    zIndex: 1,
  },
  blbo: {
    flex:1,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1,
  },
  blboo: {
    color: "white",
  },
  rulu: {
    flex: 2,
    flexDirection: "row",
  },
  bold: {
    color: "white",
    fontWeight: "600",
    fontSize: 20,
  },
  guitar: {
    flex: 2,
    backgroundColor: "#3A3D40",
    borderRadius: 30,
    paddingVertical: 15,
    paddingHorizontal: 20, 
    marginBottom: 15,
    marginLeft: 10,
    marginRight: 10,
  },
  talk: {
    flex: 4,
    marginTop:10,
    alignItems: "center",
  },
  big: {
    color: "white",
    marginTop: 20,
    fontSize: 18,
    fontWeight: "100",
  },
  small: {
    color: "white",
    fontSize: 10,
    fontWeight: "100",
  },
  image: {
    flex: 0.4,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    width: 100,
    height: 100,
    backgroundColor: "grey",
    margin: 15
  },
  follow: {
    color: "white",
    fontSize: 18,
    fontWeight: "500",
    marginTop: 10,
  },
  mee: {
    color: "white",
    fontSize: 23,
    fontWeight: "800",
    marginTop: 20,
  }
})
