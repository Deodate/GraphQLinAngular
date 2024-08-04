import { gql } from 'apollo-angular';

const GET_NEWS = gql`
  query GetNews {
    news {
      id
      title
      description
    }
  }
`;

export { GET_NEWS };
