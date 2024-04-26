import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useAuth } from '../hooks/AuthContext';
import AuthRoutes from './Auth.routes';
import GameRoutes from './Game.routes';

const Router: React.FC = () => {
    const auth = useAuth();
    return (
        <NavigationContainer>
            {auth.token ? GameRoutes : AuthRoutes}
        </NavigationContainer>
    )
}

export default Router;
