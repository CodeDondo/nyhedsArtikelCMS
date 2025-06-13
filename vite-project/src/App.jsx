import { Routes, Route } from "react-router-dom"
import Layout from "./layout/Layout"
import FrontPage from "./pages/Home"
import Article from "./components/articlesDisplay/ArticleDisplay"
import ArticleInfo from "./components/articleMoreInfo/ArticleInfo"

function App() {
  
  return (
    <>
    <Routes>
      <Route path="/" element={<Layout />} >
        <Route index element={<FrontPage /> } />
        <Route path="category/:category" element={<Article />} />
        <Route path="/article/:slug" element={<ArticleInfo />} />
      </Route>
    </Routes> 
    </>
  )
}

export default App
