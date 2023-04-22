import Carousel from 'react-bootstrap/Carousel';
import BtnNot from './BtnNot';

function HomeCarousel() {
  return (
    <Carousel id="home-carousel">
    <Carousel.Item style={coroInner1}>
      <aside className='flexy-col'>
        <h2>Making A Difference</h2>
        {/* <button>Email Us</button> */}
        <BtnNot text="Email Us"/>
      </aside>      
    </Carousel.Item>
    <Carousel.Item style={coroInner2}>
      <aside className='flexy-col'>
        <h2>Making A Difference</h2>
        <BtnNot text="Call Us"/>
        {/* <button>Call Us</button> */}
      </aside>      
    </Carousel.Item>
    <Carousel.Item style={coroInner3}>
      <aside className='flexy-col'>
        <h2>Making A Difference</h2>
        {/* <button>Facebook Us</button> */}
        <BtnNot text="Facebook Us"/>
      </aside>     
    </Carousel.Item>
  </Carousel>
  );
}


const coroInner1 = {
  backgroundImage : 'url("/assets/other/pupils.jpg")',
  backgroundPosition: "center",
  backgroundSize : "cover",
  width : "100%",
  height : "100vh",

}
const coroInner2 = {
  backgroundImage : 'url("/assets/carousels/learner.jpg")',
  backgroundPosition: "center",
  backgroundSize : "cover",
  width : "100%",
  height : "100vh",

}
const coroInner3 = {
  backgroundImage : 'url("/assets/other/pupils.jpg")',
  backgroundPosition: "center",
  backgroundSize : "cover",
  width : "100%",
  height : "100vh",

}
export default HomeCarousel;