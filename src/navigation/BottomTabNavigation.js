import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { CartScreens, HomeScreens } from "./StackNavigators";

const BottomTab = createMaterialBottomTabNavigator()

export const BottomTabScreens = () => {
    return (
        <BottomTab.Navigator>
            <BottomTab.Screen
                name="HomeScreens"
                component={HomeScreens}
            />
            <BottomTab.Screen
                name="CartScreens"
                component={CartScreens}
            />
        </BottomTab.Navigator>
    )
}