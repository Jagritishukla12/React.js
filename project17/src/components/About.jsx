import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const cards = [
  {
    id: 1,
    title: "Migrating to Linear 101",
    author: "Jonathan Wills",
    date: "19 Jan 2022",
    image: "https://picsum.photos/600/400?1",
    content:
      "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get started.",
  },
  {
    id: 2,
    title: "Building your API Stack",
    author: "Lana Steiner",
    date: "18 Jan 2022",
    image: "https://picsum.photos/600/400?2",
    content:
      "The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.",
  },
  {
    id: 3,
    title: "Bill Walsh leadership lessons",
    author: "Eve Wilkins",
    date: "18 Jan 2022",
    image: "https://picsum.photos/600/400?3",
    content:
      "Want to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning dynasty?",
  },
  {
    id: 4,
    title: "Bill Walsh Leadership Lessons",
    author: "Eve Wilkins",
    date: "18 Jan 2022",
    image: "https://picsum.photos/600/400?4",
    content:
      "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get started.",
  },
];

export default function ExpandableCards() {
  const [activeCard, setActiveCard] = useState(null);

  return (
    <>
  
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: "20px",
          padding: "20px",
        }}
      >
        {cards.map((card) => (
          <motion.div
            key={card.id}
            layoutId={`card-${card.id}`}
            onClick={() => setActiveCard(card)}
            style={{
              border: "1px solid #ddd",
              borderRadius: "10px",
              overflow: "hidden",
              cursor: "pointer",
              background: "#fff",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
            }}
            whileHover={{ scale: 1.02 }}
            transition={{ layout: { duration: 0.3, type: "spring" } }}
          >
            <img src={card.image} alt={card.title} style={{ width: "100%" }} />
            <div style={{ padding: "15px" }}>
              <h3>{card.title}</h3>
              <p style={{ fontSize: "14px", color: "gray" }}>
                {card.author} • {card.date}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      
      <AnimatePresence>
        {activeCard && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background: "rgba(0,0,0,0.3)",
              backdropFilter: "blur(10px)",
              WebkitBackdropFilter: "blur(10px)",
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-end",
              zIndex: 1000,
            }}
            onClick={() => setActiveCard(null)}
          >
            <motion.div
              layoutId={`card-${activeCard.id}`}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{
                type: "spring",
                stiffness: 180,
                damping: 20,
                mass: 0.9,
              }}
              drag="y"
              dragConstraints={{ top: 0, bottom: 0 }}
              dragElastic={0.25}
              onDragEnd={(e, info) => {
                if (info.offset.y > 150) {
                  setActiveCard(null); 
                }
              }}
              style={{
                background: "rgba(255, 255, 255, 0.8)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                borderTopLeftRadius: "25px",
                borderTopRightRadius: "25px",
                width: "100%",
                maxWidth: "800px",
                height: "90%",
                padding: "20px",
                overflowY: "auto",
                boxShadow: "0 -8px 30px rgba(0,0,0,0.25)",
              }}
              onClick={(e) => e.stopPropagation()}
            >
            
              <div
                style={{
                  width: "50px",
                  height: "6px",
                  background: "rgba(150,150,150,0.6)",
                  borderRadius: "3px",
                  margin: "0 auto 15px",
                }}
              ></div>

              <img
                src={activeCard.image}
                alt={activeCard.title}
                style={{
                  width: "100%",
                  borderRadius: "15px",
                  boxShadow: "0 4px 15px rgba(0,0,0,0.15)",
                }}
              />
              <h2 style={{ marginTop: "15px" }}>{activeCard.title}</h2>
              <p style={{ fontSize: "14px", color: "gray" }}>
                {activeCard.author} • {activeCard.date}
              </p>
              <p style={{ marginTop: "10px", fontSize: "15px" }}>
                {activeCard.content}
              </p>
              <button
                onClick={() => setActiveCard(null)}
                style={{
                  marginTop: "15px",
                  padding: "12px 24px",
                  background: "linear-gradient(135deg, #007bff, #00c6ff)",
                  color: "#fff",
                  border: "none",
                  borderRadius: "10px",
                  cursor: "pointer",
                  boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
                }}
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
