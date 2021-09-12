import { createStackNavigator } from "@react-navigation/stack"
import Cart from "../screens/Cart"
import Checkout from "../screens/Checkout"
import Home from "../screens/Home"

const HomeStack = createStackNavigator()
const CartStack = createStackNavigator()

export const HomeScreens = () => {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen
                name="Home"
                component={Home}
            />
        </HomeStack.Navigator>
    )
}

export const CartScreens = () => {
    return (
        <CartStack.Navigator>
            <CartStack.Screen
                name="Cart"
                component={Cart}
            />
            <CartStack.Screen
                name="Checkout"
                component={Checkout}
            />
        </CartStack.Navigator>
    )
}