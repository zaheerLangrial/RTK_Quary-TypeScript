import { Link } from "react-router-dom";

type headerProps = {
  isActive?: boolean;
};
function Header({ isActive }: headerProps) {
  return (
    <div className="flex justify-between py-3 items-center px-5 bg-gray-300">
      <div className="flex gap-5 items-center">
        <h1 className="text-3xl">Crud application</h1>
        <Link to={"/creat"} className={`${isActive ? "underline" : ""}`}>
          Add Student
        </Link>
      </div>
      <div>
        <input
          type="search"
          className="border outline-none px-1"
          placeholder="Search"
        />
      </div>
    </div>
  );
}

export default Header;
