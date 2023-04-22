import Carousel from 'react-bootstrap/Carousel';

function HomeCarousel() {
  return (
    <Carousel id="about-carousel">
      <Carousel.Item style={firstItem}>
        <aside className="center-col">
          <h2>We love to hear from you</h2>
          <button>Email Us</button>
        </aside>
      </Carousel.Item>
      <Carousel.Item style={secItem}>
        <aside className="center-col">
          <h2>We are just  phone call away</h2>
          <button>Call Us</button>
        </aside>
      </Carousel.Item>
      <Carousel.Item style={thirdItem}>
        <aside className="center-col">
          <h2>Get in touch with social media</h2>
          <button>Facebook Us</button>
        </aside>
      </Carousel.Item>
    </Carousel>
  );
}
const firstItem = {
  backgroundImage : 'url("assets/carousels/painting.jpg")',
  backgroundSize : "cover",
  backgroundPosition : "center"
}
const secItem = {
  backgroundImage : 'url("assets/carousels/students.jpg")',
  backgroundSize : "cover",
  backgroundPosition : "center"
}
const thirdItem = {
  backgroundImage : 'url("assets/carousels/pencils.jpg")',
  backgroundSize : "cover",
  backgroundPosition : "center"
}


export default HomeCarousel;