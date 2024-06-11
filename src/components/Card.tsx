import { FC, PropsWithChildren } from 'react';
import PrimaryButton from './buttons/PrimaryButton';
import SecondaryButton from './buttons/SecondaryButton';
import TargetIcon from './icons/TargetIcon';
import DiamondIcon from './icons/DiamondIcon';
import Badge from './Badge';
import { motion } from "framer-motion"


type CardType = {
  content: {
    name: string,
    type?: "primary",
    badge?: string,
    transition?: number, 
    monthlyPrice: number,
    AdvantageList: string[],
  },
  offer: "monthly" | "annualy",
}

const Card: FC<CardType> = ({ content, offer }: PropsWithChildren<CardType>) => {
  const { name, type, transition,  monthlyPrice, AdvantageList } = content;
  const annualyPrice = Math.floor(monthlyPrice-monthlyPrice*20/100);
  
  return (
    <motion.div
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay: transition, duration:0.5 }} >
    <div className={`${type} card rounded-2xl border p-8 text-left text-base bg-card-radial-gradient-primary relative h-[90%]`}>
      <i className='mt-3'>{type == "primary" ? <DiamondIcon size="50" /> : <TargetIcon size={44} />}</i>
      <div className='mt-3 flex items-center'><h2 className='text-3xl'>{name}</h2>{type === "primary" && <Badge>Best Offer</Badge> }</div>
      { offer === "annualy" && <div className='absolute line-through animate__animated animate__slideInUp'>${monthlyPrice}</div>}
      <div className='mt-4 text-base'><span className='price text-4xl text-bold'>${offer === "monthly" ? monthlyPrice : annualyPrice}</span> /month</div>
      <div className='separator my-3'></div>
      <div className='mb-20'>
        <ul className='leading-8 text-base'>
          {AdvantageList.map(Advantage => {
            return <li className='text-base'>{Advantage}</li>
          })}
        </ul>
      </div>
      <div className='absolute bottom-8 w-[80%] overflow-hidden'>
        {type === "primary" ?
          <PrimaryButton className="w-full brighten" type={type}>Je m'abonne</PrimaryButton>
          :
          <SecondaryButton className="w-full" type={type}>Je m'abonne</SecondaryButton>
        }
      </div>
    </div>
    </motion.div>
  );
};

export default Card;