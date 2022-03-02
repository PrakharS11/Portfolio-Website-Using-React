import React from 'react';
import guyCoding from "../../Resources/Images/guyCoding.png";
import profilePic from "../../Resources/Images/profilePic.jpeg";
import YouTube from 'react-youtube';
import ReactPlayer from 'react-player'
import { WhatsAppOutlined } from "@ant-design/icons";
import { LinkedinFilled, GithubFilled, FacebookFilled } from "@ant-design/icons";
import "./styles/Intro.css";

function Intro() {

    const getIntroCard = () => {
        return (
            <section className="portfolio-intro-card-wrapper">
                <section className="portfolio-intro-card-bg-image">
                    <img src={guyCoding} />
                </section>
                <section className="portfolio-intro-card-content-wrapper">
                    <img src={profilePic}/>
                    <h2>Prakhar Srivastava</h2>
                    <p>I've been a Web Developer for 2 years. I build new projects just to tickle my brain and love teaching others how they're made. While I keep busy learning courses, I still give interviews in search of a great team & projects that interest me. My custom-built websites are fast loading accessible, and easy to manage.</p>
                    <div className="resume-CTA">Resume</div>
                    <section className="portfolio-intro-card-social-wrapper">
                        <LinkedinFilled onClick={()=>window.open("https://www.linkedin.com/in/prakhar-srivastava-47484a153/","_blank")}/>
                        <GithubFilled onClick={()=>window.open("https://github.com/PrakharS11","_blank")}/>
                        <FacebookFilled />
                    </section>
                </section>
            </section>
        )
    }

    const getIntroVideo = () => {
        let playerWidth = window.innerWidth > 660 ? "500px" : "100vw";
        return (<ReactPlayer width={playerWidth} height="auto" url='https://www.youtube.com/watch?v=ysz5S6PUM-U' />)
    }

    const getIntroBody = () =>{
        return (
            <section className="portfolio-intro-body-wrapper">
                {getIntroCard()}
                {getIntroVideo()}
            </section>
        )
    }

  return (
  <div className="portfolio-intro-wrapper">
        <h1>Introduction</h1>
        {getIntroBody()}
        <div className="connect-whatsapp" onClick={()=>{window.open("https://wa.me/9260909019?text=Hello Prakhar, I want to talk to you regarding an opening in my company.")}}>
            <WhatsAppOutlined style={{color:"#fff", fontSize:"30px"}}/>
        </div>
  </div>
  )
}

export default Intro;
