import { Aside } from "./components/Aside";
import Card from "./components/Card";
import { Container } from "./components/Container";
import { Main } from "./components/Main";
import { SearchInput } from "./components/SearchInput";
import { Typography } from "./components/Typography";

function App() {
  return (
    <Container>
      <Aside />
      <Main>
        <SearchInput />
        <Typography variant="h1">
          Olá, Vinny!
        </Typography>
        <Typography variant="body">
          Veja como estão suas finanças hoje.
        </Typography>
        <section className="card-section"> 
          <Card>
            <Card.Header>
              Orçamento diário disponível:
            </Card.Header>
            <Card.Body>
              R$ 200,00
            </Card.Body>
          </Card>
          <Card>
            <Card.Header>
              Orçamento diário disponível:
            </Card.Header>
            <Card.Body>
              R$ 200,00
            </Card.Body>
          </Card>
          <Card>
            <Card.Header>
              Orçamento diário disponível:
            </Card.Header>
            <Card.Body>
              R$ 200,00
            </Card.Body>
          </Card>
          <Card>
            <Card.Header>
              Orçamento diário disponível:
            </Card.Header>
            <Card.Body>
              R$ 200,00
            </Card.Body>
          </Card>
        </section>
      </Main>
    </Container>
  );
}

export default App;
