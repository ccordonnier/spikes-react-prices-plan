import { PropsWithChildren } from 'react';

type ButtonType = {
  className? : string
}

const SecondaryButton = ({className, setOffer, offer, children}: PropsWithChildren<ButtonType>) => {
  return (
    <button className={`${className} rounded-lg border bg-transparent py-2`} onClick={()=>setOffer(offer)}>
      {children}
    </button>
  );
};

export default SecondaryButton;