import React from 'react'
import Navbar from '../components/Navbar'
import Contact from './StaticTabs/Contact'
import Docs from './StaticTabs/Docs'
import Home from './StaticTabs/Home'

export default function Static(props) {

  return (
    <Navbar 
      tab1={<Home />}
      tab2={<Docs />}
      tab3={<Contact />}
    />
  )
}
