import { Button } from "@react-navigation/elements";
import { Text, View } from "react-native";
import { useRouter } from "expo-router";

export default function Home() {
  const router = useRouter();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "lime",
      }}
    >
      <Text>HOME</Text>

      <Button onPressIn={() => router.navigate("/")}>Entrar</Button>
    </View>
  );
}
