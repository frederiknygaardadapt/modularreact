import { useGetUsersQuery } from "./users.query";

export const Users = () => {
  const { data, error, isLoading } = useGetUsersQuery();

  return (
    <div>
      {data?.users.map((user) => (
        <p>{user.name}</p>
      ))}
    </div>
  );
};
