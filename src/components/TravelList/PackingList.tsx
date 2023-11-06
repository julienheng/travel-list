// COMPONENTS
import { useState } from "react";

type Props = {
  items: {
    description: string;
    quantity: number;
    packed: boolean;
    id: number;
  }[];
  handleDeleteItem: (id: number) => void;
  onToggleItem: (id: number) => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setItems: (items: any[]) => void;
};

export default function PackingList({
  items,
  handleDeleteItem,
  onToggleItem,
  setItems,
}: Props) {
  const [sortBy, setSortBy] = useState("input");
  const sortedItems = [...items];

  if (sortBy === "description") {
    sortedItems.sort((a, b) => a.description.localeCompare(b.description));
  } else if (sortBy === "packed") {
    sortedItems.sort((a, b) => Number(a.packed) - Number(b.packed));
  }

  const handleClearList = () => {
    const confirmed = window.confirm(
      "Are you sure you want to clear the list?"
    );
    if (confirmed) setItems([]);
  };

  return (
    <div className=" bg-[#5a3e2b] py-[4rem] text-[#ffebb3] flex flex-col justify-between items-center gap-[3.2rem]">
      <ul>
        {sortedItems?.map((item) => (
          <li key={item.id} className="space-x-2">
            <input
              type="checkbox"
              checked={item.packed}
              onChange={() => onToggleItem(item.id)}
            />
            <span style={item.packed ? { textDecoration: "line-through" } : {}}>
              {item.quantity} {item.description}
            </span>
            <button onClick={() => handleDeleteItem(item.id)}>❌</button>
          </li>
        ))}
      </ul>

      {/* SORTING ITEMS */}
      <div className="uppercase space-x-3">
        <select
          className="uppercase rounded-full px-[0.8rem] py-[0.9rem] bg-[#ffebb3] text-[#5a3e2b;] text-xs font-semibold "
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button
          className="rounded-full px-[0.8rem] py-[0.9rem] bg-[#ffebb3] text-[#5a3e2b;] text-xs font-semibold"
          onClick={handleClearList}
        >
          Clear
        </button>
      </div>
    </div>
  );
}
