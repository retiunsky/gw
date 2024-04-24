import React from 'react';
import dynamic from 'next/dynamic';
import { Card } from '@mui/material';
import { motion } from 'framer-motion';
import Caroucel from './Caroucel/Caroucel';

const ParticlesBg = dynamic(() => import('particles-bg'), {
  ssr: false,
});
export default function AboutNew({ categories }) {
  return (
    <div id='fixed-target'>
       <motion.div
          style={{
            transition: 'all 0.1s',
          }}
          initial={{
            y: 1,
          }}
          animate={{
            duration: 0.1,
            y: 0,
          }}
          transition={{
            duration: 0.1,
            delay: 0.1,
          }}
        >
      <ParticlesBg type='cobweb' bg={true} />
      </motion.div>
      <div data-scroll-target='#fixed-target' data-scroll data-scroll-sticky>
        <motion.div
          style={{
            transition: 'all 1s',
          }}
          initial={{
            opacity: 0,
            y: 200,
          }}
          animate={{
            duration: 1,
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
            delay: 1,
          }}
        >
          <Card
            sx={{
              pt: 83,
              mx: { xs: 2, lg: 3 },

              mb: 4,
              backgroundColor: 'transparent',
              boxShadow: 'none',
              position: 'relative',
            }}
          >
            <Caroucel categories={categories} />
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
