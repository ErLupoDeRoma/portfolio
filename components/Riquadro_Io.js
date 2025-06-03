import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

export default function IO() {
  useEffect(() => {
    let cursore = document.getElementById("cursore");

    const ingrandisci_cerchio = () => {
      cursore.classList.add("w-10");
      cursore.classList.add("h-10");
    };

    const riduci_cerchio = () => {
      cursore.classList.remove("w-10");
      cursore.classList.remove("h-10");
    };

    const lista_bottoni = document.querySelectorAll(".cursor");

    lista_bottoni.forEach((bottone) => {
      bottone.addEventListener("mouseenter", ingrandisci_cerchio);
      bottone.addEventListener("mouseleave", riduci_cerchio);
    });

    window.addEventListener("mousemove", function (evento) {
      let x = evento.clientX;
      let y = evento.clientY;
      cursore.style.left = x + "px";
      cursore.style.top = y + "px";
    });
  }, []);

  const [sezione_da_mostrare, imposta_sezione] = useState("chi_sono");


  const renderTooltip1 = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      +39 559 002 3204
    </Tooltip>
  );

  const renderTooltip2 = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      l.rivoli@sandonadipiave.it
    </Tooltip>
  );


  const sezione_selezionata = () => {
    if (sezione_da_mostrare == "chi_sono") {
      return <Sezione_Chi_sono />;
    } else if (sezione_da_mostrare == "progetti") {
      return <Sezione_Progetti />;
    } else if (sezione_da_mostrare == "esperienze") {
      return <Sezione_Esperienze />;
    }
  };

  return (
    <>
      <Card style={{ width: "35rem", height: "18rem" }}>
        <div className="img-container-io">
          <Card.Img
            style={{ width: "8rem" }}
            variant="top"
            src="/images/Logo5.png"
          />
          <Card.Img
            style={{ width: "8rem" }}
            variant="top"
            src="/images/Quadrato.jpg"
          />
        </div>
        <Card.Body>
          <div className="tit-container-io">
            <Card.Title>Luca Rivoli</Card.Title>
          </div>
          <div className="butt-container-io">
            <OverlayTrigger
              placement="bottom"
              delay={{ show: 250, hide: 400 }}
              overlay={renderTooltip2}
            >
              <Button variant="primary">G-Mail</Button>
            </OverlayTrigger>
            <OverlayTrigger
              placement="bottom"
              delay={{ show: 250, hide: 400 }}
              overlay={renderTooltip1}
            >
              <Button variant="primary">Numero di Telefono</Button>
            </OverlayTrigger>
            <Button variant="primary">Git-Hub</Button>
          </div>
        </Card.Body>
      </Card>
    </>
  );
}
