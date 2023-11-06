type Props = {
  item: {
    description: string;
    quantity: number;
    packed: boolean;
    id: number;
  };
};

export default function Item({ item }: Props) {
  return (
    <li>
      <input type="checkbox" value="" />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button>❌</button>
    </li>
  );
}
