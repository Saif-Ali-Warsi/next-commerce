import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <h3>NextCommerce</h3>
      <ul>
        <li>
          <Link href="/cart">Cart</Link>
        </li>
      </ul>
    </>
  );
};

export default Navbar;
