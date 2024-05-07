import React from 'react';
import { Card } from '@mui/material';
import { motion } from 'framer-motion';
import Caroucel from './Caroucel/Caroucel';


export default function Categories({ categories }) {
  return (
    <div id='fixed-target'>       
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
              pt: { xs: 23, sm: 30, md: 83 },
              

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
