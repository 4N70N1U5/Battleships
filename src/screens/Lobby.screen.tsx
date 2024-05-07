import { SafeAreaView, ScrollView, Text } from "react-native";
import styled from "styled-components/native";
import { useEffect, useState } from "react";
import { useAuth } from "../hooks/AuthContext";
import { getAllGames } from "../api";
import GameItem from "../components/GameItem";

const PageContainer = styled.SafeAreaView`
    flex: 1;
    align-items: center;
`

const Container = styled.View`
    width: 100%;
    padding: 20px;
    margin-bottom: 60px;
`;

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

const GamesContainer = styled.ScrollView`
`

const LobbyScreen = () => {
    const auth = useAuth();

    const [games, setGames] = useState<any[]>([])

    useEffect(() => {
        getAllGames(auth.token).then((response) => { setGames(response.games) })
    }, []);

    return (
        <PageContainer>
            <Container>
                <Button>
                    <ButtonText>New game</ButtonText>
                </Button>
                <GamesContainer>
                    {games.map(game => (
                        <GameItem id={game.id} status={game.status} onPress={() => { }}></GameItem>
                    ))}
                </GamesContainer>
            </Container>
        </PageContainer>
    );
};

export default LobbyScreen;
