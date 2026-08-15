import { useRouter } from "expo-router";
import FipeScreen from "@/components/FipeScreen";

export default function Index() {
  const router = useRouter();

  const data = [
    { title: "Um" },
    { title: "Dois" },
    { title: "Três" },
    { title: "Quatro" },
    { title: "Cinco" },
  ];

  return <FipeScreen data={data} />
}
