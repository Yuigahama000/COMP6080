import Navbar from './components/Navbar'
import Dashboard from './components/Dashboard'
import Footer from './components/Blanko'
import { BrowserRouter, Routes } from 'react-router-dom';
import './index.css';

function App() {
    return (
        <>
        <div className = 'app-page'>
            <Navbar></Navbar>
            <main className = 'main-content'>
                <Routes>
                    <Route path = '/' element = {<Dashboard/>}/>
                    <Route path = '/blanko' element = {<Blanko/>}/>
                    <Route path = '/slido' element = {<Slido/>}/>
                </Routes>
            </main>
            <Footer/>
        </div>
        </> 
    )
}

export default App;
