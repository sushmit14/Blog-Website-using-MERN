import React from "react";
import {Route, Routes } from "react-router-dom"; 
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import "./styles.css"
import Compose from "./Compose";
import Post from "./Post";

const homeStartingContent = "abc";
const contactContent = "Scelerisque eleifend donec pretium vulputate sapien. Rhoncus urna neque viverra justo nec ultrices. Arcu dui vivamus arcu felis bibendum. Consectetur adipiscing elit duis tristique. Risus viverra adipiscing at in tellus integer feugiat. Sapien nec sagittis aliquam malesuada bibendum arcu vitae. Consequat interdum varius sit amet mattis. Iaculis nunc sed augue lacus. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit. Pulvinar elementum integer enim neque. Ultrices gravida dictum fusce ut placerat orci nulla. Mauris in aliquam sem fringilla ut morbi tincidunt. Tortor posuere ac ut consequat semper viverra nam libero.";
const aboutContent = "Welcome to our blog about the latest updates in the field of machine learning and deep learning! Our mission is to provide valuable insights and knowledge about these exciting topics to help you stay up-to-date and informed.Our team is comprised of passionate data scientists and machine learning experts who are committed to sharing their expertise with the wider community. We believe that knowledge should be shared and accessible to everyone, and that's why we've created this blog. Whether you're a beginner or an expert in the field of machine learning and deep learning, our blog has something for everyone. From introductory articles to in-depth tutorials, we cover a wide range of topics to help you expand your knowledge and improve your skills. We're also committed to fostering a community of like-minded individuals who share our passion for machine learning and deep learning. That's why we encourage our readers to leave comments, share their thoughts and ideas, and engage in discussions with other members of the community.Thank you for visiting our blog and being a part of our community. If you have any feedback or suggestions for future articles, please don't hesitate to contact us. We're always looking for ways to improve and provide the best possible content for our readers.";

function App(){
    
  return (
    <div>
      <Header />
      <Routes>
          <Route path="/" element={<Home startingContent={homeStartingContent} />}/>
          <Route path="/About" element={<About aboutContent={aboutContent} />}/>
          <Route path="/Contact" element={<Contact contactContent={contactContent}/>}/>
          <Route path="/Compose" element={<Compose/>}/>
          <Route path="/post/:id" element={<Post />} />
      </Routes>
      <Footer />
      
    </div>
  );
};

export default App;