import { gql } from '@apollo/client';

export const GET_PRODUCTS = gql`
  query @cached(refresh: false) {
    products (where: {category: {id: {_eq: id}}}) {
      description
      id
      img
      price
      title
    }
  }
`;

 
    

