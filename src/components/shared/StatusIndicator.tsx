import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { AppStyle } from '../../AppStyle'
import { CardView } from '../common/CardView'
import { CometChatStatusIndicator } from '@cometchat/chat-uikit-react-native'

export const StatusIndicator = () => {

  const [status, setStatus] = useState("online");
  return (
    <View style={[AppStyle.container, AppStyle.center]}>
      <CardView>
        <View>
          <Text style={AppStyle.featureHeading}>Status Indicator</Text>
          <Text style={AppStyle.featureInfo}>StatusIndicator component indicates whether a user is online or offline</Text>
          <View style={{height: 100, width: 100, alignSelf :"center"}}>
            <CometChatStatusIndicator
              backgroundColor={status == "online" ? "rgb(0,255,0)" : "grey"}
              style={{ height: 100, width: 100, alignSelf: "center", borderRadius: 50 }}
            />
          </View>

          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 16 }}>
            <Text style={{ textAlign: 'center' }}>Status</Text>
            <View style={{ flexDirection: 'row', backgroundColor: "grey", padding: 8 }}>
              <TouchableOpacity style={{ backgroundColor: status == "online" ? "white" : "transparent" }} onPress={() => setStatus("online")}>
                <Text style={{ color: 'black', margin: 8 }}>Online</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{ backgroundColor: status == "offline" ? "white" : "transparent" }} onPress={() => setStatus("offline")}>
                <Text style={{ color: 'black', margin: 8 }}>Offline</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </CardView>
    </View>
  )
}
