import Link from "next/link";
import CartCount from "./CartCount";

const Navbar = () => {
  return (
    <>
      <div className="flex justify-between">
        {" "}
        <h3>NextCommerce</h3>
        <ul>
          <li>
            <CartCount />
          </li>
        </ul>
      </div>
      <hr />
    </>
  );
};

export default Navbar;
