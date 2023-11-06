import { initialFriends } from "../../../utils/friends";

// COMPONENTS
import Friend from "./Friend";

export default function FriendList() {
  return (
    <ul className="">
      {initialFriends.map((friend) => (
        <Friend key={friend.id} friend={friend} />
      ))}
    </ul>
  );
}
