import Typical from "react-typical"

const AnimatedText = ({ prevText }) => {
  return (
    <>
      I love:{" "}
      <Typical
        loop={Infinity}
        wrapper="span"
        steps={[
	  "to travel 🛩",
          1500,
	  "to try new beers 🍻",
          1500,
	  "pizza 🍕",
          1500,
	  "to make pizza 🍕🍕",
          1500,
	  "my family ❤️",
          1500,
	  "to learn 👨‍🎓",
          1500,
        ]}
        className=""
      />
    </>
  )
}

export default AnimatedText
