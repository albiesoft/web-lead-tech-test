import Button from "@/components/button/Button";
import UserCard from "@/components/user-card/UserCard";
import usePageStore from "@/store/page.store";
import type { User } from "@/store/user.store";
import useUserStore from "@/store/user.store";
import type { FC } from "react";

interface MessageUserListProps {
  users?: User[];
}

export const MessageUsersList: FC<MessageUserListProps> = ({ users }) => {
  const currentUser = useUserStore((state) => state.currentUser);
  const setCurrentRecipient = useUserStore(
    (state) => state.setCurrentRecipient
  );
  const setCurrentPage = usePageStore((state) => state.setCurrentPage);

  const messageUser = (userId: number) => {
    const user = users?.find((user) => user.id === userId);
    if (user) {
      setCurrentRecipient(user);
      setCurrentPage("chat");
    }
  };

  return (
    <div className="flex-1">
      <h2 className="text-lg font-semibold mb-4">Message Someone</h2>
      <div className="flex flex-col gap-2.5">
        {users?.map((user) => (
          <div className="flex items-center" key={user.id}>
            <UserCard user={user} />
            <div className="ml-auto">
              <Button
                onClick={() => messageUser(user.id)}
                disabled={user.id === currentUser.id}
              >
                Message
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
