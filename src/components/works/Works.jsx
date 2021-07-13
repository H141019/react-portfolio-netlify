import { useState } from "react";
import "./works.scss";


export default function Works() {
    const [currentSlide,setCurrentSlide] = useState(0);

     const data = [
        {
            id:1,
            icon: "./assets/mobile.png",
            title: "Web Design",
            desc:
               "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
            img:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO9JDarHFOfBVfUqb08472kjt1zGQ83zr7Bg&usqp=CAU",
        },
        {
            id:2,
            icon: "./assets/globe.png",
            title: "Mobile Application",
            desc:
               "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
            img:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd-utMxrx3Z6_qrJlL2oDQuCJnUQP06Xd-og&usqp=CAU",
        },
        {
            id:3,
            icon: "./assets/writing.png",
            title: "Branding",
            desc:
               "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
            img:
              "https://big4solutions.com/wp-content/uploads/2019/11/solutions-it-dev-platform-v1.jpg",
        },

     ];

     const handleClick = (way)=> {
        way === "left" ? setCurrentSlide(currentSlide > 0 ? currentSlide-1 : 2) :
          setCurrentSlide(currentSlide<data.length -1 ? currentSlide +1 : 0)
      };

    return (
        <div className="works" id="works">
            <div className="slider" style={{transform:`translateX(-${currentSlide * 100}vw)`}}>
              {data.map((d) => (
               <div className="container">
                  <div className="item">
                      <div className="left">
                         <div className="leftContainer">
                          <div className="imgContainer">
                             <img src={d.icon} alt="" />
                          </div>
                          <h2>{d.title}</h2>
                          <p>
                             {d.desc}
                          </p>
                          <span>Projects</span>
                         </div>
                      </div>
                      <div className="right">
                        <img src="https://img.freepik.com/free-photo/portfolio-website-home-office-setup-3d-rendering_72104-3326.jpg?size=626&ext=jpg" 
                        alt="" />
                      </div>
                  </div>
               </div>))}
              </div>
            <img src="assets/arrow.png" className="arrow left"  alt="" onClick={()=>handleClick("left")}/>
            <img src="assets/arrow.png" className="arrow right" alt="" onClick={()=>handleClick("")}/>
        </div>
    );
}
