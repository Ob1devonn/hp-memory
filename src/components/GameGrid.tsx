import { SimpleGrid, Text } from "@chakra-ui/react";
import useChar from "../hooks/useChar";
import GameCard from "./GameCard";
import GameCardContainer from "./GameCardContainer";
import GameCardSkeleton from "./GameCardSkeleton";

function GameGrid() {
  const { data, error, isLoading } = useChar();
  const skeletons = [1, 2, 3, 4, 5];

  return (
    <SimpleGrid columns={5} padding={10} spacing={10}>
      {isLoading &&
        skeletons.map((skeleton) => (
          <GameCardContainer key={skeleton}>
            <GameCardSkeleton />
          </GameCardContainer>
        ))}
      {error && <Text>{error.message}</Text>}
      {data?.map((char) => (
        <GameCardContainer key={char.id}>
          <GameCard character={char} />
        </GameCardContainer>
      ))}
    </SimpleGrid>
  );
}

export default GameGrid;
