import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './Home'
import { Balance } from './Balance'
import { Bloque } from './Bloque'
import {Tx} from './Tx'
import { QueryClientProvider, QueryClient } from 'react-query'
const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}>
          <Route path="balance/:address" element={<Balance/>}></Route>
          <Route path="tx/:tx" element={<Tx/>}></Route>
          <Route path="bloque/:bloque" element={<Bloque/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </QueryClientProvider>
)
