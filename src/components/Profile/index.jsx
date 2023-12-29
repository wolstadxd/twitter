import React, { useState } from "react";
import "./profile.scss";

const Profile = () => {

    const [textPost, setTextPost] = useState('')
    const [posts, setPosts] = useState(
        [{
            id: 1,
            text: 'post 1'
        },
        {
            id: 2,
            text: 'post 2'
        },
        {
            id: 3,
            text: 'post 3'
        }]
    )

    const AddNewPost = (blogPost) => {
        const temp = [...posts]
        temp.push(blogPost)

        setPosts(temp)
    }

    const CreatePost = (e) => {
        const post = {
            id: posts.length + 1,
            text: textPost
        }

        AddNewPost(post)
        setTextPost('')
        console.log(post);
        console.log(posts)
    }

  return (
    <>
        <div className="profile_wrapper">
            <form>
                <textarea 
                    placeholder="text your post" 
                    value={textPost} 
                    onChange={(e) => setTextPost(e.target.value)}
                >
                    {textPost}
                </textarea>
                {
                    posts ? posts.map(post => (
                        <div key={post.id}>{post.text}</div>
                    )) : null
                }
                <button type={'button'} onClick={CreatePost}>Publish</button>
            </form>
        </div>
    </>
  );
};

export default Profile;
