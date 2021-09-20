import BioText from "./BioText";
import ProfilePicture from "./ProfilePicture";

const BioContainer = () => {
  return (
    <div className="flex flex-col items-center justify-center pt-12 px-4 lg:flex-row">
      <ProfilePicture></ProfilePicture>
      <BioText>
    </BioText>
    </div>
  );
};

export default BioContainer;
