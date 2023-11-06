import { Button } from "@nextui-org/react";
import { Link } from "@nextui-org/react";

export default function Home() {
  return (
    <div className="space-x-2">
      <Link href="/travellist">
        <Button color="primary">Travel List</Button>
      </Link>
      <Link href="/eatandsplit">
        <Button color="primary">Eat N' Split</Button>
      </Link>
    </div>
  );
}
