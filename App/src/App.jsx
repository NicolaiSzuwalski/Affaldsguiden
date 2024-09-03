import { Navbar } from './components/Navbar/Navbar'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { Main } from './components/Main/Main'
import { AppRouter } from './components/AppRouter/AppRouter'
import './App.scss'


export const App = () => {
  return (
    <>
    <section className='MainSection'>
      <Header/>
      <Navbar/>
      <Main>
        <AppRouter></AppRouter>
      </Main>
    </section>
    <Footer/>
    
    
    </>
  )
}
