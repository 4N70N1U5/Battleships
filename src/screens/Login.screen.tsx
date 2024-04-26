import { useNavigation } from "@react-navigation/native";
import { AuthRouteNames } from "../router/route-names";
import { useAuth } from "../hooks/AuthContext";
import Login from "../components/Login";

const LoginScreen = () => {
    const navigation = useNavigation();
    const auth = useAuth();

    const handleGoToRegister = () => {
        navigation.navigate(AuthRouteNames.REGISTER as never);
    }

    return (
        <Login onSubmit={auth.login} goToRegister={handleGoToRegister} />
    )
}

export default LoginScreen;
