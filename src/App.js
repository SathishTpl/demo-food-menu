import React, { useState } from "react";
import { BrowserRouter,Routes ,Route} from 'react-router-dom';
import './assets/_style.scss'
import MenuTemplate from "./components/MenuTemplate/MenuTemplate";
import Templates from "./components/Templates/Templates";

function App() {

  const [stateFromHome, setStateFromHome] = useState([]);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Templates setStateFromHome={setStateFromHome} stateFromHome={stateFromHome} />} />
          <Route path="/template" element={<MenuTemplate stateFromHome={stateFromHome} setStateFromHome={setStateFromHome} />} />
          {/* <Route path='/html' element={<PreviewCopy stateFromHome={stateFromHome} />} />
          <Route path='/style' element={<Styletemplate stateFromHome={stateFromHome} setStateFromHome={setStateFromHome} />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
