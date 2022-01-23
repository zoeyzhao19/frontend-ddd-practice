import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Auth } from "./modules/auth/ui/auth";
import { ProductList } from "./modules/products/ui/list";
import { User } from "./modules/auth/ui/user";
// import { Front } from "./ui/Front";

import { Header } from "./components/Header";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/auth" element={<Auth />} />
          <Route path="/user" element={<User />} />
          <Route path="/" element={<ProductList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
