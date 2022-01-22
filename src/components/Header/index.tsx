import { Center, Flex, Heading, Image, useDisclosure } from "@chakra-ui/react";
import { FaTh } from "react-icons/fa";

import Logo from "../../assets/logo-min.svg";
import { theme } from "../../style/theme";
import { Menu } from "./Menu";

export const Header = () => {
  const { isOpen, onClose, onToggle } = useDisclosure();

  return (
    <Flex
      as="header"
      h="10vh"
      borderBottomWidth="1px"
      borderBottomColor="#f5f5f5"
      paddingX="8"
      paddingY="2"
    >
      <Flex align="center">
        <Image src={ Logo } />
        <Heading ml="4" size="lg">
          Dashboard
        </Heading>
      </Flex>
      <Center onClick={ onToggle } as="button" ml="auto" fontSize="4xl">
        <FaTh color={ theme.colors.gray[400] } />
      </Center>
      <Menu isOpen={ isOpen } onClose={ onClose } />
    </Flex>
  );
};
