import { StatusBar } from 'expo-status-bar';
import { AuthContextProvider } from './src/hooks/AuthContext';
import Router from './src/router/Router';

export default function App() {
  return (
    // <View style={styles.container}>
    //   <Login />
    //   <Text>Open up App.tsx to start working on your app!</Text>
    //   <StatusBar style="auto" />
    // </View>
    <AuthContextProvider>
      <Router />
    </AuthContextProvider>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
