import styled from "styled-components/native";
import Dialog from "react-native-dialog";
import { useEffect, useState } from "react";
import { useAuth } from "../hooks/AuthContext";
import { createGame, getAllGames, getUserDetails, joinGame } from "../api";
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

    const [userId, setUserId] = useState("");
    const [games, setGames] = useState<any[]>([])
    const [dialogVisible, setDialogVisible] = useState(false);
    const [gameId, setGameId] = useState("");

    useEffect(() => {
        getUserDetails(auth.token).then((response) => {
            setUserId(response.user.id);

            getAllGames(auth.token).then((response) => {
                const userGames: any[] = []

                response.games.forEach((element: any) => {
                    if (element.player1Id == userId || element.player2Id == userId)
                        userGames.push(element)
                });

                setGames(userGames)
            })
        });
    }, []);

    const handleCreateGame = async () => {
        await createGame(auth.token)

        getAllGames(auth.token).then((response) => {
            const userGames: any[] = []

            response.games.forEach((element: any) => {
                if (element.player1Id == userId || element.player2Id == userId)
                    userGames.push(element)
            });

            setGames(userGames)
        })
    }

    const handleJoinGame = async () => {
        setDialogVisible(false);

        await joinGame(auth.token, gameId);

        getAllGames(auth.token).then((response) => {
            const userGames: any[] = []

            response.games.forEach((element: any) => {
                if (element.player1Id == userId || element.player2Id == userId)
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
                <Button onPress={() => { setDialogVisible(true) }}>
                    <ButtonText>Join game</ButtonText>
                </Button>
                <GamesContainer>
                    {games.map(game => (
                        <GameItem id={game.id} status={game.status} onPress={() => { }}></GameItem>
                    ))}
                </GamesContainer>
            </Container>
            <Dialog.Container visible={dialogVisible} onBackdropPress={() => { setDialogVisible(false) }}>
                <Dialog.Title>Join game</Dialog.Title>
                <Dialog.Description>Enter the ID of the game you want to join</Dialog.Description>
                <Dialog.Input onChangeText={setGameId} placeholder="Game ID" />
                <Dialog.Button label="Cancel" onPress={() => { setDialogVisible(false) }} />
                <Dialog.Button label="Join game" onPress={handleJoinGame} />
            </Dialog.Container>
        </PageContainer>
    );
};

export default LobbyScreen;
