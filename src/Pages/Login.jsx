import { motion } from "framer-motion";
import { pageStyle, pageTransition, pageVariants } from "../motion/motion";
import { useState } from "react";

const Login = ({ history }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const submitHandler = () => {
    history.push("/chatlobby");
  };

  return (
    <motion.div
      style={pageStyle}
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="login"
    >
      <div className="login-modal">
        <div className="heading-primary">Sign in</div>

        <input
          type="text"
          className="textfield"
          placeholder="User name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>

        <input
          type="email"
          className="textfield"
          placeholder="email@address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>

        <div className="login-modal-container">
          <button
            type="submit"
            className="btn btn-primary"
            onClick={submitHandler}
          >
            Sign in
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default Login;
