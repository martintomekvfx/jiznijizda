import { HashRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PresentationPage from './pages/PresentationPage';

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/prezentace" element={<PresentationPage />} />
      </Routes>
    </HashRouter>
  );
}
