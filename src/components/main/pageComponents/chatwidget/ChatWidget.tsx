

import { getUserById } from "@/services/user/user";
import { useEffect, useRef, useState } from "react";
import "./chatWidget.scss"
import ChatInput from "./ChatInput";
import { io } from "socket.io-client";
import axios from "axios";
import { useRouter } from "next/navigation";

const ChatWidget = ({ isOpen, onClose }) => {
  const router = useRouter();

  const [dataAdmin, setDataAdmin] = useState()
  const [messages, setMessages] = useState([]);
  const [currentUser, setCurrentUser] = useState(undefined);
  const socket = useRef();

  // useEffect(() => {
  //   if (!localStorage.getItem('user')) {
  //     navigate("/login");
  //   } else {
  //     setCurrentUser(JSON.parse(localStorage.getItem('user') as string));
  //   }
  // }, []);  

  // useEffect(() => {
  //   if (currentUser) {
  //     socket.current = io("http://localhost:8080");
  //     socket.current.emit("add-user", currentUser._id);
  //   }
  // }, [currentUser]);
  // useEffect(() => {
  //   const getInfAdmin = async () => {
  //     const data = await getUserById('656772fa0437e8234a8c6f43')
  //     setDataAdmin(data.data)
  //   }
  //   getInfAdmin()
  // }, [])

  const handleSendMsg = async (msg: string) => {
    // const user = JSON.parse(localStorage.getItem("user") as string )
    // socket.current.emit("send-msg", {
    //   to: dataAdmin?._id,
    //   from: user._id,
    //   msg,
    // });
    // await axios.post(sendMessageRoute, {
    //   from: user._id,
    //   to: dataAdmin?._id,
    //   message: msg,
    // });

    // const msgs = [...messages];
    // msgs.push({ fromSelf: true, message: msg });
    // setMessages(msgs);
    console.log(msg);
  };

  return (
    <div className={`chat-widget ${isOpen ? "open" : ""}`}>
      <div className="chat-header">
        
        
          <div className="user-details">
            <div className="avatar">
              <img src={dataAdmin?.avatar} alt="" />
            </div>
            <div className="username">
              <h3>{dataAdmin?.name}</h3>
            </div>
          </div>
          <div className="close cursor-pointer	">
            <p className="text-3xl" onClick={onClose}>&times;</p>
            </div>
        

      </div>
      <div className="chat-content">
        <div>
          aaaaaaaaaaaaa
        </div>
        <div>
          aaaaaaaaaaaaa
        </div>
        <div>
          aaaaaaaaaaaaa
        </div>
        <div>
          aaaaaaaaaaaaa
        </div>
        <div>
          aaaaaaaaaaaaa
        </div>
        <div>
          aaaaaaaaaaaaa
        </div>
        <div>
          aaaaaaaaaaaaa
        </div>
        <div>
          aaaaaaaaaaaaa
        </div>
        <div>
          aaaaaaaaaaaaa
        </div>
        <div>
          aaaaaaaaaaaaa
        </div>
        <div>
          aaaaaaaaaaaaa
        </div>
        <div>
          aaaaaaaaaaaaa
        </div>
        <div>
          aaaaaaaaaaaaa
        </div>
        <div>
          aaaaaaaaaaaaa
        </div><div>
          aaaaaaaaaaaaa
        </div>
        <div>
          aaaaaaaaaaaaa
        </div><div>
          aaaaaaaaaaaaa
        </div><div>
          aaaaaaaaaaaaa
        </div><div>
          aaaaaaaaaaaaa
        </div><div>
          aaaaaaaaaaaaa
        </div><div>
          aaaaaaaaaaaaa
        </div><div>
          aaaaaaaaaaaaa
        </div><div>
          aaaaaaaaaaaaa
        </div>
      
      </div>
      <ChatInput handleSendMsg={handleSendMsg} />
    </div>
  );
};

export default ChatWidget