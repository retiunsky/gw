import { Box, Card, CardMedia, Typography, useTheme } from '@mui/material';
import Link from 'next/link';

export default function CategoryItem({ category }) {
  const theme = useTheme();

  return (
    <Link href={`/products/${category.id}`}>
      <Card  style={{   marginBottom: '10px', 
             borderRadius:"30px", zIndex: 100,
         }}>

        <CardMedia
          style={{height: '380px', cursor: 'pointer' }}          
          sx={{
            "&:hover, &.Mui-focusVisible": {
              transform: "scale3d(1.05, 1.05, 1)",
            },
            transition: "transform 0.15s ease-in-out",
          }}
            component='img'
          src={category.img}
        />
        <Typography
          gutterBottom
          variant='h3'
          component='h3'
          style={{
            cursor: 'pointer',
            textShadow: '1px 1px 1px #fff',
            position: 'absolute',
            top: '80%',
            width: '100%',
            textAlign: 'center',
            backgroundColor: 'none',
            fontFamily: 'Dm-Sans, monospace',
            color: 'theme.palette.primary.main',
          }}
        >
          {category.title}
        </Typography>
      </Card>
    </Link>
  );
}
