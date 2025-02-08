
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h1>My App</h1>
      <Image src="/my-image.jpg" alt="My Image" width={500} height={500} />
    </div>
  );
}
