import { ApolloClient, gql, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://api-ap-northeast-1.hygraph.com/v2/clt0nthb70xmg08vw8r11un6p/master",
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