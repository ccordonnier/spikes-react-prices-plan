import { PropsWithChildren } from 'react';

type ButtonType = {
  className? : string,
  handleClick?: (...args: any[]) => void, // La prop peut être une fonction qui prend n'importe quel nombre d'arguments et peut ne pas exister
}

const SecondaryButton = ({className, handleClick, children}: PropsWithChildren<ButtonType>) => {
  return (
    <button className={`${className} rounded-lg border bg-transparent py-2`} onClick={() => handleClick && handleClick()}>
      {children}
    </button>
  );
};

export default SecondaryButton;