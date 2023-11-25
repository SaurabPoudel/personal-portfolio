import Link from "next/link";

const Menu = () => {
  return (
    <section className="flex justify-center">
      <div className="pt-10 px-8 md:max-w-6xl w-full text-lime-500">
        Checkout my blog ->
        <Link href="https://saurabblog.vercel.app" target="_blank" className="px-5">saurabblog</Link>
      </div>
    </section>
  );
};

export default Menu;
