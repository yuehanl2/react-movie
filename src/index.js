import React from 'react'
import { createRoot } from 'react-dom/client';
import App from './sortTemp/sortBasic'




//only work for react 18
const container = document.getElementById("root");
const root = createRoot(container);

root.render(<App />)
