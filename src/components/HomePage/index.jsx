import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./homepage.scss";


const HomePage = () => {

  const [textPost, setTextPost] = useState('')
  const [posts, setPosts] = useState(
      [

      ]
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
      <div className="home_wrap">
        <div className="home_block home_left">
          <ul className="left_nav">
            <li className="left_nav_item">
              <img src="images/icon_bar_1.png" alt="icon_bar_1" />
              <a href="https://www.instagram.com/" className="left_nav_link">
                Home
              </a>
            </li>
            <li className="left_nav_item">
              <img src="images/icon_bar_2.png" alt="icon_bar_2" />
              <a href="https://www.instagram.com/" className="left_nav_link">
                Explore
              </a>
            </li>
            <li className="left_nav_item">
              <img src="images/icon_bar_3.png" alt="icon_bar_3" />
              <a href="https://www.instagram.com/" className="left_nav_link">
                Notifications
              </a>
            </li>
            <li className="left_nav_item">
              <img src="images/icon_bar_4.png" alt="icon_bar_4" />
              <a href="https://www.instagram.com/" className="left_nav_link">
                Messages
              </a>
            </li>
            <li className="left_nav_item">
              <img src="images/icon_bar_5.png" alt="icon_bar_5" />
              <a href="https://www.instagram.com/" className="left_nav_link">
                Bookmarks
              </a>
            </li>
            <li className="left_nav_item">
              <img src="images/icon_bar_6.png" alt="icon_bar_6" />
              <a href="https://www.instagram.com/" className="left_nav_link">
                Lists
              </a>
            </li>
            <li className="left_nav_item">
              <img src="images/icon_bar_7.png" alt="icon_bar_7" />
              <a href="https://www.instagram.com/" className="left_nav_link">
                Profile
              </a>
            </li>
            <li className="left_nav_item">
              <img src="images/icon_bar_8.png" alt="icon_bar_8" />
              <a href="https://www.instagram.com/" className="left_nav_link">
                More
              </a>
            </li>
          </ul>
        </div>
        <div className="home_block home_center">
          <div className="profile_name">
            <h2>Babour</h2>
            <p>1007 tweers</p>
          </div>
          <div className="profile_image">
            <img src="images/profile_image.png" alt="profile_image" />
          </div>
          <div className="profile_header">
            <div className="profile_picture">
              <img src="images/profile_picture.png" alt="profile_picture" />  
            </div> 
          </div>
          <div className="profile_form">
            <form>
                  <textarea 
                      className="textarea_profile"
                      placeholder="Write your post..." 
                      value={textPost} 
                      onChange={(e) => setTextPost(e.target.value)}
                  >
                      {textPost}
                  </textarea>
                  <button type={'button'} onClick={CreatePost}>Tweet</button>
                  <button onClick={() => setPosts([])}>Clear Posts</button>
                  {
                      posts ? posts.map(post => (
                          <div key={post.id} className="profile_post">{post.text}
                          </div>
                      )) : null
                  }
              </form>
          </div>
        </div>
        <div className="home_block home_right">
          <Link to='/'>
            <button className="back_to_login">Back to Login</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default HomePage;
