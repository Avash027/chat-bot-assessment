const MessageItem = ({ message, answerHandler }) => {
  return (
    <div className={`message ${message.senderType} ${message.disabled}`}>
      <img className="messageroom-img" src={message.profileImage}></img>
      <p>
        {message.content}
        <br />
        {message.options &&
          message.options.map((option, idx) => (
            <button
              className={`btn-option `}
              key={idx}
              onClick={(e) => answerHandler(e, option)}
            >
              {option}
            </button>
          ))}
      </p>
    </div>
  );
};

export default MessageItem;
