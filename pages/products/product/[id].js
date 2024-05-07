import { Box, Card, Divider, Grid, Typography } from '@mui/material';
import Head from 'next/head';
import { client } from '../../../graphql/client';
import { gql } from '@apollo/client';
import GoBackBtn from '../../../components/GoBackButton';
import { useTheme } from 'next-themes';
import { useRef } from 'react';

export default function ProductPage({ product }) {
  const { resolvedTheme } = useTheme();
  let shadow = resolvedTheme === 'light' ? '#6CF9F8' : '#F739C0';
  const nodeRef = useRef(null);
  return (
    <>
      <Head>
        <title>GW - {product.data.products_by_pk.title}</title>
      </Head>

      <Grid nodeRef={nodeRef} sx={{ pl: 3 }} container spacing={3}>
        <Grid
          sx={{ mt: 20 }}
          item
          sm={6}
          md={4}
          className='animate__animated animate__fadeInLeft'
        >
          <img
            style={{
              maxHeight: 400,
              filter: `drop-shadow(0 0 0.75rem ${shadow})`,
            }}
            src={product.data.products_by_pk.img}
            alt={product.data.products_by_pk.img}
          />
        </Grid>

        <Grid sx={{ mt: 20 }} item xs={12} sm={6} md={8}>
          <GoBackBtn category={product.data.products_by_pk.category.title} />
          <Divider />

          <Typography
            variant='h3'
            sx={{ mt: { xs: 'none', sm: 2 } }}
            gutterBottom
          >
            {product.data.products_by_pk.title}
          </Typography>
          <Divider />
          <Typography className='mb-8 mt-8'>
            Description : {product.data.products_by_pk.description}
          </Typography>
          <Divider />
          <Typography className='mt-8' variant='h4'>
            Price : $ {product.data.products_by_pk.price}
          </Typography>
        </Grid>
      </Grid>
    </>
  );
}

export async function getServerSideProps({ params: { id } }) {
  const GET_PRODUCT = gql`
    query ($id: uuid!) @cached(refresh: true) {
      products_by_pk(id: $id) {
        description
        id
        img
        price
        title
        date
        categoryId
        category {
          title
        }
      }
    }
  `;
  const data = await client.query({
    query: GET_PRODUCT,
    variables: {
      id: id,
    },
  });

  return {
    props: {
      product: data,
    },
  };
}
