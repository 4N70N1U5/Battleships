import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import LobbyScreen from "../screens/Lobby.screen";
import ProfileScreen from "../screens/Profile.screen";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

const MenuTabs = createBottomTabNavigator();

const MenuRoutes = (
    <MenuTabs.Navigator>
        <MenuTabs.Screen
            name="Games"
            component={LobbyScreen}
            options={{
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name="game-controller" color={color} size={size} />
                )
            }}
        />
        <MenuTabs.Screen
            name="Profile"
            component={ProfileScreen}
            options={{
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name="person-circle" size={size} color={color} />
                ),
            }}
        />
    </MenuTabs.Navigator>
)

export default MenuRoutes;
