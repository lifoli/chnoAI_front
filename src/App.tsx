// src/App.tsx

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import { SignInModal } from "./components/modals/SignInModal";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/dashboard" element={<Dashboard />} /> */}
        {/* <Route path="/kanban" element={<Kanban />} />
        <Route path="/inbox" element={<Inbox />} />
        <Route path="/users" element={<Users />} />
        <Route path="/products" element={<Products />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
