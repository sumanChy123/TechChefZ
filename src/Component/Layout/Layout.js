import Navbar from "./Navbar/NavBar"

function Layout(props) {
    return (
        <>
            <header>
                <Navbar></Navbar>
            </header>
            <main>
                {props.children}
            </main>
        </>

    )
}
export default Layout