import React from 'react';
import {Ionicons, Text, View} from 'react-native';
import {GroupsWithMessages} from '../groups';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Fontisto';
import {Details} from '../users/Details';
const Tab = createBottomTabNavigator();
import {
  CometChatConversationsWithMessages,
  CometChatUsersWithMessages,
} from '@cometchat/chat-uikit-react-native';
import {GroupModuleList} from '../groups';
export default function HomeScreen({navigation}: any) {
  return (
    <Tab.Navigator
      headerMode="none"
      tabBarOptions={{
        tabStyle: {
          paddingVertical: 15,
        },
        activeTintColor: 'blue',
        inactiveTintColor: 'grey',
      }}>
      <Tab.Screen
        name="聊天"
        component={CometChatConversationsWithMessages}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <Icon name="envelope" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="接觸"
        component={CometChatUsersWithMessages}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <Icon name="address-book" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="團體"
        component={GroupsWithMessages}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <Icon name="users" size={size} color={color} />
          ),
        }}
      />
      {/* <Tab.Screen
        name="ccc"
        component={Details}
        options={{
          headerShown: false,
           tabBarIcon: ({color, size}) => (
             <Icon name="profile" size={size} color={color} />
           ),
        }}
      /> */}
    </Tab.Navigator>
  );
}
