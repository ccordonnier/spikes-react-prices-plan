import React from 'react';

const Badge = ({children}) => {
  return (
    <div className='text-xs border rounded-lg py-1 px-2 w-fit ml-3 bg-white/10'>
      {children}
    </div>
  );
};

export default Badge;