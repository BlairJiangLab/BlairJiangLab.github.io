import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { MDXProvider } from '@mdx-js/react';
import App from './App';
import './styles/globals.css';
import './styles/prose.css';

// MDX components — extend this map to override default HTML elements
const mdxComponents = {
  // You can override h1/h2 etc. here if you want to add IDs for TOC, etc.
};

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MDXProvider components={mdxComponents}>
      <App />
    </MDXProvider>
  </StrictMode>
);
