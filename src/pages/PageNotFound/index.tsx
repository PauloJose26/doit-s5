import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";

export const PageNotFound = () => {
  return (
    <Flex
      padding={["10px 15px", "10px 15px", "0"]}
      alignItems="center"
      justifyContent="center"
      height={["auto", "auto", "100vh"]}
    >
      <Box mt="4">
        <Heading>Ooops!</Heading>
        <Text mt="4">
          Não encotramos a página que você procurou, vamos tentar novamente.
        </Text>
        <Button
            mt="4"
            bg="red.600"
            h="60px"
            color="white"
            w="100%"
            _hover={{ bg: "red.700" }}
        >
            Ir para minhas tarefas
        </Button>
      </Box>
    </Flex>
  );
};
