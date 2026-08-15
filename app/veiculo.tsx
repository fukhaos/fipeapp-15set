import { useLocalSearchParams, useRouter } from "expo-router";
import FipeScreen from "@/components/FipeScreen";
import useSWR from "swr";
import { fetcher } from "@/services/fetcher";
import { Anos, Veiculo } from "@/modelos";
import { View, Text } from "react-native";
import { styles } from "@/components/styles";

export default function DetalheVeiculo() {
  const router = useRouter();

  const { codigoMarca, codigoModelo, codigoAno } = useLocalSearchParams();

  const { data } = useSWR<Veiculo>(
    `/carros/marcas/${codigoMarca}/modelos/${codigoModelo}/anos/${codigoAno}`,
    fetcher,
    {
      dedupingInterval: 60_000, //3
    },
  );

  return (
    <View>
      <View style={styles.item}>
        <Text>{data?.Marca}</Text>
      </View>
      <View style={styles.item}>
        <Text>{data?.Modelo}</Text>
      </View>
      <View style={styles.item}>
        <Text>{data?.Valor}</Text>
      </View>
    </View>
  );
}
