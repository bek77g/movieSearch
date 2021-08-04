import React from 'react'
import Header from './components/header/Header.js'
import Main from './components/main/Main.js'
import Footer from './components/footer/Footer.js'
import "./App.css"

export class App extends React.Component {
    render() {
        return (
            <>
                <Header/>
                <Main/>
                <Footer/>
            </>
        )
    }
}

export default App