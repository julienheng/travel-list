type Props = {
  friend: {
    id: number;
    name: string;
    image: string;
    balance: number;
  };
};

export default function Friend({ friend }: Props) {
  return (
    <li className="grid grid-cols-[4.8rem_1fr_auto] items-center">
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>
      {friend.balance < 0 && (
        <p className="text-red-500">
          You owe {friend.name} {Math.abs(friend.balance)}
        </p>
      )}
      {friend.balance > 0 && (
        <p className="text-green-500">
          {friend.name} owes you {Math.abs(friend.balance)}
        </p>
      )}
      {friend.balance === 0 && (
        <p className="text-yellow-500">You & {friend.name} are even</p>
      )}
      <button className="bg-[#ffa94d] text-[#343a40] px-2 py-2 border-none rounded-md font-semibold cursor-pointer transition-all ">Select</button>
    </li>
  );
}
