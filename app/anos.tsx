import { useLocalSearchParams, useRouter } from "expo-router";
import FipeScreen from "@/components/FipeScreen";
import useSWR from "swr";
import { fetcher } from "@/services/fetcher";
import { Anos } from "@/modelos";

export default function AnoDetalhe() {
  const router = useRouter();

  const { codigoMarca, codigoModelo } = useLocalSearchParams();

  const { data, error, isLoading, mutate } = useSWR<Anos[]>(
    `/carros/marcas/${codigoMarca}/modelos/${codigoModelo}/anos`,
    fetcher,
    {
      dedupingInterval: 60_000, //3
    },
  );

  const goNext = (codigo: string) => {

    router.navigate({
      pathname: "/veiculo",
      params: {
        codigoMarca: codigoMarca,
        codigoModelo: codigoModelo,
        codigoAno: codigo,
      },
    });
  };

  return (
    <FipeScreen
      data={data}
      goNext={goNext}
      error={error}
      isLoading={isLoading}
      update={mutate}
    />
  );
}
