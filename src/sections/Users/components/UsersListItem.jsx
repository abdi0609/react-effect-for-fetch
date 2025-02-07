import md5 from "md5";

function UserListItem({ user }) {
  const emailHash = md5(user.email.trim().toLowerCase());
  const avatarUrl = `https://www.gravatar.com/avatar/${emailHash}?s=120&d=identicon`;

  return (
    <li key={user.id} style={{ background: user.favouriteColour }}>
      <img src={avatarUrl} alt={`${user.firstName} ${user.lastName}`} />
      <h3>
        {user.firstName} {user.lastName}
      </h3>
      <p>Email: {user.email}</p>
    </li>
  );
}

export default UserListItem;
