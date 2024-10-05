// import { render } from "react-dom";

// import App from "./App";

// const rootElement = document.getElementById("root");
// render(<App />, rootElement);
import { createRoot } from 'react-dom/client'
import App from './App'


createRoot(document.getElementById('root')!).render(
  // <StrictMode>
    <App />
  // </StrictMode>
  ,
)
