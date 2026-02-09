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
import { useNavigate } from "react-router-dom";

function App() {
  const inputName = useRef();
  const inputAge = useRef();
  const inputEmail = useRef();

  const navigate = useNavigate();

  async function registerUser() {
    const data = await api.post("/user", {
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
              Name<span>*</span>
            </InputLabel>
            <Input type="text" placeholder="Name" ref={inputName} />
          </div>

          <div>
            <InputLabel>
              Age<span>*</span>
            </InputLabel>
            <Input type="number" placeholder="Age" ref={inputAge} />
          </div>
        </ContainerInputs>

        <div style={{ width: "100%" }}>
          <InputLabel>
            Email<span> *</span>
          </InputLabel>
          <Input type="email" placeholder="Email" ref={inputEmail} />
        </div>
        <Button type="button" onClick={registerUser} theme="primary">
          Register User
        </Button>

        <Button type="button" onClick={() => navigate("/users")}>
          Show user list
        </Button>
      </Form>
    </Container>
  );
}

export default App;
