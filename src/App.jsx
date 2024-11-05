import './assets/css/style.css'
import React from "react";
import { Routes ,Route } from 'react-router-dom';
import ContactPage from "./pages/Contact";


function App() {
  return (
    <Routes>
      <div>
        <Switch>
          {/* <Route exact path="/" component={HomePage} /> */}
          <Route path="/Contact" element={ContactPage} />
        </Switch>
      </div>
    </Routes>
  );
}

export default App;