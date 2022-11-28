import Carousel from 'react-bootstrap/Carousel';


function CarouselComp() {
  return (

    <section id="home">
    {/* <div className="carousel"> */}
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          height={700} width={300}
       
          // src="./portfolio/images/header-background.jpg"
          src="./images/header-background.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          height={700} width={300}
       
        // src="./portfolio/images/carousel_Img15.jpg"
        src="./images/carousel_Img15.jpg"

          alt="Second slide"
        />

        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          height={700} width={300}
        
        // src="./portfolio/images/carousel_Img6.jpeg"
        src="./images/carousel_Img6.jpeg"
        
        
          alt="Third slide"
        />

        <Carousel.Caption>
         
        </Carousel.Caption>

      </Carousel.Item>
      
      
    </Carousel>
    {/* </div> */}
    </section>
  );
}

export default CarouselComp;