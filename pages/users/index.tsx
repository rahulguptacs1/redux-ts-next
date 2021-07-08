import { useSelector } from "react-redux";

function Users() {
  const users = useSelector((state: any) => state.users);
  return (
    <div>
      {users.map((user: any) => (
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  );
}

export default Users;
