import {
  RefreshControl,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { FlashList } from "@shopify/flash-list";
import { styles } from "@/components/styles";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { FipeItem } from "@/modelos";

interface IFipeScreen {
  data?: FipeItem[];
  goNext: (codigo: string) => void;
  error?: Error;
  isLoading: boolean;
  update: () => void;
}

export default function FipeScreen({
  data,
  goNext,
  error,
  isLoading,
  update,
}: IFipeScreen) {
  const [search, setSearch] = useState("");

  const filteredData = data?.filter((item) =>
    item?.nome?.toLowerCase().includes(search.toLowerCase()),
  );

  const renderItem = ({ item }: { item: FipeItem }) => (
    <TouchableOpacity onPress={() => goNext(item.codigo)} style={styles.item}>
      <Text>{item.nome}</Text>
      <Ionicons name="chevron-forward" size={24} color="black" />
    </TouchableOpacity>
  );

  if (error) return <Text>{error.message}</Text>;

  return (
    <View style={{ flex: 1 }}>
      <TextInput
        value={search}
        onChangeText={setSearch}
        style={styles.textInput}
        placeholder="Buscar ..."
      />
      <FlashList
        style={{ flex: 1 }}
        data={filteredData}
        renderItem={renderItem}
        refreshControl={
          <RefreshControl
            refreshing={isLoading}
            onRefresh={update}
          ></RefreshControl>
        }
      />
    </View>
  );
}
