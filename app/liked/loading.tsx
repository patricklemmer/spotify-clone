'use client';

import Box from '@/components/Box';

import { BounceLoader } from 'react-spinners';

const Loading = () => {
  return (
    <Box className="h-full flex items-center justify-center">
      <BounceLoader size={40} color="#22c55e" />
    </Box>
  );
};

export default Loading;
