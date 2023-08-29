import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import ListScreen from "./src/screens/ListScreen";
import ComponentsScreen from "./src/screens/ComponentsScreen";
//import ButtonsScreen from "./src/screens/ButtonsScreen";

const navigator = createStackNavigator(
  {
    // Route names:
    Home: HomeScreen,
    Components: ComponentsScreen,

    //Learning section:
    FlatL: ListScreen,
    //Buttonz: ButtonsScreen,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "Learning Buttons",
    },
  }
);

export default createAppContainer(navigator);
