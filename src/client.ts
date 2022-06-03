import {ApolloClient, gql, InMemoryCache} from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:3000/graphql",
  cache: new InMemoryCache()
})


// 이렇게 작성하는 방식은 hooks이 나오기 이전의 방식이다. (구림)
// client.query({
//     query: gql`
//         {
//             findAll {
//                 id
//                 firstName
//                 lastName
//                 fullName
//                 address
//             }
//         }
//     `
// }).then(data => console.log(data))

export default client;
// 보통은 apollo client가 가지고 있는 hooks을 이용한다.(useQuery, useMutation 등...)


