import { useState } from "react";

export default function Form() {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    
    if (!description) return // NOTHING RETURNED
    
    const newItem = { description, quantity, packed: false, id: Date.now() }

    setDescription("")
    setQuantity(1)
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-[#e5771f] py-[2rem] flex justify-center items-center gap-[0.8rem]">
      <h3 className="text-[1rem]">What do you need for your 😍 trip?</h3>
      <select
        className="p-2 rounded-full"
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item ..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="py-2 px-4 rounded-full"
      />
      <button className="uppercase bg-[#76c7ad] rounded-full py-2 px-6">Add</button>
    </form>
  );
}
