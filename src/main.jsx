import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

function renderApp() {
  try {
    ReactDOM.createRoot(document.getElementById('root')).render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  } catch (err) {
    // If mounting/rendering fails, show an inline error message so the page isn't blank
    showErrorOverlay(err);
    // Also rethrow so it's visible in console
    throw err;
  }
}

function showErrorOverlay(err) {
  try {
    const root = document.getElementById('root');
    if (!root) return;
    const pre = document.createElement('pre');
    pre.style.whiteSpace = 'pre-wrap';
    pre.style.background = '#ffeeee';
    pre.style.color = '#900';
    pre.style.padding = '16px';
    pre.style.fontSize = '13px';
    pre.style.border = '1px solid #f5c6cb';
    pre.textContent = String(err && (err.stack || err.message || err));
    root.innerHTML = '';
    root.appendChild(pre);
  } catch (e) {
    // ignore
  }
}

// Global error handlers to catch runtime exceptions after mount
window.addEventListener('error', (event) => {
  showErrorOverlay(event.error || event.message || event);
});
window.addEventListener('unhandledrejection', (event) => {
  showErrorOverlay(event.reason || event);
});

renderApp();