// COMPONENTS
// import Item from "./Item";

type Props = {
  items: {
    description: string;
    quantity: number;
    packed: boolean;
    id: number;
  }[];
  handleDeleteItem: (id: number) => void;
};

export default function PackingList({ items, handleDeleteItem }: Props) {
  return (
    <div className=" bg-[#5a3e2b] py-[4rem] text-[#ffebb3] flex flex-col justify-between items-center gap-[3.2rem]">
      <ul>
        {items.map((item) => (
          <li>
            <input type="checkbox" value="" />
            <span style={item.packed ? { textDecoration: "line-through" } : {}}>
              {item.quantity} {item.description}
            </span>
            <button onClick={() => handleDeleteItem(item.id)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
