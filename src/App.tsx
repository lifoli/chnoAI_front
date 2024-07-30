// src/App.tsx

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
// import Home from "./pages/Home";
// import Dashboard from "./pages/Dashboard";
// import Kanban from "./pages/Kanban";
// import Inbox from "./pages/Inbox";
// import Users from "./pages/Users";
// import Products from "./pages/Products";
// import SignIn from "./pages/SignIn";
// import SignUp from "./pages/SignUp";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/kanban" element={<Kanban />} />
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

// import { DarkThemeToggle } from "flowbite-react";

// function App() {
//   return (
//     <main className="flex min-h-screen items-center justify-center gap-2 dark:bg-gray-800">
//       <h1 className="text-2xl dark:text-white">Flowbite React + Vite</h1>
//       <DarkThemeToggle />
//     </main>
//   );
// }

// export default App;
