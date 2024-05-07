import { useState, useEffect } from 'react';
import { Grid } from '@mui/material';
import ProductCard from './productCard';
import { motion, AnimatePresence } from 'framer-motion';
import { useSortContext } from '../contexts/SortContext';
import { useFilterContext } from '../contexts/FilterContext';
import Particles from "react-particles";
import { useCallback } from "react";
import { loadSlim } from "tsparticles-slim";

export const gridSpacing = 3;

const optionsLoadSlim = {
    
  fpsLimit: 120,
  interactivity: {
    events: {
      onClick: {
        enable: true,
        mode: "push"
      },
      onHover: {
        enable: true,
        mode: "grab"
      },
      resize: true
    },
    modes: {
      push: {
        quantity: 4
      },
      repulse: {
        distance: 200,
        duration: 0.4
      }
    }
  },
  particles: {
    color: {
      value: "#000000"
    },
    links: {
      color: "#000000",
      distance: 150,
      enable: true,
      opacity: 0.5,
      width: 1
    },
    move: {
      direction: "none",
      enable: true,
      outModes: {
        default: "bounce"
      },
      random: false,
      speed: 2,
      straight: false
    },
    number: {
      density: {
        enable: true,
        area: 800
      },
      value: 80
    },
    opacity: {
      value: 0.5
    },
    shape: {
      type: "circle"
    },
    size: {
      value: { min: 1, max: 2 }
    }
  },
  detectRetina: true,
  fullScreen: {
    enable: true,
    zIndex: -100
  },
};



export default function ProductsList({ products }) {
  const [sortedProducts, setSortedProducts] = useState([]);
  const [fProducts, setFProducts] = useState([]);
  const { sortBy } = useSortContext();
  const { selectedBrands } = useFilterContext();

  useEffect(() => {
    const filteredProduct =
      selectedBrands.length > 0
        ? products.data.products.filter((product) =>
            selectedBrands.includes(product.brand.title)
          )
        : products.data.products;

    let sortProduct = filteredProduct.sort((a, b) => {
      switch (sortBy) {
        case 'Price: Low-High':
          return a.price - b.price;
        case 'Price: High-Low':
          return b.price - a.price;
        case 'Newest':
          return new Date(b.date).getTime() - new Date(a.date).getTime();
        default:
          return 0;
      }
    });
    setSortedProducts([...sortProduct]);
    setFProducts([...filteredProduct]);
  }, [sortBy, selectedBrands, products.data.products]);

  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);
  
  return (
    <Grid container sx={{ mt: 3, p: '30px' }} spacing={gridSpacing}>
      
      <Grid sx={{ mt: 8 }} item xs={12}>
        <Grid component={motion.div} container spacing={gridSpacing}>
          <AnimatePresence>
    <Particles options={optionsLoadSlim} init={particlesInit} />
            {fProducts.map((product) => (
              <ProductCard
               product={product} key={product.id} />
            ))}
          </AnimatePresence>
        </Grid>
      </Grid>
    </Grid>
  );
}
