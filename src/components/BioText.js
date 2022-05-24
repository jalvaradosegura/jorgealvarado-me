import BioSocialIcons from "./BioSocialIcons"

const EmailSVG = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
    className="h-8 w-8 text-primary ml-2 hover:text-secondary cursor-pointer"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      stroke-width="2"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      />
    </svg>
  )
}

const BioText = () => {
  return (
    <div className="dark:bg-gray-700 dark:text-white p-8">
      <h1 className="text-2xl flex flex-wrap items-center">
        👋 Hi {"I'm"}{" "}
        <span className="bg-gradient-to-r from-primary dark:via-purple-300 to-secondary text-transparent bg-clip-text font-bold ml-2">
          Jorge Alvarado
        </span>
        <a href="mailto: alvaradosegurajorge@gmail.com">
          <EmailSVG />
        </a>
      </h1>

      <p className="text-xl pt-4">{"I'm"} a software engineer from Chile. 🇨🇱</p>

      <p className="text-xl pt-4">
        I have created a few open source libraries, one with over 15k+ downloads
        and I have contributed to some open source projects like FastAPI. 🧑‍💻
      </p>

      <p className="text-xl pt-4">
        {
          "My current preferences: Python, FastAPI, Django, React, Tailwind and Vim. ❤️"
        }
      </p>

      <p className="text-xl pt-4">
        I love to travel, to try new beers, pizzas, to make pizzas, my family
        and to learn. 🛩🍕🍻❤️
      </p>

      <BioSocialIcons></BioSocialIcons>
    </div>
  )
}

export default BioText
