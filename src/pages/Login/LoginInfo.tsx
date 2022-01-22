import { Grid, Heading, Image, Text } from "@chakra-ui/react";

import LogoPrimary from "../../assets/logo-primary.svg";


export const LoginInfo = () => (
    <Grid w={["100%", "100%", "50%", "50%"]} paddingRight={["0", "0","100px"]}
        paddingBottom={["20px", "20px", "0"]}
    >
        <Image src={ LogoPrimary } alt="doit" boxSize={["120px", "120px", "150px", "150px"]} />
        <Heading as="h1" mt="4">O jeito fácil, grátis</Heading>
        <Text w={["auto", "350px"]}>
        flexível e atrativo de gerenciar
        <b> seus projetos em uma única plataforma</b>
        </Text>
    </Grid>
);