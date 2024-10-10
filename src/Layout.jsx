import {Link, Outlet } from 'react-router-dom';


const Layout=()=>{
    return(
        <>
        <Link to="home">Home</Link> |
        <Link to="insert">Insert Data</Link> | 
        <Link to="display">Display</Link> 
        <hr size="4" color="red"/>
            <Outlet/>
        <hr size="4" color="red"/>
        </>
    )
}
export default Layout;