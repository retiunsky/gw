import { useState, useEffect } from 'react';
import { Grid } from '@mui/material';
import ProductCard from './productCard';
import { motion, AnimatePresence } from 'framer-motion';
import { useSortContext } from '../contexts/SortContext';
import { useFilterContext } from '../contexts/FilterContext';

export const gridSpacing = 3;

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

  return (
    <Grid container sx={{ mt: 3, p: '30px' }} spacing={gridSpacing}>
      <Grid sx={{ mt: 8 }} item xs={12}>
        <Grid component={motion.div} container spacing={gridSpacing}>
          <AnimatePresence>
            {fProducts.map((product) => (
              <ProductCard product={product} key={product.id} />
            ))}
          </AnimatePresence>
        </Grid>
      </Grid>
    </Grid>
  );
}
