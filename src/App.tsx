import { useEffect } from 'react';
import { ScrollRestoration } from './components/layout/ScrollRestoration';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Home } from './pages/Home';
import { Work } from './pages/Work';
import { WorkDetail } from './pages/WorkDetail';
import { Blog } from './pages/Blog';
import { BlogDetail } from './pages/BlogDetail';
import { TagPage } from './pages/Tag';
import { About } from './pages/About';
import { NotFound } from './pages/NotFound';

function App() {
  useEffect(() => {
    // Update <html> lang/theme class on mount (in case hot-reload drifted)
    document.documentElement.classList.add('antialiased');
  }, []);

  return (
    <BrowserRouter>
      <ScrollRestoration />
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/work" element={<Work />} />
            <Route path="/work/:slug" element={<WorkDetail />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogDetail />} />
            <Route path="/tags/:tag" element={<TagPage />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
