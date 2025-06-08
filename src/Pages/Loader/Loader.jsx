import Lottie from "lottie-react";
import loadingAnimation from "../../assets/Annimations/spiner.json"; 

const Loader = () => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-white dark:bg-gray-900">
      <Lottie
        animationData={loadingAnimation}
        loop
        autoplay
        className="w-[200px] h-[200px]"
      />
    </div>
  );
};

export default Loader;
