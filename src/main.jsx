import './style.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from './Components/Navbar/Navbar.jsx'
import Banner from './Components/Banner/Banner.jsx'
import Custom from './Components/Custom/Custom.jsx'
import Grid from './Components/Grid/Grid.jsx'
import Upcoming from './Components/Upcoming/Upcoming.jsx'
import SareeCollection from './Components/product/ProductCard.jsx'
import Bride from './Components/Bride/Bride.jsx'
import GetReady from './Components/getReady/GetReady.jsx'
import Videos from './Components/videos/Videos.jsx'
import KoskiiFooter from './Components/Ko/KoskiiFooter.jsx'
import Swiperbanner from './Components/Swiperbanner.jsx'
ReactDOM.createRoot(document.querySelector('#app')).render(
    <>
      <Navbar />
      <Banner/>
      <Custom/>
      <Grid/>
      <Upcoming/>
      <SareeCollection/>
      <Swiperbanner/>

      <Bride/>
      <GetReady/>
      <Videos/>
      <KoskiiFooter/>
      
    </>
)
