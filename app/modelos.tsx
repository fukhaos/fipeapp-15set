import { useLocalSearchParams, useRouter } from "expo-router";
import FipeScreen from "@/components/FipeScreen";
import useSWR from "swr";
import { fetcher } from "@/services/fetcher";
import { DetalheMarca, Marca } from "@/modelos";

export default function Modelos() {
  const router = useRouter();

  const { codigoMarca } = useLocalSearchParams();

  const { data, error, isLoading, mutate } = useSWR<DetalheMarca>(
    `/carros/marcas/${codigoMarca}/modelos`,
    fetcher,
    {
      dedupingInterval: 60_000, //3
    },
  );

  const goNext = (codigo: string) => {
    console.log("Codigo: ", codigo);
    router.navigate({
      pathname: "/anos",
      params: { codigoMarca: codigoMarca, codigoModelo: codigo },
    });
  };

  return (
    <FipeScreen
      data={data?.modelos}
      goNext={goNext}
      error={error}
      isLoading={isLoading}
      update={mutate}
    />
  );
}
