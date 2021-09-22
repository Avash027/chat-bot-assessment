import ChatItem from "../Components/ChatItem";
import { botList } from "../Mocks/BotList";

import { motion } from "framer-motion";
import { pageStyle, pageTransition, pageVariants } from "../motion/motion";

const ChatLobby = ({ history }) => {
  return (
    <motion.div
      style={pageStyle}
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="chatroom"
    >
      <header className="header">
        <div className="header__text-box">
          <h1 className="heading-main">
            <span className="heading-main--main">Tech Curators</span>
            <span className="heading-main--sub">Amazon of assessments</span>
          </h1>
        </div>
      </header>
      {botList.map(({ profileImage, name, subtitle, id }, idx) => (
        <ChatItem
          profileImage={profileImage}
          name={name}
          subtitle={subtitle}
          id={id}
          history={history}
          key={idx}
        ></ChatItem>
      ))}
    </motion.div>
  );
};

export default ChatLobby;
