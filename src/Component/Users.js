import useFetchData from "./useFetchData";
function Users() {
  const { data } = useFetchData("http://api.github.com/users");

  return (
    <div>
      {data &&
        data.map((user) => (
          <div className="text-white" key={user.id}>
            <h1>{user.login}</h1>
            <p>{user.type}</p>
          </div>
        ))}
    </div>
  );
}

export default Users;