import { useEffect, useState } from "react";
import { ActivityIndicator, Text, View } from "react-native";
import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";
import { useAuth } from "../hooks/AuthContext";
import { getUserDetails } from "../api";

const Container = styled.View`
    align-items: center;
    padding: 20px;
`;

const Row = styled.View`
    flex-direction: row;
    justify-content: space-between;
    gap: 20px;
    margin-top: 20px;
`;

const RowElement = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
`;

const Title = styled.Text`
    font-size: 20px;
    font-weight: bold;
`;

const SmallTitle = styled.Text`
    font-size: 16px;
`;

const Subtitle = styled.Text`
    font-size: 14px;
    color: darkgrey;
    margin-top: 5px;
    margin-bottom: 10px;
`;

const Value = styled.Text`
    font-size: 40px;
`;

const WheelContainer = styled.View`
    align-items: center;
    justify-content: center;
    height: 24.3px;
`;

const UserDetails = () => {
    const [id, setId] = useState("Loading...");
    const [email, setEmail] = useState("");
    const [gamesPlayed, setGamesPlayed] = useState("...");
    const [gamesLost, setGamesLost] = useState("...");
    const [gamesWon, setGamesWon] = useState("...");
    const [currenltyPlaying, setCurrenltyPlaying] = useState("...");
    const auth = useAuth();

    useEffect(() => {
        getUserDetails(auth.token).then((response) => {
            setId(response.user.id);
            setEmail(response.user.email);
            setGamesPlayed(response.gamesPlayed);
            setGamesLost(response.gamesLost);
            setGamesWon(response.gamesWon);
            setCurrenltyPlaying(response.currentlyGamesPlaying);
        });
    }, []);

    return (
        <Container>
            <Ionicons name="person-circle" size={100} color="darkgrey" style={{ alignSelf: "center", margin: 10 }} />
            {email ? <Title> {email} </Title> : <WheelContainer><ActivityIndicator size="small" color="black" /></WheelContainer>}
            <Subtitle>User ID: {id}</Subtitle>
            <Row>
                <RowElement>
                    <SmallTitle>Games Played</SmallTitle>
                    <Value>{gamesPlayed}</Value>
                </RowElement>
                <RowElement>
                    <SmallTitle>Games In Progress</SmallTitle>
                    <Value>{currenltyPlaying}</Value>
                </RowElement>
            </Row>
            <Row>
                <RowElement>
                    <SmallTitle>Games Won</SmallTitle>
                    <Value>{gamesWon}</Value>
                </RowElement>
                <RowElement>
                    <SmallTitle>Games Lost</SmallTitle>
                    <Value>{gamesLost}</Value>
                </RowElement>
            </Row>
        </Container >
    );
};

export default UserDetails;
