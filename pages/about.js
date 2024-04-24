import { useEffect, useRef, useState } from 'react';

export default function About() {
  return (
    <div style={{background: 'gray'}}>
      <div key='kkk' data-scroll-section>
        <section id='kkk'>
          

          <div >
            {[...Array(10).keys()].map((idx) => (
              <div
                
                key={idx}
                data-scroll
                data-scroll-speed={10}
              >
                <h2>data-scroll-speed</h2>
                <code>{`<div data-scroll data-scroll-speed="${idx}"></div>`}</code>
              </div>
            ))}
          </div>

          

          <div >
            {[...Array(10).keys()].map((idx) => (
              <div
                
                key={idx}
                data-scroll
                data-scroll-speed={idx}
              >
                <h2>data-scroll-speed</h2>
                <code>{`<div data-scroll data-scroll-speed="${idx}"></div>`}</code>
              </div>
            ))}
          </div>

          
        </section>
      </div>
    </div>
  );
}

