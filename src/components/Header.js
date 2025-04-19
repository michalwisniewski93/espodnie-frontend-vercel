import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { FaShoppingCart } from 'react-icons/fa';
import {Link, useNavigate} from 'react-router-dom'
import {useSelector} from 'react-redux'

const Header = () => {

    const boughtProducts = useSelector(state => state.boughtProducts)
    const boughtProductLength = boughtProducts.length
    const navigate = useNavigate()
    let [amount, setAmount] = useState()


    const handleGoToBasket = () => {
        navigate('/basket')
    }


    const [receivedData, setReceivedData] = useState([])

    useEffect(() => {
        const total = boughtProducts.reduce((sum, product) => sum + product.price, 0);
        setAmount(total); 
      }, [boughtProducts]);

    useEffect(() => {
        axios.get('https://espodnie-backend-vercel.vercel.app/shopdata')
        .then((response) => setReceivedData(response.data))
        .catch((err) => console.log('error fetching shop data, error: ' + err))
    })




    return(
        <>
        
        <header className="header">
            
      
        {receivedData.map(rd => <p className="header_title" key={rd._id}><a href="https://espodnie-frontend-vercel.vercel.app/">{rd.shoptitle}</a></p>)}
        <div className="basketWidget" onClick={handleGoToBasket}>
        <span className="numberOfProducts">{boughtProductLength}</span> <FaShoppingCart size={24} color="black" />  <span className="orderAmount">{amount} PLN</span>
        </div>
        </header>
        
        </>
    )
}
export default Header;
