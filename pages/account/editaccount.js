import UpdateUser from "../../components/account/Edits";
import { Query, Mutation } from "react-apollo";
import PleaseSignIn from "../../components/auth/PleaseSignIn";
import { CURRENT_USER_QUERY } from "../../components/auth/User";

const EditAccount = props => (
  <PleaseSignIn>
    <Query query={CURRENT_USER_QUERY}>
      {({ data, loading }) => {
        if (loading) return <p>Loading...</p>;
        return <UpdateUser data={data} />;
      }}
    </Query>
  </PleaseSignIn>
);

export default EditAccount;
