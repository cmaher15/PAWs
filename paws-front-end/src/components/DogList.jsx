// import React from "react";
// import { DogProfileCard } from "../helpers/dogProfileCard";
// import DogMatches from "./DogMatches";
// import DogProfile from "./DogProfile";



// export default function DogList () {
//   return (
//     <div className="doggos">
//       <DogProfile className="doggos-item"/>
//       <DogProfile className="doggos-item"/>
//       <DogProfile className="doggos-item"/>
//       <DogProfile className="doggos-item"/>
//     </div>
//   )
// }

// import "./styles.css";
// import React, { Component } from "react";
// import Carousel from "react-spring-3d-carousel";
// import Card from "@material-ui/core/Card";
// import uuidv4 from "uuid";
// import TniCard from "./card";
// import { config } from "react-spring";
// class MyCarousel extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       goToSlide: ""
//     };
//   }
//   slides = [
//     {
//       key: uuidv4(),
//       content: <TniCard />
//     },
//     {
//       key: uuidv4(),
//       content: <TniCard />
//     },
//     {
//       key: uuidv4(),
//       content: <TniCard />
//     },
//     {
//       key: uuidv4(),
//       content: <TniCard />
//     },
//     {
//       key: uuidv4(),
//       content: <TniCard />
//     },
//     {
//       key: uuidv4(),
//       content: <TniCard />
//     },
//     {
//       key: uuidv4(),
//       content: <TniCard />
//     },
//     {
//       key: uuidv4(),
//       content: <TniCard />
//     }
//   ].map((slide, index) => {
//     return { ...slide, onClick: () => this.setState({ goToSlide: index }) };
//   });

//   render() {
//     return (
//       <div style={{ width: "40%", height: "500px", margin: "0 auto" }}>
//         <Carousel
//           slides={this.slides}
//           goToSlide={this.state.goToSlide}
//           offsetRadius="10"
//           animationConfig={config.gentle}
//         />
//       </div>
//     );
//   }
// }
// export default MyCarousel;
