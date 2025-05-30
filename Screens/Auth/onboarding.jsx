import { View, Text } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { SafeAreaView } from "react-native-safe-area-context"

const Onboarding = () => {
    const navigation = useNavigation()
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
            <Text>Onboarding</Text>
        </SafeAreaView>
    )
}

export default Onboarding