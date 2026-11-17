import Link from "next/link";
import CartCount from "./CartCount";

const Navbar = () => {
  return (
    <>
      <h3>NextCommerce</h3>
      <ul>
        <li>
            <CartCount />
        </li>
      </ul>
    </>
  );
};

export default Navbar;
