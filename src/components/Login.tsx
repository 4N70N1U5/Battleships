import React, { useState } from "react";
import styled from "styled-components/native";

const Container = styled.SafeAreaView`
    flex: 1;
    align-items: center;
`

const InputContainer = styled.View`
    width: 100%;
    padding: 20px;
`

const Input = styled.TextInput`
    height: 50px;
    width: 100% - 40px;
    margin: 4px;
    border-radius: 4px;
    padding: 10px;
    background-color: white;
`

const Button = styled.TouchableOpacity`
    height: 50px;
    width: 100% - 40px;
    margin: 4px;
    border-radius: 4px;
    padding: 10px;
    background-color: black;
    justify-content: center;
`

const ButtonText = styled.Text`
    color: white;
    font-weight: bold;
    text-align: center;
`

const BottomText = styled.Text`
    position: absolute;
    bottom: 40px;
`

const Link = styled.Text`
    text-decoration: underline;
`

export interface ILogin {
    onSubmit: (email: string, password: string) => void;
}

const Login: React.FC<ILogin> = ({ onSubmit }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const goToRegister = () => {
        console.log("Go to register");
    }

    const handleSubmit = () => onSubmit(email, password);

    return (
        <Container>
            <InputContainer>
                <Input onChangeText={setEmail} placeholder="Email" keyboardType="email-address" />
                <Input onChangeText={setPassword} placeholder="Password" secureTextEntry />
                <Button>
                    <ButtonText onPress={handleSubmit}>Sign in</ButtonText>
                </Button>
            </InputContainer>
            <BottomText>Don't have an account? <Link onPress={goToRegister}>Sign up</Link> now!</BottomText>
        </Container>
    )
}

export default Login;
