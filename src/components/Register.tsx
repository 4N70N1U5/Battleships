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

export interface IRegister {
    onSubmit: (email: string, password: string) => void;
}

const Register: React.FC<IRegister> = ({ onSubmit }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = () => onSubmit(email, password);

    return (
        <Container>
            <InputContainer>
                <Input onChangeText={setEmail} placeholder="Email" keyboardType="email-address" />
                <Input onChangeText={setPassword} placeholder="Password" secureTextEntry />
                <Button>
                    <ButtonText onPress={handleSubmit}>Sign up</ButtonText>
                </Button>
            </InputContainer>
        </Container>
    )
}

export default Register;
