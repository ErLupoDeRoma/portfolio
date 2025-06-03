
import Carousel from 'react-bootstrap/Carousel';

export default function Template_Esperienze({ Esperienza }) {
  return (
    <>
      <div className="elemento-carosello">
        <Carousel data-bs-theme="dark" controls={false}>
          {Esperienza.Immagini.map((immagine, index) => (
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={immagine}
                alt="First slide"
              />
              <Carousel.Caption>
                <h5>{Esperienza.Titoli[index]}</h5>
                <p>{Esperienza.Testi[index]}</p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </>
  );
}
