import React from "react";
import styled from "styled-components/native";

const Container = styled.TouchableOpacity`
    height: 70px;
    width: 100% - 40px;
    margin: 4px;
    border-radius: 4px;
    padding: 10px;
    background-color: white;
    justify-content: center;
`;

const Text = styled.Text`
    margin: 5px;
`;

const BoldText = styled.Text`
    font-weight: bold;
`;

export interface IGameItem {
    id: string;
    status: string;
    onPress: () => void;
}

const GameItem: React.FC<IGameItem> = ({ id, status, onPress }) => {
    return (
        <Container>
            <Text>Game ID: <BoldText>{id}</BoldText></Text>
            <Text>Game Status: <BoldText>{status}</BoldText></Text>
        </Container>
    )
}

export default GameItem
