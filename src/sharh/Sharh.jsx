import React, { useState, useEffect } from "react";
import './sharh.css'
function Sharh() {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const savedComments = localStorage.getItem("comments");
    if (savedComments) {
      setComments(JSON.parse(savedComments));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("comments", JSON.stringify(comments));
  }, [comments]);

  const handleSubmit = () => {
    if (comment.trim()) {
      setComments((prevComments) => [...prevComments, comment]);
      setComment("");
    }
  };

  const handleDelete = (index) => {
    setComments((prevComments) => prevComments.filter((_, i) => i !== index));
  };

  return (
    <div className="sharh-cont">
      <div style={{ padding: "20px" }}>
        <h3>Sharh yozing</h3>
        <input
          type="text"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Sharhingizni yozing"
          style={{ padding: "10px", width: "300px" }}
        />
        <button onClick={handleSubmit} style={{ padding: "10px", marginLeft: "10px" }}>
          Yuborish
        </button>

        <div
          style={{
            position: "relative",
            overflow: "hidden",
            marginTop: "20px",
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "5px",
            width: "100%",
            maxWidth: "600px",
            height: "70px",
            backgroundColor: "#f9f9f9",
            whiteSpace: "nowrap",
          }}
        >
          <div
            style={{
              display: "inline-block",
              animation: "marquee 10s linear infinite",
            }}
          >
            {comments.map((cmt, index) => (
              <div
                key={index}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  padding: "10px",
                  marginRight: "20px",
                  backgroundColor: "#fff",
                  borderRadius: "5px",
                  border: "1px solid #ccc",
                }}
              >
                <div
                  style={{
                    width: "30px",
                    height: "30px",
                    borderRadius: "50%",
                    backgroundColor: "#bbb",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginRight: "10px",
                    fontSize: "12px",
                    color: "#fff",
                  }}
                >
                  A
                </div>
                <div>
                  <p style={{ margin: 0, fontWeight: "bold" }}>Anonim</p>
                  <p style={{ margin: 0 }}>{cmt}</p>
                </div>
                <button
                  onClick={() => handleDelete(index)}
                  style={{
                    marginLeft: "10px",
                    padding: "2px 5px",
                    cursor: "pointer",
                  }}
                >
                  O'chirish
                </button>
              </div>
            ))}
          </div>
        </div>

        <style>
          {`
            @keyframes marquee {
              0% { transform: translateX(100%); }
              100% { transform: translateX(-100%); }
            }
          `}
        </style>
      </div>
    </div>
  );
}

export default Sharh;
