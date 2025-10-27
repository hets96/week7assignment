import { useState } from "react";

function PostForm({ onSubmit }) {
    const [formData, setFormData] = useState({
        guardianname: "",
        title: "",
        story: "",
        activitytype: "Strike",
    });

    const handleChange = (e) => {
        setFormData({
        ...formData,
        [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
        setFormData({
        guardianname: "",
        title: "",
        story: "",
        activitytype: "Strike",
        });
    };

    return (
        <form onSubmit={handleSubmit}>
        <div className="form-group">
            <label htmlFor="guardianname">Guardian Name:</label>
            <input
            type="text"
            id="guardianname"
            name="guardianname"
            value={formData.guardianname}
            onChange={handleChange}
            required
            placeholder="e.g. Cayde-6"
            />
        </div>

        <div className="form-group">
            <label htmlFor="title">Story Title:</label>
            <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            placeholder="e.g. Epic Raid Moment"
            />
        </div>

        <div className="form-group">
            <label htmlFor="activitytype">Activity Type:</label>
            <select
            id="activitytype"
            name="activitytype"
            value={formData.activitytype}
            onChange={handleChange}
            >
            <option value="Strike">Strike</option>
            <option value="Raid">Raid</option>
            <option value="Crucible">Crucible</option>
            <option value="Gambit">Gambit</option>
            <option value="Patrol">Patrol</option>
            <option value="Dungeon">Dungeon</option>
            </select>
        </div>

        <div className="form-group">
            <label htmlFor="story">Your Story:</label>
            <textarea
            id="story"
            name="story"
            value={formData.story}
            onChange={handleChange}
            required
            placeholder="Share your epic moment..."
            />
        </div>

        <button type="submit">Share Story</button>
        </form>
    );
}

export default PostForm;