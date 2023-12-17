import { HStack, Heading, Image } from "@chakra-ui/react";
import logo from "../assets/harry_potter_icon_by_rickyrgoetz_dbfr8a2.webp";

function Header() {
  return (
    <HStack padding={10} justify={"space-between"}>
      <Image src={logo} boxSize={20} />
      <Heading mx={"auto"} pr={20}>
        Hp Memory
      </Heading>
    </HStack>
  );
}

{
  /* <Heading mx="auto">Hp Memory</Heading> */
}
export default Header;
