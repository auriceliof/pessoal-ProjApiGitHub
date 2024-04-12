import './index.css'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import GitSearch from './pages/GitSearch/index.tsx'
import Home from './pages/Home/index.tsx'
import Header from './components/Header/index.tsx'
import GitRepo from './pages/GitRepo/index.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
    
    <BrowserRouter>
        
        <Header />

        <Routes>
            <Route path="/" element={<App />} />
            <Route index element={<Home />} />
            <Route path="git" element={<GitSearch />} />
            <Route path="gitrepo" element={<GitRepo />} />
        </Routes>
    </BrowserRouter>
)
