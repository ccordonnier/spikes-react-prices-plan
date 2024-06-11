import { FC } from "react";

type propsType = {
 size: number,
}

const DiamondIcon: FC<propsType> = ({size}: propsType) => {
  return (
    <svg width={size} height={size} viewBox="0 0 47 47" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="0.0566406" y="0.0566978" width="46.2793" height="46.2793" rx="11.5698" fill="white"/>
    <path d="M13.4034 19.8908H32.9894M17.7406 13.3351L23.1964 19.8909L28.6614 13.3397M32.7674 19.3719L28.9675 13.6721C28.8718 13.5285 28.824 13.4568 28.7608 13.4048C28.7048 13.3588 28.6404 13.3243 28.5711 13.3033C28.4928 13.2795 28.4065 13.2795 28.2341 13.2795H18.1587C17.9862 13.2795 17.9 13.2795 17.8217 13.3033C17.7524 13.3243 17.6879 13.3588 17.632 13.4048C17.5688 13.4568 17.5209 13.5285 17.4252 13.6721L13.6253 19.3719C13.5008 19.5588 13.4385 19.6522 13.4162 19.7527C13.3965 19.8414 13.399 19.9337 13.4236 20.0212C13.4515 20.1203 13.5189 20.2102 13.6536 20.3898L22.4912 32.1732C22.7304 32.4922 22.85 32.6517 22.9967 32.7087C23.1251 32.7587 23.2676 32.7587 23.3961 32.7087C23.5427 32.6517 23.6624 32.4922 23.9016 32.1732L32.7392 20.3898C32.8739 20.2102 32.9413 20.1203 32.9691 20.0212C32.9937 19.9337 32.9963 19.8414 32.9766 19.7527C32.9543 19.6522 32.892 19.5588 32.7674 19.3719Z" stroke="#1B223C" stroke-width="1.65283" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>    
  );
};

export default DiamondIcon;