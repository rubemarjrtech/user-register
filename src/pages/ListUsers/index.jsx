import { useEffect, useState } from "react";
import { Button } from "../../components/Button/styles";
import TopBackground from "../../components/TopBackground";
import api from "../../services/api";
import {
  AvatarUser,
  CardUsers,
  Container,
  ContainerUsers,
  Title,
  TrashIcon,
} from "./styles";
import Trash from "../../assets/trash.svg";
import { useNavigate } from "react-router-dom";

function ListUsers() {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function getUsers() {
      const { data } = await api.get("/users");
      setUsers(data);
    }
    getUsers();
  }, []);

  async function deleteUser(id) {
    await api.delete(`/user/${id}`);

    const updatedUsers = users.filter((user) => user.id !== id);
    setUsers(updatedUsers);
  }

  return (
    <Container>
      <TopBackground />
      <Title>User List</Title>
      <ContainerUsers>
        {users.map((user) => (
          <CardUsers key={user.id}>
            <AvatarUser src={`https://ui-avatars.com/api/?name=${user.name}`} />
            <div>
              <h3>{user.name}</h3>
              <p>{user.age}</p>
              <p>{user.email}</p>
            </div>
            <TrashIcon
              src={Trash}
              alt="trash-icon"
              onClick={() => deleteUser(user.id)}
            />
          </CardUsers>
        ))}
      </ContainerUsers>
      <Button type="button" onClick={() => navigate("/")}>
        Back
      </Button>
    </Container>
  );
}

export default ListUsers;
