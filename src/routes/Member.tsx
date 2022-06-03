import { gql, useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";

const GET_MEMBER = gql`
  query findOne($memberId: ID!) {
    findOne(id: $memberId) {
      id
      firstName
      lastName
      fullName
      address
    }
  }
`;

export default function Member() {
  const { id } = useParams();
  const { data, loading, error } = useQuery(GET_MEMBER, {
    variables: { memberId: id },
  });
  if (loading) return <div>Loading....</div>;
  return <div>{data.findOne.fullName}</div>;
}
