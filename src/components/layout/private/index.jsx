import { Fragment } from "react"
import { Outlet } from "react-router-dom"


const AdminLayout = () => {
  return (
    <Fragment>
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus sunt nobis possimus ut, maxime quibusdam animi est voluptatum atque in amet aspernatur perspiciatis debitis eum illum tempore officiis maiores! Qui.</h1>
        <Outlet />
    </Fragment>
  )
}

export default AdminLayout