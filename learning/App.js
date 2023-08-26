import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import ListScreen from "./src/screens/ListScreen";

const navigator = createStackNavigator(
  {
    // Route names:
    FlatL: ListScreen,
  },
  {
    initialRouteName: "FlatL",
    defaultNavigationOptions: {
      title: "Jenny's App",
    },
  }
);

export default createAppContainer(navigator);
