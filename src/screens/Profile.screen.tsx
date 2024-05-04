import { TouchableOpacity } from "react-native"
import styled from "styled-components/native";
import UserDetails from "../components/UserDetails";
import { useAuth } from "../hooks/AuthContext";

const Container = styled.SafeAreaView`
    flex: 1;
    align-items: center;
`;

const LogOutButton = styled.TouchableOpacity`
    position: absolute;
    bottom: 20px;
`;

const LogOutText = styled.Text`
    font-size: 20px;
    color: red;
`;

const ProfileScreen = () => {
    const auth = useAuth();

    return (
        <Container>
            <UserDetails />
            <LogOutButton onPress={auth.logout}>
                <LogOutText>Log Out</LogOutText>
            </LogOutButton>
        </Container>
    )
}

export default ProfileScreen;
