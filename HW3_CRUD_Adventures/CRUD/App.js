import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import React from "react";
import RosterScreen from "./src/screens/RosterScreen";
import { Provider } from "./src/context/HeroContext";
import ShowScreen from "./src/screens/ShowScreen";
import AdventureScreen from "./src/screens/AdventureScreen";

const navigator = createStackNavigator({
  Index: RosterScreen,
  Show : ShowScreen,
  Adventure: AdventureScreen,
},
  {
    initialRouteName: "Index",
    defaultNavigationOptions: {
      title: "CRUD Heroes",
      headerTitleStyle: {color:'black'},
      headerStyle: {backgroundColor:'#6C30BE'},
      headerTintColor: '#6C30BE',
    }
});

const App = createAppContainer(navigator);

export default () => {
  return <Provider >
            <App />
          </Provider>
}