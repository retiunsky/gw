import { motion } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';
import { useTheme } from 'next-themes';

const VideoContainer = styled.section`
  width: 100vw;
  video {
    object-fit: cover;
  }
`;

const CoverVideo = (props) => {
  const { resolvedTheme } = useTheme();

  return (
    <VideoContainer
      style={{
        position: 'absolute',
        top: -100,
      }}
      data-scroll
    >
      <motion.div
        initial={{ scale: 1.5, opacity: 0 }}
        animate={{
          scale: 1,
          opacity: 1,
          transition: {
            type: 'tween',
            ease: 'easeOut',
            duration: 1,
          },
        }}
      >
        <div className='noise'></div>
        <video
          style={{ filter: resolvedTheme === 'dark' ? 'brightness(50%)' : '' }}
          type='video/mp4'
          autoPlay
          muted
          loop
          controls={false}
          src={
            'https://res.cloudinary.com/dmhf0tmx6/video/upload/v1711278407/pexels-yan-krukov-8617108_1080p_lssjs2.mp4'
          }
        />
      </motion.div>
    </VideoContainer>
  );
};

export default CoverVideo;
