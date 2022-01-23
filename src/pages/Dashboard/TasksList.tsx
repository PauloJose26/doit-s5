import { Box, Grid } from "@chakra-ui/react";

import { SearchBox } from "../../components/Form/SearchBox";
import { Header } from "../../components/Header";
import { CardSkeleton } from "../../components/Skeleton/CardSkeleton";
import { Card } from "../../components/Card";



interface Task {
    id: string;
    title: string;
    description: string;
    userId: string;
    completed: boolean;
}
interface TasksListProps {
    loading: boolean;
    tasks: Task[];
    handleClick: (task: Task) => void;
}


export const TasksList = ({ loading, tasks, handleClick }: TasksListProps) => {
    return(
        <Box>
            <Header />
            <SearchBox />
            <Grid
              w="100%"
              templateColumns="repeat(auto-fill, minmax(420px, 1fr))"
              gap={7}
              padding="8"
              mt="8"
            >
              {loading ? (
                <CardSkeleton repeatCount={6} />
              ) : (
                tasks.map((item) => (
                  <Card key={item.id} task={item} onClick={ handleClick } />
                ))
              )}
            </Grid>
          </Box>
    );
};