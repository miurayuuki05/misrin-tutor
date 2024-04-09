import { ApolloClient, gql, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: process.env.HYGRAPH_API,
  cache: new InMemoryCache(),
});

const GET_TUTOR = gql`
query Tutor {
    usersAcc {
      profileImages {
        url
      }
      username
      subject
      grades
    }
  }
`;

export default async function getTutor() {
  const { data } = await client.query({
    query: GET_TUTOR,
  });
  return data.usersAcc;
}

export async function postRegister(data: any) {
  const res = await fetch(`${process.env.HYGRAPH_API}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return res;
}