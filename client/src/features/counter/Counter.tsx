import { Button, ButtonGroup, Typography, Box, List, ListItem, Paper } from "@mui/material";
import { useStore } from "../../lib/hooks/useStore"
import { observer } from 'mobx-react-lite';

const Counter = observer(function Counter() {
    const { counterStore } = useStore();
    return (
        <Box display='flex' justifyContent='space-between'>
            <Box sx={{width: '60%'}}>
            <Typography variant="h4" gutterBottom>{counterStore.title}</Typography>
            <Typography variant="h6">{counterStore.count}</Typography>
            <ButtonGroup sx={{ mt: 3 }}>
                <Button onClick={() => counterStore.decrement()} variant="contained" color="error">Decrement</Button>
                <Button onClick={() => counterStore.increment()} variant="contained" color="success">Increment</Button>
                <Button onClick={() => counterStore.increment(5)} variant="contained" color="primary">Increment by 5</Button>
            </ButtonGroup>
            </Box>
            <Paper sx={{width: '40%'}}>
                <Typography variant="h5">Counter events ({counterStore.eventCount})</Typography>
                <List>
                    {counterStore.event.map((eve,index) => (
                        <ListItem key={index}>{eve}</ListItem>
                    ))}
                </List>
            </Paper>
        </Box>

    )
})

export default Counter
