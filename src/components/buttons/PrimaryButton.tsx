import { Dispatch, PropsWithChildren, SetStateAction } from 'react';

type ButtonType = {
  className?: "string",
  setOffer: Dispatch<SetStateAction<"monthly" | "annualy">>,
  offer: "monthly" | "annualy"
}

const PrimaryButton = ({className, setOffer, offer, children}: PropsWithChildren<ButtonType>) => {
  
  return (
    <button className={`${className} rounded-lg border bg-button-radial-gradient-primary py-2`} onClick={()=>setOffer(offer)}>
      {children}
    </button>
  );
};

export default PrimaryButton;