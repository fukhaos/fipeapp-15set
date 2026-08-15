import { useRouter } from "expo-router";
import FipeScreen from "@/components/FipeScreen";
import useSWR from "swr";
import { fetcher } from "@/services/fetcher";
import { Marca } from "@/modelos";

export default function Index() {
  const router = useRouter();

  const { data, error, isLoading, mutate } = useSWR<Marca[]>(
    "/carros/marcas",
    fetcher,
    {
      dedupingInterval: 60_000, //60 segundo
    },
  );

  const goNext = (codigo: string) => {
    console.log("Codigo: ", codigo);
    router.navigate({ pathname: "/modelos", params: { codigoMarca: codigo } });
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
