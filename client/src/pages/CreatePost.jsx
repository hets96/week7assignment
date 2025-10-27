import { useState } from "react";
import { useNavigate } from "react-router";
import PostForm from "../components/PostForm";

function CreatePost() {
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (formData) => {
        try {
        const response = await fetch("http://localhost:8080/posts", {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        });

        if (response.ok) {
            setMessage("Story shared successfully!");
            setTimeout(() => {
            navigate("/");
            }, 1500);
        }
        } catch (error) {
        console.error("Error creating post:", error);
        setMessage("Failed to share story. Please try again.");
        }
    };

    return (
        <div>
        {message && (
            <div className={message.includes("success") ? "success" : "error"}>
            {message}
            </div>
        )}
        <PostForm onSubmit={handleSubmit} />
        </div>
    );
}

export default CreatePost;