import { useState, useEffect } from "react";

import { InitialMessages } from "../Mocks/InitialMessages";
import { InitialQuestions } from "../Mocks/InitialQuestions";

import { motion } from "framer-motion";
import { pageStyle, pageTransition, pageVariants } from "../motion/motion";

import MessageItem from "../Components/MessageItem";

const MessageRoom = ({ history }) => {
  const [messages, setMessages] = useState(InitialMessages);
  const [questions, setQuestions] = useState(InitialQuestions);
  const [input, setInput] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);

  useEffect(() => {
    const questionUtil = [...questions];
    const { statement, options, answer } = questionUtil[0];

    const messageObject = {
      senderType: "bot",
      profileImage: "/assets/defaultImage.jpg",
      content: statement,
      options,
      answer,
    };
    questionUtil.shift();

    const messageUtil = [...messages, messageObject];
    setMessages(messageUtil);
    setQuestions(questionUtil);
  }, []);

  const answerHandler = (e, ans = "") => {
    e.preventDefault();

    const userAnswer = ans.length === 0 ? input : ans;

    const messageObject = {
      senderType: "user",
      profileImage: "/assets/defaultImage.jpg",
      content: userAnswer,
    };

    let prevMessage = [...messages];
    prevMessage[prevMessage.length - 1].disabled = "disabled";
    setMessages([...prevMessage, messageObject]);

    if (questions.length === 0) {
      setIsDisabled(true);
      return;
    }

    const questionUtil = [...questions];
    const { statement, options, answer } = questionUtil[0];

    const botmessageObject = {
      senderType: "bot",
      profileImage: "/assets/defaultImage.jpg",
      content: statement,
      options,
      answer,
    };

    questionUtil.shift();

    const messageUtil = [...prevMessage, messageObject, botmessageObject];
    setMessages(messageUtil);
    setQuestions(questionUtil);
    setInput("");
  };

  return (
    <motion.div
      style={pageStyle}
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="messageroom"
    >
      <div className="messageroom-header">
        Bot1{" "}
        <span
          className="exit"
          onClick={() => {
            history.push("/chatlobby");
          }}
        >
          &#10060;
        </span>
      </div>
      <div className="messageroom-main">
        {messages.map((message, idx) => (
          <MessageItem
            message={message}
            key={idx}
            answerHandler={answerHandler}
          ></MessageItem>
        ))}
      </div>
      <form className="messageroom-form" onSubmit={(e) => answerHandler(e)}>
        <input
          className="messageroom-form-textfield"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Write your answer"
        />

        <button
          type="submit"
          disabled={isDisabled || input.length === 0}
          className="messageroom-form-button"
        >
          &rarr;
        </button>
      </form>
    </motion.div>
  );
};

export default MessageRoom;
