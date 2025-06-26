import type { FC } from "react";
import type { User } from "../../store/user.store.ts";

export interface UserCardProps {
  user: User;
}

const UserCard: FC<UserCardProps> = ({ user }) => {
  return (
    <div className="flex gap-2.5 items-center justify-center">
      <img
        className="w-10 h-auto rounded-full"
        src={user.profile}
        alt={user.name}
      />
      <div className="font-semibold">{user.name}</div>
    </div>
  );
};

export default UserCard;
