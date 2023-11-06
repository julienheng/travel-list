type Props = {
  items: {
    description: string;
    quantity: number;
    packed: boolean;
    id: number;
  }[];
};

export default function Stats({ items }: Props) {
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);

  if (!items.length) return (
    <footer className="bg-[#76c7ad] text-center font-bold py-[2rem]">
      <em>Start adding some items to your packing list!</em>
    </footer>
  )

  return (
    <footer className="bg-[#76c7ad] text-center font-bold py-[2rem]">
      <em>
        {percentage === 100
          ? "You got everything! Ready to go!"
          : `You have ${numItems} items on your list, and you already packed
        ${numPacked} (${percentage}%)`}
      </em>
    </footer>
  );
}
