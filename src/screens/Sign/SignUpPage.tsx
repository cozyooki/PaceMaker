import React from "react";
import { View, StyleSheet, TextInput, Text, Button } from "react-native";
import { CheckBox } from '@rneui/themed';

const SignUpPage = () => {
  const [goBack, onGoBack] = React.useState('');
  const [text1, onChangeText1] = React.useState('');
  const [text2, onChangeText2] = React.useState('');
  const [text3, onChangeText3] = React.useState('');
  const [name, onChangeName] = React.useState('');
  const [checked1, setChecked1] = React.useState(true);
  const [checked2, setChecked2] = React.useState(true);
  const [checked3, setChecked3] = React.useState(true);
  const [checked4, setChecked4] = React.useState(true);
  const toggleCheckbox1 = () => setChecked1(!checked1);
  const toggleCheckbox2 = () => setChecked2(!checked2);
  const toggleCheckbox3 = () => setChecked3(!checked3);
  const toggleCheckbox4 = () => setChecked4(!checked4);
  return (
    <View style={{flex:1}}>
      <Button title="GoBack" color={'red'} />
      <Text style={styles.title}>회원가입</Text>
      <View style={{flex:75}}>
        <Text style={{fontSize:18, marginTop:5, marginLeft: 20, fontFamily:'Noto Sans KR'}}>이메일</Text>
        <TextInput
        style={styles.input}
        onChangeText={onChangeText1}
        value={text1}
        autoCapitalize="none"
        />
      </View>
      <View style={{flex:75}}>
        <Text style={{fontSize:18, marginLeft: 20, marginTop:0, fontFamily:'Noto Sans KR'}}>비밀번호</Text>
        <TextInput
        style={styles.input}
        onChangeText={onChangeText2}
        value={text2}
        placeholder="영문, 숫자 조합 8 ~ 16자."
        autoCapitalize="none"
        secureTextEntry={true}
        />
      </View>
      <View style={{flex:75}}>
        <Text style={{fontSize:18, marginLeft: 20, marginTop:0, fontFamily:'Noto Sans KR'}}>비밀번호 확인</Text>
        <TextInput
        style={styles.input}
        onChangeText={onChangeText3}
        value={text3}
        autoCapitalize="none"
        secureTextEntry={true}
        placeholder="비밀번호를 한 번 더 입력해주세요."
        />
      </View>
      <View style={{flex:75}}>
        <Text style={{fontSize:18, marginLeft: 20, fontFamily:'Noto Sans KR'}}>이름</Text>
        <TextInput
        style={styles.input}
        onChangeText={onChangeName}
        value={name}
        inputMode="search"
        placeholder="이름을 입력해주세요."
        />
      </View>
      <View style={{flexDirection: "row", flex:45, height:10}}>
        <CheckBox
          checked={checked1}
          onPress={toggleCheckbox1}
          iconType="material-community"
          checkedIcon="checkbox-marked"
          uncheckedIcon="checkbox-blank-outline"
          checkedColor="red"
        />
        <Text style={{fontSize: 18, marginTop: 18, fontWeight:'700'}}>아래 약관에 모두 동의합니다.</Text>
      </View>
      <View style={{flexDirection: "row", flex:45}}>
        <CheckBox
          checked={checked2}
          onPress={toggleCheckbox2}
          iconType="material-community"
          checkedIcon="checkbox-marked"
          uncheckedIcon="checkbox-blank-outline"
          checkedColor="red"
        />
        <Text style={{fontSize: 16, marginTop: 18, fontWeight:'600'}}>이용약관 필수 동의</Text>
      </View>
      <View style={{flexDirection: "row", flex:45}}>
        <CheckBox
          checked={checked3}
          onPress={toggleCheckbox3}
          iconType="material-community"
          checkedIcon="checkbox-marked"
          uncheckedIcon="checkbox-blank-outline"
          checkedColor="red"
        />
        <Text style={{fontSize: 16, marginTop: 18, fontWeight:'600'}}>개인정보 처리방침 필수 동의</Text>
      </View>
      <View style={{flexDirection: "row", flex:45}}>
        <CheckBox
          checked={checked4}
          onPress={toggleCheckbox4}
          iconType="material-community"
          checkedIcon="checkbox-marked"
          uncheckedIcon="checkbox-blank-outline"
          checkedColor="red"
        />
        <Text style={{fontSize: 16, marginTop: 18, fontWeight:'600'}}>마케팅 정보 수신 선택 동의</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  input:{
    marginVertical: 10,
    marginHorizontal: 35,
    height: 40,
    borderWidth: 1,
    padding: 10,
  },
  title:{
    fontFamily:'Noto Sans KR',
    fontSize:35,
    fontWeight:'900',
    marginTop: 0,
    marginLeft: 10,
  },
});
export default SignUpPage;