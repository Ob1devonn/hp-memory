import { Center, Grid, GridItem } from "@chakra-ui/react";
import Header from "./components/Header";

function App() {
  return (
    <Grid
      templateAreas={`"header"
                      "main"
                      "footer "`}
      gridTemplateRows={"150px 1fr 30px"}
      h={"100vh"}
    >
      <GridItem area={"header"}>
        <Header />
      </GridItem>
      <GridItem area={"main"} bg="green.300">
        Main
        <Center>Main</Center>
      </GridItem>
      <GridItem area={"footer"}>
        <Center>Footer</Center>
      </GridItem>
    </Grid>
  );
}

export default App;
