
"use client";

import { useState } from "react";
import { Nav } from "react-bootstrap";
import Navbar from "../Nav/Navbar";
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import Navbaruser from "../Nav/Navbaruser";

const messagesData = [
  { sender: "them", content: "Hi there! How can I help you today?", time: "10:42 AM", type: "text" },
  { sender: "me", content: "I need some help with the water pipessome help with the water pipessome help with the water pipessome help with the water pipes.", time: "10:43 AM", type: "text" },
  { sender: "them", content: "Sure! Can you send me a photo?", time: "10:44 AM", type: "text" },
  { sender: "me", content: "fgfd", time: "10:45 AM", type: "emoji" },
  { sender: "me", content: "dfgdg", time: "10:45 AM", type: "emoji" },
   
  { sender: "them", content: "Sure! Can you send me a photo?", time: "10:44 AM", type: "text" },      
  { sender: "me", content: "I need some help with the water pipessome help with the water pipessome help with the water pipessome help with the water pipes.", time: "10:43 AM", type: "text" },
  { sender: "them", content: "Hi there! How can I help you today                ?", time: "10:42 AM", type: "text" },
  { sender: "me", content: "I need some help with the water pipes.", time: "10:43 AM", type: "text" },
  { sender: "them", content: "Sure! Can you send me a photo?",                  
    time: "10:44 AM", type: "text" },
    { sender: "me", content: "ddfd", time: "10:45 AM", type: "emoji" },
    { sender: "them", content: "Sure! Can you send me a photo?", time: "10:44 AM", type: "text" },
    { sender: "me", content: "I need some help with the water pipessome help with the water pipessome help with the water pipessome help with the water pipes.", time: "10:43 AM", type: "text" },
    { sender: "them", content: "Hi there! How can I help you today                ?", time: "10:42 AM", type: "text" },
];

export default function ChatUI() {
  const [messages, setMessages] = useState(messagesData);
  const [input, setInput] = useState("");
  const [showSidebar, setShowSidebar] = useState(false);

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { sender: "me", content: input, time: "Now", type: "text" }]);
      setInput("");
    }
  };

  return (
    <div>
        <Navbaruser />
        <div className="h-[90vh] flex flex-col md:flex-row bg-gray-100">
        
  
      <div className="md:hidden p-4 flex items-center justify-between bg-white border-b">
        <div className="font-semibold  text-primary text-xl">Chat</div>
        <button onClick={() => setShowSidebar(!showSidebar)}>
          {showSidebar ? <IoClose size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

 
      <aside
        className={`fixed  z-20 md:static md:translate-x-0 transition-transform duration-300 md:w-1/3 max-w-sm bg-white border-r overflow-y-auto scrollbar-hide
          ${showSidebar ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 w-2/3 h-full md:h-auto`}
      >
        <div className="p-4 font-semibold text-xl  text-primary border-b hidden md:block">Chat</div>
        <div className="p-2">
          <input
            type="text"
            placeholder="Search"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none text-sm"
          />
        </div>
        <ul className="overflow-y-auto  ">
          {Array(10)
            .fill()
            .map((_, i) => (
              <li
                key={i}
                className={`flex items-center px-4 py-3 cursor-pointer text-gray-900 hover:bg-gray-50 ${
                  i === 0 ? "bg-teal-100 rounded-lg mx-2" : ""
                }`}
              >
                <img
                  src={`/images/Nav/Ellipse 5925.svg`}
                  alt="user"
                  className="w-10 h-10 rounded-full mr-3 object-cover"
                />
                <div>
                  <h4 className="font-medium text-sm">Name of sn</h4>
                  <p className="text-xs text-gray-500 truncate w-40">
                    A short preview of the message...
                  </p>
                </div>
              </li>
            ))}
        </ul>
      </aside>


      <main className="flex-1 flex flex-col bg-[#E2E6E7]">
  
        <div className="flex items-center bg-[#E2E6E7] justify-between p-4 border-b shadow-sm">
          <div className="flex items-center ">
            <img src="/images/user1.jpg" alt="profile" className="w-10 h-10 rounded-full mr-3 object-cover" />
            <div>
              <h2 className="font-semibold  text-primary text-sm">Saad Ahmed</h2>
              <p className="text-xs text-gray-900">Plumber</p>
            </div>
          </div>
          <div className="space-x-4 text-gray-900">
            <i className="fas fa-video" />
            <i className="fas fa-phone" />
            <i className="fas fa-trash" />
          </div>
        </div>

    
        <div className="flex-1 p-4 space-y-4 overflow-y-auto scrollbar-hide">
          {messages.map((msg, index) => (
            <div key={index} className={`flex ${msg.sender === "me" ? "justify-end" : "justify-start"}`}>
              <div className="flex items-end space-x-2 max-w-xs">
                {msg.sender !== "me" && (
                  <img
                    src="/images/user1.jpg"
                    className="w-8 h-8 rounded-full"
                    alt="sender"
                  />
                )}
                <div
                  className={`px-4 py-3 rounded-lg text-sm ${
                    msg.sender === "me"
                      ? "bg-teal-800 text-white rounded-br-none"
                      : "bg-white text-gray-700 rounded-bl-none border"
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            </div>
          ))}
        </div>

    
        <div className="p-4 border-t  bg-white flex items-center space-x-3">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder="Enter your message..."
            className="flex-1 border px-4 py-2 rounded-full focus:outline-none text-sm"
          />
          <button
            onClick={handleSend}
            className="bg-teal-600 text-gray-900 p-2 rounded-full hover:bg-teal-700 transition"
          >
            <i className="fas fa-paper-plane" />
          </button>
        </div>
      </main>
    </div>
    </div>
    
  );
}
