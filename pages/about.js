import { useRef } from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import Baloons from '../components/baloons';

const NewAbout = () => {
  const ref = useRef();

  return (
    <div className='h-full' style={{ cursor: 'pointer' }}>
      {/* <Baloons /> */}

      <Parallax pages={3} ref={ref}>
        <div className='h-screen'>
          <ParallaxLayer
            offset={0}
            speed={-0.1}
            style={{ zIndex: '0' }}
            onClick={() => ref.current.scrollTo(1)}
          >
            <img
              src='/assets/bgForest.png'
              className='absolute w-full h-screen object-cover'
              alt='bg'
            />
          </ParallaxLayer>
          <ParallaxLayer
            speed={-0.3}
            style={{ zIndex: '0' }}
            onClick={() => ref.current.scrollTo(1)}
          >
            <img
              src='/assets/sun.png'
              className='absolute w-full h-screen object-cover'
              alt='sun'
            />
          </ParallaxLayer>
          <ParallaxLayer
            speed={-0.1}
            style={{ zIndex: '10' }}
            onClick={() => ref.current.scrollTo(1)}
          >
            <img
              src='/assets/bgPart.png'
              className='absolute w-full h-screen object-cover'
              alt='bgPart'
            />
          </ParallaxLayer>
          <ParallaxLayer
            style={{ zIndex: '20' }}
            onClick={() => ref.current.scrollTo(1)}
          >
            <img
              src='/assets/trees.png'
              className='absolute w-full h-screen object-cover'
              alt='trees'
            />
          </ParallaxLayer>
          <ParallaxLayer
            offset={0}
            speed={-0.2}
            style={{ zIndex: '15' }}
            onClick={() => ref.current.scrollTo(1)}
          >
            <h1 className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
              Thanks
            </h1>
          </ParallaxLayer>
          <ParallaxLayer offset={1} onClick={() => ref.current.scrollTo(2)}>
            <div className='h-screen bg-[#040613]'>
              <h1 className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30'>
                For Scrolling
              </h1>
            </div>
          </ParallaxLayer>
          <ParallaxLayer
            offset={2}
            style={{ zIndex: '20' }}
            onClick={() => ref.current.scrollTo(0)}
          >
            <Baloons />
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 1000,
              }}
              className='bg-[#040613]'
            >
              <img
                style={{}}
                className='object-cover'
                height={'600px'}
                src='/assets/dog.png'
                alt='dog'
              />
            </div>
          </ParallaxLayer>
        </div>
      </Parallax>
    </div>
  );
};

export default NewAbout;
