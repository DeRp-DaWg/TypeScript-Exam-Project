import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

interface Props {}

export default function Root({}: Props) {
  return (
    <div>
      <Navbar/>
      <Outlet/>
    </div>
  )
}