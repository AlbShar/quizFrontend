import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

const SkeletonQuestion = () => {
  return (
    <Stack spacing={1}>
      <Skeleton variant='text' sx={{ fontSize: '5rem'}} />
    </Stack>
  );
};

export default SkeletonQuestion;
