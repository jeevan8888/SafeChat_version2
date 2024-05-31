import React, { useContext } from 'react'
import { View, Text } from 'react-native'
import { AppStyle } from '../../AppStyle'
import { CometChatCallBubble } from '@cometchat/chat-uikit-react-native'
import { VideoIcon } from '@cometchat/chat-uikit-react-native/src/calls/resources'
import { VideoCall } from '../../resources'
// import { VideoIcon } from '@cometchat/chat-uikit-react-native/src/calls/resources'

export const CallBubble = (props) => {
    let primary = 'rgb(51, 153, 255)';
    let accent = 'rgb(20, 20, 20)';
    let secondary = 'rgba(248, 248, 248, 0.92)';
    let backgroundColor = 'rgb(255, 255, 255)';

    return (
        <View style={[AppStyle.container, { justifyContent: "center", marginHorizontal: 10 }]}>
            <View style={{ width: "80%" }}>
                <CometChatCallBubble
                    buttonText={"Join"}
                    title={"Iron Man has initiated a group call"}
                    icon={VideoCall}
                    onClick={props.navigation.goBack}
                    style={{
                        backgroundColor: backgroundColor,
                        titleColor: accent,
                        iconTint: primary,
                        buttonBackgroundColor: primary,
                        buttonTextColor: secondary,
                    }}
                />
            </View>
            <View style={{ width: "80%", alignSelf: "flex-end", marginTop: 10 }}>
                <CometChatCallBubble
                    buttonText={"Join"}
                    title={"You've initiated a call"}
                    icon={VideoCall}
                    onClick={props.navigation.goBack}
                    style={{
                        backgroundColor: primary,
                        titleColor: secondary,
                        iconTint: secondary,
                        buttonBackgroundColor: secondary,
                        buttonTextColor: primary,
                    }}
                />
            </View>
        </View>
    )
}
