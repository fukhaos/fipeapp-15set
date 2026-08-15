import { useRouter } from "expo-router";
import FipeScreen from "@/components/FipeScreen";
import useSWR from "swr";
import { fetcher } from "@/services/fetcher";

export default function Index() {
  const router = useRouter();

  const { data } = useSWR("/carros/marcas", fetcher);

  return <FipeScreen data={data} />
}
