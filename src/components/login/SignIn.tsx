import React, {useContext} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Alert,
  Modal,
  Image,
  ActivityIndicator,
  StatusBar,
} from 'react-native';
import {RoudedButton} from '../../components/common/RoundedButton';
import {Create} from './Create';
import {
  CometChatContext,
  CometChatUIKit,
} from '@cometchat/chat-uikit-react-native';
import AuthBack from '../../resources/AuthBack.jpg';
import {ImageBackground} from 'react-native';
export const SignIn = (props: any) => {
  const [uid, setUID] = React.useState('');
  const [isLoginInProgress, setLoginInProgress] = React.useState(false);

  const {theme} = useContext(CometChatContext);

  return (
    <View style={{flex: 1}}>
      <ImageBackground
        source={AuthBack}
        style={{
          justifyContent: 'center',
          width: '100%',
          height: '100%',
          alignItems: 'center',
        }}>
        {isLoginInProgress ? (
          <Modal transparent statusBarTranslucent>
            <View
              style={{
                backgroundColor: 'rgba(20,20,20,0.5)',
                flex: 1,
                justifyContent: 'center',
              }}>
              <View
                style={{
                  alignSelf: 'center',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: '#fff',
                  width: '80%',
                  padding: 16,
                  borderRadius: 16,
                }}>
                <Image
                  style={{
                    height: 200,
                    width: 200,
                    marginBottom: 8,
                    alignSelf: 'center',
                  }}
                  source={require('./logo.png')}
                />
                <ActivityIndicator
                  size="large"
                  color={theme.palette.getPrimary()}
                />
              </View>
            </View>
          </Modal>
        ) : null}

        <View style={Style.signDialog}>
          <Text style={Style.header}>用户登入</Text>

          <TextInput
            value={uid}
            onChangeText={txt => setUID(txt)}
            style={Style.inputBox}
            placeholder="進入 ID"
          />
          <View>
            <RoudedButton
              style={Style.signInButton}
              onPress={() => {
                setLoginInProgress(true);
                CometChatUIKit.login({uid})
                  .then(user => {
                    props.navigation.navigate('Home');
                    setLoginInProgress(false);
                  })
                  .catch(err => {
                    Alert.alert('錯誤', '無法登入');
                    setLoginInProgress(false);
                  });
              }}>
              <Text style={Style.signInText}>登入</Text>
            </RoudedButton>
            <Create navigator={props.navigation} />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const Style = StyleSheet.create({
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    marginBottom: 24,
  },
  signDialog: {
    width: '80%',
    backgroundColor: 'white',
    padding: 30,
    borderRadius: 30,
  },
  welcome: {
    fontSize: 26,
    color: 'blue',
    fontWeight: 'bold',
  },
  defaultText: {
    fontSize: 18,
    fontWeight: '700',
  },
  inputBox: {
    width: '100%',
    height: 40,
    borderColor: 'grey',
    borderWidth: 1,
    backgroundColor: 'white',
    borderRadius: 10,
    paddingLeft: 10,
    marginBottom: 10,
  },
  signInButton: {
    backgroundColor: 'rgb(50,150,255)',
    marginBottom: 24,
  },
  signInText: {margin: 8, color: 'white', fontWeight: 'bold', fontSize: 18},
});
