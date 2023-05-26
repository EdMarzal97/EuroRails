import Image from 'next/image'
import IntroductionPage from './intro/languagepage'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <IntroductionPage></IntroductionPage>
    </main>
  )
}
