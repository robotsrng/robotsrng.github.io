import TemplateTester from '@/components/TemplateTester/TemplateTester';
import { Typography, Stack, Container } from '@mui/material';
import Counter from '@/components/Counter/Counter';

const Home = () => {
  return (
    <Container sx={{ py: 2, position: 'relative' }}>
      <Stack gap={1} my={2}>
        <Typography textAlign="center" variant="h2">
          Shane Glass
        </Typography>
        <Typography textAlign="center" variant="subtitle1">
Australia
        </Typography>
      </Stack>
      <Counter />
    </Container>
  );
};

export default Home;
