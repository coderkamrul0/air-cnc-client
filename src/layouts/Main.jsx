import React from "react"
import NavBar from "../components/Shared/NavBar/NavBar"
import { Outlet } from "react-router-dom"

const Main = () => {
  return (
    <div>
      <NavBar/>
      <div className="pt-20 pb-20">
      <Outlet/>
      </div>
    </div>
  )
}

export default Main
