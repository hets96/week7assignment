function PostCard({ post, onLike }) {
    const handleLike = async () => {
        try {
        await fetch(`http://localhost:8080/posts/${post.id}/like`, {
            method: "POST",
        });
        onLike();
        } catch (error) {
        console.error("Error liking post:", error);
        }
    };

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString("en-GB", {
        day: "numeric",
        month: "short",
        year: "numeric",
        });
    };

    return (
        <div className="post-card">
        <div className="post-header">
            <span className="guardian-name">{post.guardianname}</span>
            <span className="activity-badge">{post.activitytype}</span>
        </div>
        
        <h2 className="post-title">{post.title}</h2>
        <p className="post-story">{post.story}</p>
        
        <div className="post-footer">
            <button className="like-button" onClick={handleLike}>
            ♡
            </button>
            <span className="like-count">{post.likes} likes</span>
            <span className="post-date">{formatDate(post.createdat)}</span>
        </div>
        </div>
    );
}

export default PostCard;