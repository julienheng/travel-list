/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";

// COMPONENTS
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";

export default function TravelList() {
  const [items, setItems] = useState<any[]>([]);

  function handleAddItems(item: any) {
    setItems((prevItems) => [item, ...prevItems]);
  }

  const handleDeleteItem = (id: number) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const onToggleItem = (id: number) => {
    setItems((prevItems) =>
      prevItems.map((items) =>
        items.id === id ? { ...items, packed: !items.packed } : items
      )
    );
  };
  return (
    <div className="w-screen min-h-screen grid grid-rows-[auto,auto,1fr,auto]">
      <Logo />
      <Form handleAddItems={handleAddItems} />
      <PackingList
        items={items}
        handleDeleteItem={handleDeleteItem}
        onToggleItem={onToggleItem}
        setItems={setItems}
      />
      <Stats items={items} />
    </div>
  );
}
