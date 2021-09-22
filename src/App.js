import { BrowserRouter as Router, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Login from "./Pages/Login";
import ChatLobby from "./Pages/ChatLobby";
import MessageRoom from "./Pages/MessageRoom";

function App() {
  // const location = useLocation();
  return (
    <div className="App">
      <AnimatePresence>
        <Router>
          <Route path="/" component={Login} exact />
          <Route path="/chatlobby" component={ChatLobby} exact />
          <Route path="/chatroom/:id?" component={MessageRoom} exact />
        </Router>
      </AnimatePresence>
    </div>
  );
}

export default App;
