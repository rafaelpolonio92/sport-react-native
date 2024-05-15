import { gql } from '@apollo/client';

export const CREATE_USER = gql`
  mutation CreateUser($email: String!, $name: String!, $google: String) {
    createUser(email: $email, name: $name, google: google) {
      user {
        id
        email
      }
    }
  }
`;

export const GET_USER_BY_EMAIL = gql`
  query GetUserByEmail ($email: String!){
    getUserByEmail(email: $email) {
      id
      email
    }
  }
`;