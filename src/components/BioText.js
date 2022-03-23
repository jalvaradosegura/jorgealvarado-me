import BioSocialIcons from "./BioSocialIcons";

const BioText = () => {
  return (
    <div className="dark:bg-gray-700 dark:text-white p-8">
      <h1 className="text-2xl">
        👋 Hi {"I'm"}{" "}
        <span className="bg-gradient-to-r from-primary dark:via-purple-300 to-secondary text-transparent bg-clip-text font-bold">
          Jorge Alvarado
        </span>
      </h1>

      <p className="text-xl pt-4">{"I'm"} a software engineer from Chile. 🇨🇱</p>

      <p className="text-xl pt-4">
    	I have created a few open source libraries, one with over 13k+ downloads and I have contributed to some open source projects like FastAPI. 🧑‍💻
      </p>

      <p className="text-xl pt-4">
        {"My current preferences: Python, FastAPI, Django, React, Tailwind and Vim. ❤️"}
      </p>

      <p className="text-xl pt-4">
        I love to travel, I like to try new beers (100 % amateur) and some
        people say that I make good pizzas. 🛩 🍻 🍕
      </p>

      <BioSocialIcons></BioSocialIcons>
    </div>
  );
};

export default BioText;
