import {CometChat} from '@cometchat/chat-sdk-react-native';
import React, {useContext} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Modal,
  ActivityIndicator,
  Image,
} from 'react-native';
import {RoudedButton} from '../../components/common/RoundedButton';
import {AppConstants} from '../../../AppConstants';
import {
  CometChatContext,
  CometChatUIKit,
} from '@cometchat/chat-uikit-react-native';
import {ImageBackground} from 'react-native';
import AuthBack from '../../resources/AuthBack.jpg';

export const SignUp = props => {
  const [uid, setUID] = React.useState('');
  const [name, setName] = React.useState('');
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
          <Modal transparent>
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
        <Text style={Style.header}>用戶註冊</Text>
        <Text style={Style.defaultText}>
        請輸入以下詳細資訊以繼續
        </Text>
        <TextInput
          value={uid}
          onChangeText={txt => setUID(txt)}
          style={Style.inputBox}
          placeholder="輸入ID"
        />
        <TextInput
          value={name}
          onChangeText={txt => setName(txt)}
          style={Style.inputBox}
          placeholder="輸入名字"
        />
        <View style={{flex: 1}} />

        <View>
          <RoudedButton
            style={{
              width: '100%',
              backgroundColor: 'rgb(50,150,255)',
              marginBottom: 8,
              marginTop: 10,
            }}
            onPress={() => {
              if (uid.length == 0 && name.length == 0) return;
              setLoginInProgress(true);
              CometChat.createUser({uid, name}, AppConstants.AUTH_KEY)
                .then(user => {
                  CometChatUIKit.login({uid: uid}).then(loggedInUser => {
                    props.navigation.navigate('Home');
                    setLoginInProgress(false);
                  });
                })
                .catch(err => {
                  setLoginInProgress(false);
                });
            }}>
            <Text style={{margin: 8, color: 'white'}}>創建用戶</Text>
          </RoudedButton>
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
    marginBottom: 20,
  },
  welcome: {
    fontSize: 26,
    color: 'blue',
    fontWeight: 'bold',
  },
  defaultText: {
    fontSize: 15,
    textAlign: "center",
  },
  inputBox: {
    width: '100%',
    backgroundColor: 'white',
    borderColor : "grey",
    borderWidth: 1,
    borderRadius: 10,
    margin: 4,
    paddingLeft : 10,
    height: 40,
    
  },
  signDialog: {
    width: '80%',
    backgroundColor: 'white',
    padding: 30,
    borderRadius: 30,
  },
});
