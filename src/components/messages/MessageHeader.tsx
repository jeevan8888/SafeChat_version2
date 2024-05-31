import React from 'react'
import { View } from 'react-native'
import { AppStyle } from '../../AppStyle';
import { CometChatMessageHeader } from '@cometchat/chat-uikit-react-native';

export const MessageHeader = (props) => {

  let user: CometChat.User = {
    name: 'Spiderman',
    uid: 'superhero1',
    avatar:
      "https://data-us.cometchat.io/assets/images/avatars/spiderman.png",
    role: "test",
    status: "online",
    statusMessage: "This is now status",
    getStatus: () => "online",
    getUid: () => "superhero1",
    getAvatar: () => "https://data-us.cometchat.io/assets/images/avatars/spiderman.png",
    getBlockedByMe: () => false,
    getDeactivatedAt: () => 0,
    getHasBlockedMe: () => false,
    getLastActiveAt: () => 1686810809,
    getName: () => "Spiderman",
    getRole: () => "default",
  };

  return (
    <View style={[AppStyle.container, { justifyContent: "center" }]}>
      <CometChatMessageHeader
        user={user}
        onBack={() => props.navigation.goBack()}
      />
      <View style = {{width : "100%", borderWidth: 0.5, borderBottomColor: 'grey'}} />
    </View>
  )
}