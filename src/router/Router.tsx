import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useAuth } from '../hooks/AuthContext';
import AuthRoutes from './Auth.routes';
import MenuRoutes from './Menu.routes';

const Router: React.FC = () => {
    const auth = useAuth();
    return (
        <NavigationContainer>
            {auth.token ? MenuRoutes : AuthRoutes}
        </NavigationContainer>
    )
}

export default Router;
