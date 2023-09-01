import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import ListScreen from "./src/screens/ListScreen";
import ComponentsScreen from "./src/screens/ComponentsScreen";
import ImageScreen from "./src/screens/ImageScreen";
//import ButtonsScreen from "./src/screens/ButtonsScreen";

const navigator = createStackNavigator(
  {
    // Route names:
    Home: HomeScreen,
    Components: ComponentsScreen,

    //Learning section:
    FlatL: ListScreen,
    //Buttonz: ButtonsScreen,
    Menu: ImageScreen
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "Learning Reusable Components",
    },
  }
);

export default createAppContainer(navigator);
