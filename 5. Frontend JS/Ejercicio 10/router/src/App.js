import {Navbar, Nav, Container, NavbarBrand, Card, Button } from "react-bootstrap";
import {Switch, Route, Link, useLocation, useParams, useHistory } from "react-router-dom";
import {LinkContainer} from "react-router-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from "react";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar bg="danger" expand="lg">
          <Container>
          <NavbarBrand as={Link} to='/'>HOME</NavbarBrand>
          <Navbar.Toggle aria-controls="basic-navbar-nav"/>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <LinkContainer to="/">
                <Nav.Link>
                  Home
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/contacto">
                <Nav.Link>
                  Contacto
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/portafolio">
                <Nav.Link>
                  Portafolio
                </Nav.Link>
              </LinkContainer>
              <Nav.Link as={Link} to="/contacto">Contacto 2</Nav.Link> {/* Opción corta para usar links de Bootstrap, no necesita dependencias*/}
            </Nav>
          </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
        <Switch> {/* Switch valida la ruta en la que estamos actualmente */}
          <Route exact path='/'> {/*Exact nos manda exactamente a esa ruta */}
            <Home/>
          </Route>
          <Route exact path='/portafolio'>
            <Portafolio/>
          </Route>
          <Route exact path='/contacto'>
            <Contacto/>
          </Route>
          <Route path='/portafolio/:pid'>{/* pid es una variable que envía valores mediante URL */}
          <PortafolioDetalle />
        </Route>
          <Route path='*'> {/*Renderiza TODO lo que NO está especificado */}
            <Error404 />
          </Route>
        </Switch>
    </div>
  );
}

function Home(){
  return(
    <h1>Home</h1>
  );
}

function Portafolio(){
  return(
    <React.Fragment>
      <h1>Portafolio</h1>
      <Container>
        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>Pinterest</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </Card.Text>
            <Button as={Link} to='/portafolio/1' variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>Cajero</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </Card.Text>
            <Button as={Link} to='/portafolio/2' variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>Pokedex</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </Card.Text>
            <Button as={Link} to='/portafolio/3' variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>

      </Container>
    </React.Fragment>
  );
}

function PortafolioDetalle(){
  let {pid} = useParams(); {/* useParams es el HOOK que recibe el parámetro de pid */}
  let history = useHistory(); {/* Hook para usar el historial de la URL */}
  const proyectos = [
    { id: 1, nombre: "Pinterest", desc: "descripción" },
    { id: 2, nombre: "Cajero", desc: "descripción" },
    { id: 2, nombre: "Pokedex", desc: "descripción" }
  ]

  return(
    <React.Fragment>
      <h1>Detalle Portafolio</h1>
      <ul>
        <li>ID: {proyectos[pid -1].id}</li>
        <li>Nombre: {proyectos[pid -1].nombre}</li>
        <li>Descripción: {proyectos[pid -1].desc}</li>
      </ul>
      <Button variant= "danger" onClick={ ()=>{
        console.log(history);
        //history.push('/portafolio');
        history.goBack();
      }}>
        Regresar a portafolio
      </Button>

      {/*<Button variant= "danger" as={Link} to="/portafolio">
        Regresar a portafolio
      </Button> */}

      {/*<Link to='/portafolio' > Regresar </Link> */}{/* Esta es la forma oficial, si no se usa librería */}
    </React.Fragment>
  );
}

function Contacto(){
  return(
    <h1>Contacto</h1>
  );
}

function Error404(){
  let location = useLocation(); {/* useLocation Hook que nos trae información actual del path */}
  console.log(location);
  return(
    <React.Fragment>
      <h1>
        Error 404
      </h1>
      <p>
        No se encontró la ruta {location.pathname} {/*pathname contiene la ruta actual */}
      </p>
    </React.Fragment>
  );
}


export default App;
