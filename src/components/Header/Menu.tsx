import {
  Box,
  Center,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Heading,
  Text,
} from "@chakra-ui/react";
import { FiLogOut } from "react-icons/fi";

import { useAuth } from "../../contexts/AuthContext";
import { theme } from "../../style/theme";

interface MenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Menu = ({ isOpen, onClose }: MenuProps) => {
  const { user, SignOut } = useAuth();

  return (
    <Drawer placement="top" onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay mt="10vh" />
      <DrawerContent ml="auto" mt="10vh" w={["450px", "350px"]}>
        <DrawerHeader
          borderBottomWidth="1px"
          borderColor="gray.50"
          color="gray.900"
        >
          {user.name}
        </DrawerHeader>
        <DrawerBody>
          <Flex align="center" onClick={SignOut} cursor="pointer">
            <Center
              w="60px"
              h="60px"
              bg="red.600"
              fontSize="2xl"
              borderRadius="md"
            >
              <FiLogOut color={theme.colors.white} />
            </Center>
            <Box ml="4">
              <Heading as="h2" fontSize="lg">
                Sair da minha conta
              </Heading>
              <Text color="gray.300" fontSize="small">Sair da minha conta agora</Text>
            </Box>
          </Flex>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};
