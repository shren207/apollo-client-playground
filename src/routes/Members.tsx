import { gql, useApolloClient } from "@apollo/client";
import { useEffect, useState } from "react";

type Member = {
  id: string;
  firstName: string;
  lastName: string;
  fullName: string;
  address: string;
};

export default function Members() {
  const [members, setMembers] = useState([]);
  const client = useApolloClient();
  // 여기서 client는 /src/clients.ts에서 작성한 client와 동일한 것이 된다.
  // 이것이 가능한 이유는 main.tsx에서 <App />을 <ApolloProvider client={client}>로 감싸주었기 때문에 가능한 것이다.
  // 즉, Provider는 application안의 모든 파일이 client에 접근할 수 있도록 해 준다.

  // client를 불러왔으니, 우리는 다음과 같이 사용할 수 있다.
  useEffect(() => {
    client
      .query({
        query: gql`
          {
            findAll {
              id
              firstName
              lastName
              fullName
              address
            }
          }
        `,
      })
      .then((results) => setMembers(results.data.findAll));
  }, [client]);

  return (
    <div>
      {members.map((member: Member) => (
        <li key={member.id}>
          {member.fullName} ({member.firstName} {member.lastName})
        </li>
      ))}
    </div>
  );
}

// Members 화면에서, client.ts를 가져오려면 어떻게 하면 좋을까? (정확히는 client)
// 첫번째 방법은, useClient hook을 사용하는 것이다.
