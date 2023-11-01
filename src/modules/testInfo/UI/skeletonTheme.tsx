import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

const SkeletonTheme = () => {
  return (
    <Stack spacing={3}>
      <Skeleton variant='rounded' width={300} height={25} />
    </Stack>
  );
};

export default SkeletonTheme;
