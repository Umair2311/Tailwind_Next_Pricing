import Features from '@/Components/Features'
import Header from '@/Components/Header'
import Pricing from '@/Components/Pricing'
import styles from './page.module.css'


export default function Home() {
  return (
    <main>
      <Header />
      <Pricing />
      <Features />
    </main>
  )
}
