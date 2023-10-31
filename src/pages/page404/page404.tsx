import { Box, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

import { Container } from 'components/container';

const Page404 = () => {
  return (
    <Container>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'center',
          backgroundColor: 'inherit',
          marginTop: '30px',
        }}
      >
        <Typography variant='h1' style={{ color: 'black' }}>
          404
        </Typography>
        <Typography
          variant='h6'
          style={{ color: 'black', textAlign: 'center', margin: '0 0 10px 0' }}
        >
          Страница не найдена
        </Typography>
        <Button variant='contained'>
          <Link to='/' style={{ color: 'inherit', textDecoration: 'none' }}>
            Перейти на главную
          </Link>
        </Button>
      </Box>
    </Container>
  );
};

export default Page404;
