import { useQuery } from "@tanstack/react-query";
import { AvailableUsersList } from "./_components/availableUsers/index.tsx";
import { MessageUsersList } from "./_components/messageUsers/index.tsx";
import type { User } from "@/store/user.store.ts";

const UserList = () => {
  const { data: users } = useQuery<User[]>({
    queryKey: ["users"],
    queryFn: async () => fetch("/api/user/all.json").then((res) => res.json()),
  });

  return (
    <div className="flex flex-col md:flex-row gap-8">
      <AvailableUsersList users={users} />
      <MessageUsersList users={users} />
    </div>
  );
};

export default UserList;
