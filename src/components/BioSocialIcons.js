import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const BioSocialIcons = () => {
  return (
    <div className="flex justify-center lg:justify-start pt-4 text-3xl">
      <div className="transition duration-500 ease-in-out hover:text-primary transform hover:-translate-y-1 hover:scale-110">
        <a href="https://github.com/jalvaradosegura" target="_blank">
          <FaGithub></FaGithub>
        </a>
      </div>
      <div className="px-8 transition duration-500 ease-in-out hover:text-primary transform hover:-translate-y-1 hover:scale-110">
        <a href="https://www.linkedin.com/in/j-alvarado-segura/" target="_blank">
          <FaLinkedin></FaLinkedin>
        </a>
      </div>
      <div className="transition duration-500 ease-in-out hover:text-primary transform hover:-translate-y-1 hover:scale-110">
        <a href="https://www.instagram.com/jorgealvarado__/" target="_blank">
          <FaInstagram></FaInstagram>
        </a>
      </div>
    </div>
  );
};

export default BioSocialIcons;
