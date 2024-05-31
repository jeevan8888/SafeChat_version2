import React from "react";
import { CometChatMessages } from "@cometchat/chat-uikit-react-native";
import { CometChat } from "@cometchat/chat-sdk-react-native";

export const Messages = ({ navigation }) => {

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

    return <CometChatMessages
        user={user}
        messageHeaderConfiguration={{
            onBack: () => navigation.goBack()
        }}
    />;
}