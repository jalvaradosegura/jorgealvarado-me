import profile_img from './../me.jpg'

const ProfilePicture = () => {
  return (
    <img className="h-80 w-80 rounded-full" src={profile_img} alt="me"/>
  )
};

export default ProfilePicture;
