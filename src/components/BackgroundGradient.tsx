import { FC } from "react";

type propsType = {
  className: string, 
}

const BackgroundGradient:FC<propsType>= ({className}) => {
  return (
    <div className={`${className} absolute w-[50px] height-full bg-sky-500`}>
      
    </div>
  );
};

export default BackgroundGradient;