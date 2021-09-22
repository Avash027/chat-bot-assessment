const ChatItem = ({ profileImage, name, subtitle, id, history }) => {
  const submitHandler = (id) => {
    history.push(`/chatroom/${id}`);
  };

  return (
    <div className="chatroom-chatitem" onClick={() => submitHandler(id)}>
      <div className="chatroom-chatitem-sidebar"></div>
      <div className="chatroom-chatitem-container">
        <img src={profileImage} className="chatroom-chatitem-img"></img>
      </div>
      <div className="chatroom-chatitem-content">
        <div className="chatroom-chatitem-content-header">{name}</div>
        <div className="chatroom-chatitem-content-subtitle">{subtitle}</div>
      </div>
    </div>
  );
};

export default ChatItem;
