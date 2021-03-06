import { FaRegMoon, FaRegSun } from "react-icons/fa";
import Toggle from "react-toggle";
import "react-toggle/style.css";

const DarkModeToggle = ({ darkMode }) => {
  return (
    <div className="flex flex-row-reverse py-4 px-8">
      <label className="flex items-center dark:text-white">
        <span className="pr-1">
          <FaRegSun></FaRegSun>
        </span>
        <Toggle
          defaultChecked={false}
          icons={false}
          onChange={() => darkMode()}
        />
        <span className="pl-1">
          <FaRegMoon></FaRegMoon>
        </span>
      </label>
    </div>
  );
};

export default DarkModeToggle;
