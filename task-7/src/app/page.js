
import { Lobster } from 'next/font/google'
import { Rokkitt } from 'next/font/google'
import { Oswald } from 'next/font/google'
import { Courgette } from 'next/font/google'
import { Montserrat } from 'next/font/google'
import FrontPage from './components/FrontPage'
import Featured from './components/Featured'
import Service from './components/Service'
import HowITWorks from './components/HowITWorks'
import Providers from './components/Providers'
import Plans from './components/Plans'
import Download from './components/Download'
import TopProviders from './components/TopProviders'
import Recent from './components/Recent'
import Partners from './components/Partners'

const montserrat = Montserrat({ 
  subsets: ['latin'],
  weight: ['600'] 
})


// Fonts Families
const lobster  = Lobster ({ 
  subsets: ['latin'],
  weight: ['400'] 
})

const rokkitt  = Rokkitt ({ 
  subsets: ['latin'],
  weight: ['200'] 
})


const oswald  = Oswald ({ 
  subsets: ['latin'],
  weight: ['200'] 
})

const courgette = Courgette({ 
  subsets: ['latin'],
  weight: ['400'] 
})

// $$

export default function Home() {
  return (
    <div className='HomePage'>
      <FrontPage />
      <Featured />
      <Service />
      <HowITWorks />
      <Featured />
      <Providers />
      <Plans />
      <Download />
      <TopProviders />
      <HowITWorks />
      <Partners />

    </div>
  )
}
