import styles from './App.module.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { HomePage, SignInPage, RegisterPage, DetailPage, SearchPage } from './pages'

function App() {
  return (
    <div className={styles.App}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="signIn" element={<SignInPage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="detail/:touristRouteId" element={<DetailPage />} />
          <Route path="search/:keywords" element={<SearchPage />} />
          <Route path="search/" element={<SearchPage />} />
          <Route path="*" element={<h1>404 Not Found 页面去火星了！</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
