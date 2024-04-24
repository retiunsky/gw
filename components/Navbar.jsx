/* eslint-disable @next/next/no-html-link-for-pages */
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useLocomotiveScroll } from 'react-locomotive-scroll';
import { useRouter } from 'next/router';
import Magnetic from './Magnetic';
import { useTheme } from 'next-themes';
import ThemeWithSystemButton from './ThemeButtonNew';
import ProductSortButton from './productSortButton';
import { Button } from '@mui/material';
import { useFilterContext } from '../contexts/FilterContext';

const Navbar = () => {
  const { resolvedTheme } = useTheme();
  const { open, handleDrawerOpen, handleDrawerClose } = useFilterContext();
  const [Y, setY] = useState(0);
  const [color, setColor] = useState();
  const [textColor, setTextColor] = useState();
  const [navSize, setNavSize] = useState('10rem');
  const { scroll } = useLocomotiveScroll();
  const router = useRouter();
  const currentRoute = router.pathname;
console.log('Y', Y);
  useEffect(() => {
    // setY(0)
    if (navSize === '6rem') {
      if (resolvedTheme === 'light') {
        setColor('rgb(243 244 246)');
        setTextColor('rgb(31 41 55)');
      } else if (resolvedTheme === 'dark') {
        setColor('rgb(31 41 55)');
        setTextColor('rgb(243 244 246)');
      }
    } else {
      setTextColor(resolvedTheme === 'light' ? '#6CF9F8' : '#F739C0');
      setColor('transparent');
    }

    if (scroll) {
      const element = scroll?.el;

      scroll.on('scroll', (instance) => {
        if (instance.scroll.y > 130) {
          setY(instance.scroll.y);
          setNavSize('6rem');
          setColor(
            resolvedTheme === 'light' ? 'rgb(243 244 246)' : 'rgb(31 41 55)'
          );
          setTextColor(
            resolvedTheme === 'light' ? 'rgb(31 41 55)' : 'rgb(243 244 246)'
          );
        } else {
          setNavSize('10rem');
          setColor('transparent');
          setTextColor(resolvedTheme === 'light' ? '#6CF9F8' : '#F739C0');
        }
      });
    }
  }, [scroll, navSize, resolvedTheme, Y, currentRoute]);

  const onTop = () => {
    scroll.scrollTo(0, { duration: 0 });
  };

  const onCat = () => {
    scroll.scrollTo(500, { duration: 0 });
  };

  const fontTextShadow =
    textColor === 'rgb(31 41 55)'
      ? 'white 1px 1px 0, white -1px -1px 0,  white -1px 1px 0, white 1px -1px 0 '
      : 'black 1px 1px 2px ';

  return (
    <motion.nav
      style={{
        backgroundColor: color,
        height: navSize,
        transition: 'all 1s',
        zIndex: 6,
        width: '100vw',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        pointerEvents: 'none',
        position: 'fixed',
      }}
      initial={{
        opacity: 0,
        y: -400,
      }}
      animate={{
        duration: 1,
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 1,
      }}
    >
      <div className=' w-full z-30 ease-in duration-300'>
        <div className='max-w-[1240px] m-auto flex justify-between items-center p-4 text-white'>
          <Button
            disableRipple
            sx={{
              pointerEvents: 'all',
              cursor: 'pointer',
              fontSize: '18px',
              color: `${textColor}`,
              textShadow: fontTextShadow,
              '&:hover': {
                border: '1px solid',
                background: 'transparent',
              },
            }}
            onClick={color != 'transparent' ? onTop : () => router.push('/')}
          >
            GW
          </Button>

          {currentRoute === '/products/[catId]' && (
            <div
              style={{
                pointerEvents: 'all',
              }}
            >
              <ProductSortButton
                open={open}
                handleDrawerOpen={handleDrawerOpen}
                handleDrawerClose={handleDrawerClose}
                textColor={textColor}
                fontTextShadow={fontTextShadow}
              />
            </div>
          )}

          {currentRoute === '/' && (
            <Button
              disableRipple
              sx={{
                pointerEvents: 'all',
                cursor: 'pointer',
                fontSize: '18px',
                color: `${textColor}`,
                textShadow: fontTextShadow,
                paddingLeft: 2,
                paddingRight: 2,
                '&:hover': {
                  border: '1px solid',
                  background: 'transparent',
                },
              }}
              onClick={onCat}
            >
              CATEGORIES
            </Button>
          )}

          <ThemeWithSystemButton
            textColor={textColor}
            fontTextShadow={fontTextShadow}
          />
{currentRoute === '/newabout' ? '' : (<ul
            style={{ color: `${textColor}` }}
            className='hidden sm:flex relative'
          >
            <motion.li
              whileTap={{ scale: 0.9, Y: 0 }}
              className='text-xl p-4 uppercase'
            >
              <Magnetic>
                <motion.h3
                  whileTap={{ scale: 0.5, y: 0 }}
                  style={{
                    pointerEvents: 'all',
                    color: `${textColor}`,
                    cursor: 'pointer',
                    textShadow: fontTextShadow,
                  }}
                 
                >
                  <a href='/newabout'>ABOUT</a>
                </motion.h3>
              </Magnetic>
            </motion.li>
          </ul>)}
          
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
