import Markdown from "react-markdown";
import { Avatar } from "../../utils/mui";
import { useState } from "react";
import styles from "./ChatMessage.module.css";

type Props = {
  side?: "ai" | "user";
  avatar?: string;
  message: string;
};

const ChatMessage = (props: Props) => {
  const { side = "ai", avatar, message } = props;
  const [id, setId] = useState(Math.random().toString());
  return (
    <div
      className={side === "ai" ? styles.aiChatMessage : styles.humanChatMessage}
      role="row"
      key={id}
    >
      {avatar && <Avatar src={avatar} />}
      <div className={styles.messageText} key={id}>
        <Markdown>{message}</Markdown>
      </div>
    </div>
  );
};

export default ChatMessage;
