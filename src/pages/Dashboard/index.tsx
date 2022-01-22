import { Box, Grid } from "@chakra-ui/react";
import { Card } from "../../components/Card";

import { SearchBox } from "../../components/Form/SearchBox";
import { Header } from "../../components/Header";


export const Dashboard = () => {

    return (
        <Box>
            <Header />
            <SearchBox />
            <Grid w="100%" templateColumns="repeat(auto-fill, minmax(420px, 1fr))" gap={7}
                padding="8" mt="8">
                {[1,2,3,4,5].map((index) => (
                    <Card key={ index } />
                ) )}
            </Grid>
        </Box>
    );
};
