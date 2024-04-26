import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text } from "react-native";
import { AuthRouteNames } from "./route-names";
import LoginScreen from "../screens/Login.screen";
import RegisterScreen from "../screens/Register.screen";

const AuthStack = createNativeStackNavigator();

const AuthRoutes = (
    <AuthStack.Navigator>
        <AuthStack.Screen
            name={AuthRouteNames.LOGIN}
            component={LoginScreen}
            options={{ title: "Login" }}
        />
        <AuthStack.Screen
            name={AuthRouteNames.REGISTER}
            component={RegisterScreen}
            options={{ title: "Register" }}
        />
    </AuthStack.Navigator>
)

export default AuthRoutes;
