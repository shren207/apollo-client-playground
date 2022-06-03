import { gql, useQuery } from "@apollo/client";

type Member = {
  id: string;
  firstName: string;
  lastName: string;
  fullName: string;
  address: string;
};

const ALL_MEMBERS = gql`
  query AllMembers {
    findAll {
      id
      firstName
      lastName
      fullName
      address
    }
  }
`;
// ALL_MEMBERS의 쿼리 작성방식은 playground랑 그냥 똑같은 방식이다.

export default function Members() {
  // const result = useQuery(ALL_MEMBERS);
  const { data, loading, error } = useQuery(ALL_MEMBERS);
  if (loading) return <div>Loading....</div>;
  if (error) return <div>Error!! </div>;
  return (
    <div>
      {data.findAll.map((member: Member) => {
        return <li key={member.id}>{member.fullName}</li>;
      })}
    </div>
  );
}
