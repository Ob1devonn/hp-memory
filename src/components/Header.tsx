import { HStack, Heading, Image } from "@chakra-ui/react";
import logo from "../assets/harry_potter_icon_by_rickyrgoetz_dbfr8a2.webp";

function Header() {
  return (
    <HStack padding={10}>
      <Image src={logo} boxSize={20} />
      <Heading mx="auto">Hp Memory</Heading>
    </HStack>
  );
}

export default Header;
