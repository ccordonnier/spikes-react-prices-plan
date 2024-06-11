import { useState } from 'react'
import './App.css'
import Card from './components/Card';
import PrimaryButton from './components/buttons/PrimaryButton';
import SecondaryButton from './components/buttons/SecondaryButton';
import BackgroundGradient from './components/BackgroundGradient';

const CardContent = [
  {
    name: "Essential",
    icon: "target",
    monthlyPrice: 179,
    transition: 0,
    AdvantageList: [
      "+2500 vues/mois",
      "+60 clics sur votre site",
      "+15 demandes d'itinéraires",
      "Plus de visibilité sur Google",
      "Réponse aux avis Google inclus",
    ]
  },
  {
    name: "Ultime",
    type: "primary",
    icon: "Diamond",
    badge: "Best offer",
    monthlyPrice: 319,
    transition: 1,
    AdvantageList: [
      "+6500 vues/mois",
      "+200 clics sur votre site",
      "+40 appels/mois",
      "+40 demandes d'itinéraires",
      "Plus de visibilité sur Google",
      "Réponse aux avis Google inclus",
      "1 shooting",
      "QR code personnalisé",
    ]
  },
  {
    name: "Premium",
    icon: "target",
    monthlyPrice: 439,
    transition: 0.5,
    AdvantageList: [
      "+11 000 vues/mois",
      "+500 clics sur votre site",
      "+80 appels/mois",
      "+80 demandes d'itinéraires",
      "Plus de visibilité sur Google",
      "Réponde aux avis Google inclus",
      "1 shooting",
    ]
  }
]

function App() {
  const [offer, setOffer] = useState<"monthly" | "annualy">("monthly")

  return (
    <>
      <div className='container flex flex-col items-center'>
        <BackgroundGradient className={"left-[20vw] top-[-55vh] h-[200vh] -rotate-45 z-0 blur-[100px]"} />
        <BackgroundGradient className={"left-[60vw] top-[-55vh] h-[200vh] -rotate-45 z-0 blur-[100px]"} />
        <div className='z-10 flex flex-col items-center mb-20'>
          <div className='border rounded-full w-fit px-8 py-2 text-xs item-center mb-4 mt-4 border-blue-transparent text-sky-400/90'>Nos offres</div>
          <h2 className='text-5xl font-bold leading-[4rem]'>Des prix en accord avec <br /><span className='text-gradient'>notre vision</span></h2>
          <div className='my-4 flex gap-4'>
            {offer === "monthly" ?
              <>
                <PrimaryButton className='py-2 w-[330px] border-white/40' setOffer={setOffer} offer={"monthly"}>Paiement Mensuel</PrimaryButton>
                <SecondaryButton className='py-2 w-[330px] border-white/40' setOffer={setOffer} offer={"annualy"}>Paiement Annuel (-20%)</SecondaryButton>
              </>
              :
              <>
                <SecondaryButton className='py-2 w-[330px] border-white/40' setOffer={setOffer} offer={"monthly"}>Paiement Mensuel</SecondaryButton>
                <PrimaryButton className='py-2 w-[330px] border-white/40' setOffer={setOffer} offer={"annualy"}>Paiement Annuel (-20%)</PrimaryButton>
              </>
            }
          </div>
          <div className='offers grid grid-cols-3 gap-6 mt-8'>
            {CardContent.map(content => {
              return <Card key={content.name} content={content} offer={offer} />
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default App
