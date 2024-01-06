import React from 'react'
import { Outlet, useNavigation } from 'react-router-dom'
import NavbarMain from '../components/NavbarMain'

export default function HomeLayout() {
  const navigation = useNavigation();
  const isPageLoading = navigation.state === 'loading';
   return (
    <>
    <NavbarMain/>
    <div className="page">
      {isPageLoading ? <div style={{margin: '0 auto'}} className='loading'></div> : <Outlet/>}
    </div>
    </>
  )
}
