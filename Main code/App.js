import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import ListScreen from "./src/screens/ListScreen";
import ComponentsScreen from "./src/screens/ComponentsScreen";
import ImageScreen from "./src/screens/ImageScreen";
import CounterScreen from "./src/screens/CounterScreen";
import ColorScreen from "./src/screens/ColorScreen";
//import ButtonsScreen from "./src/screens/ButtonsScreen";
import AdvancedColorScreen from "./src/screens/AdvancedColorScreen";

const navigator = createStackNavigator(
  {
    // Route names:
    Home: HomeScreen,
    Components: ComponentsScreen,

    //Learning section:
    FlatL: ListScreen,
    //Buttonz: ButtonsScreen,
    Menu: ImageScreen,
    Counter: CounterScreen,
    Color: ColorScreen,
    AdvancedColor : AdvancedColorScreen
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "Learning State Part II",
    },
  }
);

export default createAppContainer(navigator);
