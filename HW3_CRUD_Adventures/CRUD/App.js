import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import React from "react";
import IndexScreen from "./src/screens/IndexScreen";
import { Provider } from "./src/context/BlogContext";
import ShowScreen from "./src/screens/ShowScreen";
// import CreateScreen from "./src/screens/CreateScreen";
// import EditScreen from "./src/screens/EditScreen";
import AdventureScreen from "./src/screens/AdventureScreen";

const navigator = createStackNavigator({
  Index: IndexScreen,
  Show : ShowScreen,
  // Create: CreateScreen,
  // Edit: EditScreen,
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