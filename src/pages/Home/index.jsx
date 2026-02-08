import {
  Container,
  ContainerInputs,
  Form,
  Input,
  InputLabel,
  Title,
} from "./styles";
import { useRef } from "react";
import api from "../../services/api";
import Button from "../../components/Button";
import TopBackground from "../../components/TopBackground";

function App() {
  const inputName = useRef();
  const inputAge = useRef();
  const inputEmail = useRef();

  async function registerUser() {
    const data = await api.post("/users", {
      name: inputName.current.value,
      age: inputAge.current.value,
      email: inputEmail.current.value,
    });

    console.log(data);
  }

  return (
    <Container>
      <TopBackground />

      <Form>
        <Title>Cadastrar Usuário</Title>

        <ContainerInputs>
          <div>
            <InputLabel>
              Nome<span>*</span>
            </InputLabel>
            <Input type="text" placeholder="Nome do usuário" ref={inputName} />
          </div>

          <div>
            <InputLabel>
              Idade<span>*</span>
            </InputLabel>
            <Input
              type="number"
              placeholder="Idade do usuário"
              ref={inputAge}
            />
          </div>
        </ContainerInputs>

        <div style={{ width: "100%" }}>
          <InputLabel>
            Email<span> *</span>
          </InputLabel>
          <Input
            type="email"
            placeholder="E-mail do usuário"
            ref={inputEmail}
          />
        </div>
        <Button type="button" onClick={registerUser}>
          Cadastrar Usuário
        </Button>
      </Form>
    </Container>
  );
}

export default App;
