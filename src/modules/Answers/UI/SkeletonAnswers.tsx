import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

const SkeletonAnswers = () => {
  return (
    <Stack spacing={0}>
      <Skeleton variant='text' sx={{ fontSize: '3rem', padding: '7px' }} />
      <Skeleton variant='text' sx={{ fontSize: '3rem', padding: '7px' }} />
      <Skeleton variant='text' sx={{ fontSize: '3rem', padding: '7px' }} />
      <Skeleton variant='text' sx={{ fontSize: '3rem', padding: '7px' }} />
      <Skeleton variant='text' sx={{ fontSize: '3rem', padding: '7px' }} />
    </Stack>
  );
};

export default SkeletonAnswers;
