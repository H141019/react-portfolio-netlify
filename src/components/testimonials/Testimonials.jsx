import "./testimonials.scss"

export default function Testimonials() {

    const data = [
        {
            id:1,
            name: "Justin",
            title: "Developer",
            img:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUqNn_F-nPdLqNaX_tck7bPu9wEKugJ1xyxA&usqp=CAU",
            icon: "assets/twitter.png",  
            desc:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",  
        },
        {
            id:2,
            name: "John",
            title: "Co-founder of Genius",
            img:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIWsw1yLKgQWIUIli4G9HpMAf2em4fhqquxw&usqp=CAU",
              icon: "assets/youtube.png", 
            desc:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
            featured: true
            },
        {
            id:3,
            name: "Rihan",
            title: "Senior Developer",
            img:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRICsXOwMG2V-xvqGzcVW4EmwKde3Kp0czRSw&usqp=CAU",
            icon: "assets/linkedin.png", 
            desc:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
        },

     ];

    return (
        <div className="testimonials" id="testimonials">
            <h1>Testimonials</h1>
            <div className="container">
                  {data.map((d) => (
                <div className={d.featured ? "card featured" : "card"}>
                    <div className="top">
                         <img src="assets/right-arrow.png" className="left" alt="" />
                         <img className="user"
                           src={d.img} alt="" />
                         <img className="right" 
                           src={d.icon}alt="" />
                    </div>
                    <div className="center">
                       Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </div>
                    <div className="bottom">
                       <h3>{d.name}</h3>
                       <h4>{d.title}</h4>
                    </div>     
                </div>
                ))}
            </div>
        </div>
    )
}
