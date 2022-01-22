import { useEffect, useState } from "react";
import { Box, Grid } from "@chakra-ui/react";

import { Card } from "../../components/Card";
import { SearchBox } from "../../components/Form/SearchBox";
import { Header } from "../../components/Header";
import { useAuth } from "../../contexts/AuthContext";
import { useTasks } from "../../contexts/TasksContext";


export const Dashboard = () => {
    const [ loading, setLoading] = useState(true);
    const { accessToken, user } = useAuth();
    const { tasks, loadTasks } = useTasks();

    useEffect(() => {
        loadTasks(user.id, accessToken).then(res => setLoading(false));
    });

    return (
        <Box>
            <Header />
            <SearchBox />
            <Grid w="100%" templateColumns="repeat(auto-fill, minmax(420px, 1fr))" gap={7}
                padding="8" mt="8">
                {tasks.map((item) => (
                    <Card key={ item.id } task={ item } />
                ) )}
            </Grid>
        </Box>
    );
};
