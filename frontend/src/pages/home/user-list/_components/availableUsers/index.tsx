import Button from "@/components/button/Button";
import UserCard from "@/components/user-card/UserCard";
import { useSocket } from "@/context/socketContext";
import type { User } from "@/store/user.store";
import useUserStore from "@/store/user.store";
import type { FC } from "react";

interface AvailableUsersListProps {
  users?: User[];
}

export const AvailableUsersList: FC<AvailableUsersListProps> = ({ users }) => {
  const currentUser = useUserStore((state) => state.currentUser);
  const setCurrentUser = useUserStore((state) => state.setCurrentUser);
  const setCurrentRecipient = useUserStore(
    (state) => state.setCurrentRecipient
  );
  const changeUser = useSocket((state) => state.changeUser);

  const switchUser = (userId: number) => {
    const user = users?.find((user) => user.id === userId);
    if (user) {
      changeUser(user.id);
      setCurrentUser(user);
      setCurrentRecipient(null);
    }
  };

  return (
    <div className="flex-1">
      <h2 className="text-lg font-semibold mb-4">Select Current User</h2>
      <div className="flex flex-col gap-2.5">
        {users?.map((user) => (
          <div className="flex items-center" key={user.id}>
            <UserCard user={user} />
            <div className="ml-auto">
              <Button
                onClick={() => switchUser(user.id)}
                disabled={user.id === currentUser.id}
              >
                {user.id === currentUser.id ? "Current User" : "Switch to"}
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
