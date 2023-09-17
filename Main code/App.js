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
import ReducedColorScreen from "./src/screens/ReducedColorScreen";

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
    AdvancedColor : AdvancedColorScreen,
    ReducedColor : ReducedColorScreen
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "Learning State Part III",
    },
  }
);

export default createAppContainer(navigator);
