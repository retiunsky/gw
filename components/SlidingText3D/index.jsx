import style from './style.module.scss';
import gsap from 'gsap';
import { useLayoutEffect, useRef, useState } from 'react';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useTheme } from 'next-themes';
import { useRouter } from 'next/router';
import { useYContext } from '../../contexts/YContext';

function usePrevious(value) {
  const ref = useRef();

  useLayoutEffect(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
}

export default function SlidingText3D({ currentRoute }) {
  const { Y } = useYContext();
  const { resolvedTheme } = useTheme();
  const divRef = useRef(null);
  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);
  let xPercent = 0;
  const [directionn, setDir] = useState(-1);
  const [fontColor, setFontColor] = useState('rgb(243 244 246)');
  const [fontTextShadow, setFontTextShadow] = useState('black 1px 1px 2px ');
  const prevY = usePrevious(Y);

  useLayoutEffect(() => {
    if (Y > prevY) {
      setDir(-1);
    } else {
      setDir(1);
    }
    resolvedTheme === 'light'
      ? setFontColor('rgb(243 244 246)')
      : setFontColor('rgb(31 41 55)');

      
    resolvedTheme === 'light'
      ? setFontTextShadow('black 1px 1px 2px ')
      : setFontTextShadow('white 1px 1px 0, white -1px -1px 0,  white -1px 1px 0, white 1px -1px 0 ');


    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [resolvedTheme, Y]);

  let direction;

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: divRef.current,
        scrub: 0.25,
        start: 0,
        end: window.innerHeight,
        // eslint-disable-next-line react-hooks/exhaustive-deps
        onUpdate: (e) => (direction = directionn),
      },
      x: '-500px',
    });

    requestAnimationFrame(animate);
  }, [directionn]);

  const animate = () => {
    if (xPercent < -100) {
      xPercent = 0;
    } else if (xPercent > 0) {
      xPercent = -100;
    }

    gsap.set(firstText.current, { xPercent: xPercent });
    gsap.set(secondText.current, { xPercent: xPercent });
    requestAnimationFrame(animate);
    xPercent += 0.1 * directionn;
  };

  
  return (
    <div ref={divRef} className={style.main}>
      <div ref={slider} className={style.slider}>
        <p
          style={{
            color: fontColor,
            fontWeight: 900,
            textShadow: fontTextShadow,
            textTransform: 'uppercase',
            fontSize: currentRoute === '/' ? '90px' : '0',
          }}
          ref={firstText}
        >
          IBM GOOGLE INTEL QUALCOM NIKON
        </p>
        <p
          style={{
            color: fontColor,
            fontWeight: 900,
            fontSize: '90px',
            textShadow: fontTextShadow,
            textTransform: 'uppercase',
          }}
          ref={secondText}
        >
          SAMSUNG NVIDIA SONY AMD CANON
        </p>
      </div>
    </div>
  );
}
