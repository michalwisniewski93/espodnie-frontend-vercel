import React from 'react'
import Header from './Header';
import Footer from './Footer';
import {Link, useNavigate} from 'react-router-dom'


const MostWanted = () => {


const navigate = useNavigate()

    const handleLogOut = () => {
       
        
        
        navigate('/admin')
        
        
        
        }

   const handleMenu = () => {
    navigate('/login')
   }



    return (
        <div className="app">
    
        <Header/>
       
       <h1>Najchętniej kupowane produkty</h1>
       <section className="topButtons">
       <button onClick={handleMenu}>Powrót do menu</button> <button onClick={handleLogOut}>Wyloguj się</button>
       </section>

 
        

        <Footer/>
    </div>
    )
}

export default MostWanted;