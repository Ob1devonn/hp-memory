import { Center, Grid, GridItem } from "@chakra-ui/react";
import Header from "./components/Header";
import GameGrid from "./components/GameGrid";

function App() {
  return (
    <Grid
      templateAreas={`"header"
                      "main"
                      "footer "`}
      gridTemplateRows={"10rem 1fr 2rem"}
    >
      <GridItem area={"header"}>
        <Header />
      </GridItem>
      <GridItem
        area={"main"}
        bg="green.300"
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <GameGrid />
      </GridItem>
      <GridItem area={"footer"}>
        <Center>Footer</Center>
      </GridItem>
    </Grid>
  );
}

export default App;
