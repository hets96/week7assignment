import { useState, useEffect } from "react";
import PostCard from "../components/PostCard";

function Home() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchPosts = async () => {
        try {
        const response = await fetch("http://localhost:8080/posts");
        const data = await response.json();
        setPosts(data);
        setLoading(false);
        } catch (error) {
        console.error("Error fetching posts:", error);
        setLoading(false);
        }
    };

    useEffect(() => {
        fetchPosts();
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
        fetchPosts();
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    if (loading) {
        return <div className="loading">Loading Guardian Stories...</div>;
    }

    return (
        <div className="posts-container">
        {posts.length === 0 ? (
            <p style={{ textAlign: "center", color: "#888" }}>
            No stories yet. Be the first Guardian to share!
            </p>
        ) : (
            posts.map((post) => (
            <PostCard key={post.id} post={post} onLike={fetchPosts} />
            ))
        )}
        </div>
    );
}

export default Home;