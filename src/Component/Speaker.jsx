import Carousel from "react-bootstrap/Carousel";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";

// importing of images
import speaker1 from "../assets/speaker/Odunayo.jpg";
import speaker2 from "../assets/speaker/Elumelu.jpg";
import speaker3 from "../assets/speaker/Shodunke.jpg";
import speaker4 from "../assets/speaker/Ndidi.jpg";
import speaker5 from "../assets/speaker/Adenuga.jpg";
import speaker6 from "../assets/speaker/Temi.jpg";

import speaker7 from "../assets/speaker/Awosika.jpg";
import speaker8 from "../assets/speaker/Durotoye.jpg";
import speaker9 from "../assets/speaker/Alabi.jpg";



const speakerSlides = [
  {
    speaker: [
      {
        image: speaker1,
        name: "Odunayo Eweniyi",
        designation: "Fintech leader",
      },
      {
        image: speaker2,
        name: "Tony Elumelu",
        designation: "Business Magnate",
      },
      {
        image: speaker3,
        name: "Shoyinka Shodunke",
        designation: "Telecom and IT executive",
      },
    ],
  },

  {
    speaker: [
      {
        image: speaker4,
        name: "Ndidi Okonkwo Nwuneli",
        designation: "Social entrepreneur and investor.",
      },
      { image: speaker5, name: "Dr. Mike Adenuga Jr.", designation: "CTO" },
      { image: speaker6, name: "Temie Giwa-Tubosun", designation: "Entrepreneur & Health Innovator" },
      
    ],
  },

  {
    speaker: [
      {
        image: speaker7,
        name: "Ibukun Awosika",
        designation: "Business leader",
      },
      {
        image: speaker8,
        name: "Fela Durotoye",
        designation: "Leadership coach and motivational speaker.",
      },
      {
        image: speaker9,
        name: "Akin Alabi",
        designation: "Entrepreneur and politician.",
      },
    ],
  },
];

const Speaker = () => {
  return (


    <>

    <section className="mt-5 text-center mb-5">

        <h1> Meet the Speaker</h1>
        <p>Inspiring Experience, Bold Ideals. Catalyst with the difference</p>
    </section>
    <Carousel interval={3500} pause={false} indicators={false} className="pb-5">
      {speakerSlides.map((slide, index) => (
        <Carousel.Item key={index}>
          <Container>
            <Row className="g-4">

              {slide.speaker.map((speaker, idx) => (
                <Col md={4} key={idx}>
                  <div className="speaker-card">

                    <img
                      src={speaker.image}
                      alt={speaker.name}
                      className="speaker-img"
                    />

                   
                    <div className="speaker-overlay"></div>

                    <div className="speaker-info">
                      <h5>{speaker.name}</h5>
                      <span>{speaker.designation}</span>
                    </div>

                  </div>
                </Col>
              ))}

            </Row>
          </Container>
        </Carousel.Item>
      ))}
    </Carousel>

    </>
  )
}

export default Speaker