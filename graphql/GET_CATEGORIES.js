import { gql } from '@apollo/client';

export const GET_CATEGORIES = gql`
  query @cached(refresh: false)  {
    categories {
      id
      img
      title
    }
  }
`;

// @cached