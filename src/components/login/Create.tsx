import React from 'react';
import {View, Text} from 'react-native';

export const Create = ({navigator}) => {
  return (
    <View
      style={{flexDirection: 'row', width: '100%', justifyContent: 'center'}}>
      <Text>您還沒有用戶嗎</Text>
      <Text
        onPress={() => navigator.navigate('SignUp')}
        style={{
          color: 'rgb(37, 131, 245)',
          marginHorizontal: 10,
          borderBottomWidth: 1,
          borderBottomColor: 'rgb(37, 131, 245)',
        }}>
        立即創建
      </Text>
    </View>
  );
};
