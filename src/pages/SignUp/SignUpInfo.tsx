import { Center, Flex, Grid, Heading, Image, Text, VStack, Box } from "@chakra-ui/react";
import { FaForward } from "react-icons/fa";

import LogoPrimary from "../../assets/logo-primary.svg";
import SimpleIcon from "../../assets/simple-icon.svg";
import { theme } from "../../style/theme";


export const SignUpInfo = () => (
    <Grid w={ ["100%", "70%", "50%", "50%"] } paddingLeft={ ["0", "0","50px", "80px"] }
        paddingBottom={ ["20px", "20px", "0"] }
    >
        <Image src={ LogoPrimary } alt="doit" boxSize={["120px", "120px", "150px", "150px"]} 
            mb={["20px", "20px","80px"]} />
        <VStack spacing="14" mt={["10px", "0"]}>
            <Flex w="100%">
                <Center borderRadius="5px" bg="white" w="50px" h="50px" >
                    <FaForward color={theme.colors.purple["800"]} size={35} />
                </Center>
                <Box ml="4">
                    <Heading size="lg">Agilidade</Heading>
                    <Text>
                        Agilize seus projetos com rapidez <br/> e muita performance
                    </Text>
                </Box>
            </Flex>
            <Flex w="100%">
                <Center borderRadius="5px" bg="white" w="50px" h="50px" >
                    <Image src={ SimpleIcon } width="25px" />
                </Center>
                <Box ml="4">
                    <Heading size="lg">Simplicidade</Heading>
                    <Text>
                        Armazene seus projetos em uma <br/> interface altamente usual
                    </Text>
                </Box>
            </Flex>
        </VStack>
    </Grid>
);