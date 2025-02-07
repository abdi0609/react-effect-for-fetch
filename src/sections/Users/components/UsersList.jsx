import UserListItem from "./UsersListItem";

function UsersList({ users }) {
  return (
    <ul className="users-list">
      {users.length > 0 ? (
        users.map((user) => <UserListItem key={user.id} user={user} />)
      ) : (
        <p>Loading...</p>
      )}
    </ul>
  );
}

export default UsersList;
