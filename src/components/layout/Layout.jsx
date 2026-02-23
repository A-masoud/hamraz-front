import Footer from "./Footer/Footer"
import Header from "./Header/Header"
export function Layout ({children}){
    return(
        <div className="max-w-6xl mx-auto">
            <Header/>
            {children}
            <Footer/>
        </div>
    )
}