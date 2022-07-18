import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/Home/HomePage";

function App() {
  return (
    <div className="App">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/test" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

/*
 */

/*
<HashRouter basename={process.env.PUBLIC_URL}>
<Route
  path="/practice-react-build"
  exact={true}
  element={<HomePage />}
/>
<Route path="/test" element={<TestPage />} />
</HashRouter>
*/
