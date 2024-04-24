import { useState, useEffect } from 'react';
import Link from 'next/link';
import { alpha, Box, Card, CardMedia, Grid, Typography, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import { useTheme as nextUseTheme } from 'next-themes';


export default function ProductCard({ product }) {
  const theme = useTheme();
  const {resolvedTheme} = nextUseTheme();
  const [isLoading, setLoading] = useState(true);
  const [hoverColor, setHoverColor] = useState('rgba(243, 244, 246, 0.1)');
  const [hoverBoxShadow, setHoverBoxShadow] = useState();

  const fontTextColor =
  resolvedTheme === 'light' ? 'rgb(31 41 55)' : 'rgb(243 244 246)'


  const colorHandler = () => {
    setHoverColor('rgba(243, 244, 246, 0)');
    setHoverBoxShadow(`inset 0px 2px 8px 3px ${resolvedTheme === 'light' 
    ? '#6CF9F8'
    : '#F739C0'}`);
  };
  const colorHandlerUp = () => {
    setHoverColor('rgba(243, 244, 246, 0)');
    setHoverBoxShadow('0 1px 7px 0 rgb(32 40 45 / 4%)');
  };
  useEffect(() => {
    setLoading(false);
    setHoverColor('rgba(243, 244, 246, 0)');
    setHoverBoxShadow('0 1px 7px 0 rgb(32 40 45 / 4%)');
  }, [theme]);

  return (
    <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
      <Link
        href={`/products/product/${product.id}`}
        style={{ textDecoration: 'none' }}
      >
        <Card
          onMouseDown={colorHandler}
          onMouseLeave={colorHandlerUp}
          component={motion.div}
          layout
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          elevation={0}
          sx={{
            pt: 2,
            height: '350px',
            backgroundColor: hoverColor,
            boxShadow: resolvedTheme === 'light' 
            ? `0 4px 15px 0 #6CF9F8`
            : `0 4px 15px 0 #F739C0`
            ,
            borderRadius: '30px',
            ':hover': {
            backgroundColor: alpha(hoverColor, 0.05),

              borderColor: theme.palette.primary.light,
              boxShadow: hoverBoxShadow,
              cursor: 'pointer',
            },
          }}
        >
          <CardMedia
            style={{
              maxHeight: '280px',
              width: 'auto',
              cursor: 'pointer',
              display: 'block',
              margin: 'auto',
            }}
            component='img'
            src={product.img}
          />

          <Box>
            <Typography
              sx={{
                color: fontTextColor,
                textAlign: 'center',
                m: 0.5,
              }}
            >
              ${product.price}
              {' - '}
              {product.title}
            </Typography>
          </Box>
        </Card>
      </Link>
    </Grid>
  );
}
