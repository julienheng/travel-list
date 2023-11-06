// COMPONENTS
import FriendList from "./FriendList";

export default function EatAndSplit() {
  return (
    <div className="min-h-[66vh] grid grid-cols-[34rem_44rem] gap-x-[4rem] items-start">
      <div className="flex flex-col">
        <FriendList />
      </div>
    </div>
  );
}
