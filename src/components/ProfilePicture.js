import profile_img from "./../me.jpg"
import profile_img_dark from "./../me2.jpg"

const ProfilePicture = ({ isDarkTheme }) => {
  return (
    <>
      {isDarkTheme ? (
        <img className="h-80 w-80 rounded-full" src={profile_img_dark} alt="me" />
      ) : (
        <img className="h-80 w-80 rounded-full" src={profile_img} alt="me" />
      )}
    </>
  )
}

export default ProfilePicture
