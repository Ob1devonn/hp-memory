import axios from "axios";
import { useQuery } from "@tanstack/react-query";

export interface Character {
  id: string;
  name: string;
  image: string;
}
const useChar = () => {
  const fetchCharacters = () =>
    axios
      .get<Character[]>("https://hp-api.onrender.com/api/characters")
      .then((res) => res.data.slice(0, 5));

  const { data, error, isLoading } = useQuery({
    queryKey: ["character"],
    queryFn: fetchCharacters,
  });
  return { data, error, isLoading };
};

export default useChar;
