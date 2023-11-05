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
  onToggleItem: (id: number) => void;
};

export default function PackingList({ items, handleDeleteItem, onToggleItem }: Props) {
  return (
    <div className=" bg-[#5a3e2b] py-[4rem] text-[#ffebb3] flex flex-col justify-between items-center gap-[3.2rem]">
      <ul>
        {items.map((item) => (
          <li key={item.id} className="space-x-2">
            <input type="checkbox" checked={item.packed} onChange={() => onToggleItem(item.id)} />
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
