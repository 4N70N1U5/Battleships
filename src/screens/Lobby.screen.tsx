import styled from "styled-components/native";
import { useEffect, useState } from "react";
import { useAuth } from "../hooks/AuthContext";
import { createGame, getAllGames, getUserDetails } from "../api";
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

    const [id, setId] = useState("");
    const [games, setGames] = useState<any[]>([])

    useEffect(() => {
        getUserDetails(auth.token).then((response) => {
            setId(response.user.id);
        });

        getAllGames(auth.token).then((response) => {
            const userGames: any[] = []

            response.games.forEach((element: any) => {
                if (element.player1Id == id || element.player2Id == id)
                    userGames.push(element)
            });

            setGames(userGames)
        })
    }, []);

    const handleCreateGame = async () => {
        await createGame(auth.token)
        getAllGames(auth.token).then((response) => {
            const userGames: any[] = []

            response.games.forEach((element: any) => {
                if (element.player1Id == id || element.player2Id == id)
                    userGames.push(element)
            });

            setGames(userGames)
        })
    }

    return (
        <PageContainer>
            <Container>
                <Button onPress={handleCreateGame}>
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
