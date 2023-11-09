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
import TextScreen from "./src/screens/TextScreen";
import BoxScreen from "./src/screens/BoxScreen";
import FlexBox from "./src/screens/FlexBox";
                //hw2 stuff:
import HW2WelcomeScreen from "./src/screens/HW2WelcomeScreen";
import HW2GameScreen from "./src/screens/HW2GameScreen";
import HW2CombatScreen from "./src/screens/HW2CombatScreen";

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
    ReducedColor : ReducedColorScreen,
    TextScrn : TextScreen,
    //Homework 2 stuff:
    HW2Welcome : HW2WelcomeScreen,
    Game : HW2GameScreen,
    //HW2Combat : HW2CombatScreen,
    Box : BoxScreen,
    Flex : FlexBox
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      //title: "Homework 2",
      //headerShown : false
    },
  }
);

export default createAppContainer(navigator);
