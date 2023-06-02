import React from 'react';
import {
    Montserrat_100Thin,
    Montserrat_100Thin_Italic,
    Montserrat_200ExtraLight,
    Montserrat_200ExtraLight_Italic,
    Montserrat_300Light,
    Montserrat_300Light_Italic,
    Montserrat_400Regular,
    Montserrat_400Regular_Italic,
    Montserrat_500Medium,
    Montserrat_500Medium_Italic,
    Montserrat_600SemiBold,
    Montserrat_600SemiBold_Italic,
    Montserrat_700Bold,
    Montserrat_700Bold_Italic,
    Montserrat_800ExtraBold,
    Montserrat_800ExtraBold_Italic,
    Montserrat_900Black,
    Montserrat_900Black_Italic,
    useFonts,
} from '@expo-google-fonts/montserrat';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Landing from "./screens/landing/Landing";
import Menu from "./screens/menu/Menu";
import Login from "./screens/login/Login";
import Search from "./screens/search/category/Search";
import People from "./screens/search/people/People";
import Profile from "./screens/search/profile/Profile";
import FAQ from './screens/faq/FAQ';
import Language from './screens/language/Language';

function App() {
    const [fontsLoaded] = useFonts({
        Montserrat_100Thin,
        Montserrat_200ExtraLight,
        Montserrat_300Light,
        Montserrat_400Regular,
        Montserrat_500Medium,
        Montserrat_600SemiBold,
        Montserrat_700Bold,
        Montserrat_800ExtraBold,
        Montserrat_900Black,
        Montserrat_100Thin_Italic,
        Montserrat_200ExtraLight_Italic,
        Montserrat_300Light_Italic,
        Montserrat_400Regular_Italic,
        Montserrat_500Medium_Italic,
        Montserrat_600SemiBold_Italic,
        Montserrat_700Bold_Italic,
        Montserrat_800ExtraBold_Italic,
        Montserrat_900Black_Italic,
    });
    if (!fontsLoaded) {
        return null;
    }
    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Landing">
                <Stack.Screen name="Landing" component={Landing} options={{headerShown: false}} />
                <Stack.Screen name="Menu" component={Menu} options={{headerShown: false}} />
                <Stack.Screen name="Login" component={Login} options={{headerShown: false}} />
                <Stack.Screen name="Search" component={Search} options={{headerShown: false}} />
                <Stack.Screen name="People" component={People} options={{headerShown: false}} />
                <Stack.Screen name="Profile" component={Profile} options={{headerShown: false}} />
                <Stack.Screen name="FAQ" component={FAQ} options={{headerShown: false}} />
                <Stack.Screen name="Language" component={Language} options={{headerShown: false}} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;
