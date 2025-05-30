import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack";
import Onboarding from "./Screens/Auth/onboarding";



const Stack = createStackNavigator()
const AuthStack = createStackNavigator()
const AuthNavigation = () => {
    return (
        <AuthStack.Navigator 
            screenOptions={{
                headerShown: false
            }}
        >
            <AuthStack.Screen name="onboarding" component={Onboarding} />
        </AuthStack.Navigator>
    )
}

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
            >
                <Stack.Screen name="Auth" component={AuthNavigation} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation;
