import "./styles/AboutMe.css";
//import html from "../assets/Htmld.png";
//import css from "../assets/css.png";
//import react from "../assets/react.png";
//import js from "../assets/js.png";
//import tailwind from "../assets/tailwind.png";
//import redux from "../assets/redux.png";
//import gitHub from "../assets/GitHub-Mark.png"
//import vite from "../assets/image10.png"
//import git from "../assets/git.png"
//import postgres from "../assets/elepant.png"
//import express from "../assets/images.png"
//import postman from "../assets/postman.png"

import PDFDownloadButton from "./PDFDownloadButton";
import pdF from "../assets/cV-Msl-or.pdf"
import { motion } from "framer-motion";



const AboutMe = () => {
  return (
    <div
      id="aboutMe"
      className="max-w-[1040px] m-auto md:pl-20 p-4 py-16  aboutMe-container"
    >
      
      <section className="aboutMe__div">
        <motion.h1 
        initial={{scale:0}}
        animate={{scale:1}}
        transition={{
          duration:2
        }}
        className="aboutMe__h1 pb-5 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">Sobre mi</motion.h1>
        <p className="font-serif text-gray-700 text-lg text-white pt-10 pb-10 ">
          Hola, soy María Soledad Laime. Poseo una sólida formación en
          tecnologías de desarrollo web modernas. Estoy en busca de
          oportunidades para seguir aprendiendo y crecer en un entorno
          colaborativo participando en proyectos desafiantes para crear
          soluciones innovadoras que satisfagan las necesidades de los usuarios.
          Me entusiasma el futuro de la tecnología y estoy emocionada por
          continuar contribuyendo a él. 
          <br />
          <br />
          ¡Agradezco tu visita a mi portafolio!
        </p>
        <div className="text-center pt-5 mt-10 ">
          <PDFDownloadButton pdfUrl={pdF} fileName="c-V-MariaLaime.pdf" />
        </div>
      </section>
        
      {/*
      <section className="aboutMe__skills">
        <h2 className="aboutMe__h2 pb-5">Habilidades</h2>
        <div className="aboutMe__skills__container">
          <div className="aboutMe__skills__img">
            <img src={html} alt="" className="aboutMe__skills-img" />
            <h2 className="aboutMe__skills-h2">Html</h2>
          </div>
          <div className="aboutMe__skills__img">
            <img src={css} alt="" className="aboutMe__skills-img" />
            <h2 className="aboutMe__skills-h2">Css</h2>
          </div>
          <div className="aboutMe__skills__img">
            <img src={js} alt="" className="aboutMe__skills-img" />
            <h2 className="aboutMe__skills-h2">Javascript</h2>
          </div>
          <div className="aboutMe__skills__img">
            <img src={react} alt="" className="aboutMe__skills-img" />
            <h2 className="aboutMe__skills-h2">React </h2>
          </div>
          <div className="aboutMe__skills__img">
            <img src={redux} alt="" className="aboutMe__skills-img" />
            <h2 className="aboutMe__skills-h2">Redux</h2>
          </div>
          <div className="aboutMe__skills__img">
            <img src={tailwind} alt="" className="aboutMe__skills-img" />
            <h2 className="aboutMe__skills-h2">Tailwind</h2>
          </div>
          <div className="aboutMe__skills__img">
            <img src={vite} alt="" className="aboutMe__skills-img" />
            <h2 className="aboutMe__skills-h2">Vite</h2>
          </div>
          <div className="aboutMe__skills__img">
            <img src={gitHub} alt="" className="aboutMe__skills-img" />
            <h2 className="aboutMe__skills-h2">GitHub</h2>
          </div>
          <div className="aboutMe__skills__img">
            <img src={git} alt="" className="aboutMe__skills-img" />
            <h2 className="aboutMe__skills-h2">Git</h2>
          </div>
          <div className="aboutMe__skills__img">
            <img src={postgres} alt="" />
            <h2 className="aboutMe__skills-h2">PostgreSQL</h2>
          </div>
          <div className="aboutMe__skills__img">
            <img src={express} alt="" />
            <h2 className="aboutMe__skills-h2">Express</h2>
          </div>
          <div className="aboutMe__skills__img">
            <img src={postman} alt="" />
            <h2 className="aboutMe__skills-h2">Postman</h2>
          </div>
        </div>
      </section>
      */}
    </div>
  );
};

export default AboutMe;
