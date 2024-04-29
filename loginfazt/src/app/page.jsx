import Image from "next/image";

export default function Home() {
  return (
    <section className="h-[calc(100vh-7rem)] flex justify-center items-center">
        <div>
            <h1 className="text-white text-5xl hover:text-gray-300">
              Home
            </h1>
        </div>
    </section>
  );
}
