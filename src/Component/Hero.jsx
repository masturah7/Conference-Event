import Carousel from 'react-bootstrap/Carousel';



// importing of images
import img1 from '../assets/slide-1.jpg';
import img2 from '../assets/slide-2.jpg';
import img3 from '../assets/slide-3.jpg';
const slides = [

    {
        imageUrl:img2,
        title: 'Catalyst X Conference',
        description: 'A premier conference bringing together leaders, innovators, creators, and professionals shaping the future of Africa.'
    },

    {
        imageUrl:img1,
        title: 'Africa’s Next Moves Start Here',
        description: 'Connect. Learn. Lead. Build.'
    },
    {
        imageUrl:img3,
        title: 'Driving Impact.',
        description: 'One Stage. Powerful Minds. Real Conversations.'
  }
];

function Hero() {
  return (
    <Carousel id='home' fade data-bs-ride="carousel" interval={3000} pause={false}>
        {slides.map((slide, index) => (

        <Carousel.Item key={index} className='slider'>
        <img src={slide.imageUrl} alt={slide.title} />
        <div className="overlay"></div>
        <Carousel.Caption>
          <h3>{slide.title}</h3>
          <p>{slide.description}</p>
        </Carousel.Caption>
      </Carousel.Item>
        ))}
      
      
    </Carousel>
  );
}

export default Hero;