import BioSocialIcons from "./BioSocialIcons";

const BioText = () => {
  return (
    <>
      <div className="p-4">
        <div className="bg-secondary pb-1 pr-1 rounded-md">
          <div className="bg-primary p-1 rounded">
            <div className="bg-white p-4">
              <h1 className="text-2xl">
                👋 Hi {"I'm"} <span className="font-bold">Jorge Alvarado</span>
              </h1>
              <p className="text-xl pt-4">
                {"I'm a software engineer from Chile 🇨🇱."}
              </p>
              <p className="text-xl">
                {
                  "I've been working for big tech companies for the past 3 years 🧑‍💻."
                }
              </p>
              <p className="text-xl">
                {"I like: Python 🐍, FastAPI, Django, Tailwind and Vim ❤️."}
              </p>

              <p className="text-xl pt-4">
                I love to travel 🛩, I like to try new beers 🍻 (100 % amateur)
                and some people say that I make good pizzas 🍕.
              </p>
              <BioSocialIcons></BioSocialIcons>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BioText;
