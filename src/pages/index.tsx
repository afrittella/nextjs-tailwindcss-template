import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Next template</title>
        <meta name='description' content='Next template with Typescript and Tailwind Css' />
        <meta name='author' content='Andrea Frittella <info@andreafrittella.com>' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <header className='bg-gray-400'>
        Page header
      </header>

      <main className='bg-gray-200'>
        Main content
      </main>

      <footer className='bg-gray-400'>
        Footer
      </footer>
    </div>
  )
}

export default Home
