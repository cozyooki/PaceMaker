import React from "react";
import { View, StyleSheet, TextInput, Text } from "react-native";

const SignInPage = () => {
  const [text1, onChangeText1] = React.useState('이메일');
  const [text2, onChangeText2] = React.useState('비밀번호');
  return (
    <View>
      <Text style={{fontSize:35, fontWeight:'bold', marginTop: 30, marginLeft: 10}}>로그인</Text>
      <Text style={{fontSize:20, marginTop:20, marginLeft: 20}}>이메일</Text>
      <TextInput
      style={styles.input1}
      onChangeText={onChangeText1}
      value={text1}
      />
      <Text style={{fontSize:20, marginLeft:20}}>비밀번호</Text>
      <TextInput
      style={styles.input2}
      onChangeText={onChangeText2}
      value={text2}
      placeholder="영문, 숫자 조합 8 ~ 16자."
      />
    </View>
  );
}
const styles = StyleSheet.create({
  input1: {
    margin: 20,
    height: 40,
    borderWidth: 1,
    padding: 10,
  },
  input2: {
    height: 40,
    margin: 20,
    borderWidth: 1,
    padding: 10,
  },
});
export default SignInPage;