import { FC, PropsWithChildren } from "react";

const Badge: FC<PropsWithChildren> = ({children}) => {
  return (
    <div className='text-xs border rounded-lg py-1 px-2 w-fit ml-3 bg-white/10'>
      {children}
    </div>
  );
};

export default Badge;