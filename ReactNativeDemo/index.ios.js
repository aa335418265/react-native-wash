
import React from 'react';
import {
  AppRegistry,
  Text,
  Button,
  View,
} from 'react-native';

import RootNavigator from './app/router/rootnavigator.js'



// import { StackNavigator,TabNavigator } 	from 'react-navigation';

// class ChatScreen extends React.Component {
//   static navigationOptions = {
//     title: '我是：ChatScreen',
//   };
//   render() {
//     return (
//       <View>
//       	<Text>我是：ChatScreen</Text>
//       </View>
//     );
//   }
// }

// class RecentChatsScreen extends React.Component {
//   render() {
//     return (
//     	        <Button
// 		  onPress={() => this.props.navigation.navigate('Chat', { user: 'Lucy' })}
// 		  title="我是：RecentChatsScreen"
// 		/>)
//   }
// }

// class AllContactsScreen extends React.Component {
//   render() {
//     return <Text>我是：AllContactsScreen</Text>
//   }
// }


// const RootTabNavigator = TabNavigator({
//   RecentChatsScreen: { screen: RecentChatsScreen },
//   AllContactsScreen: { screen: AllContactsScreen },
// });

// const SimpleApp = StackNavigator({
//   Home: { screen: RootTabNavigator },
//   Chat: { screen: ChatScreen },
// });







AppRegistry.registerComponent('MallApp', () => RootNavigator);

