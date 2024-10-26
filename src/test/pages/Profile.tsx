import { useParams } from 'react-router-dom';

export function Profile(){
  const { id } = useParams<{ id: string }>();
  return <p>Perfil do usuário {id}</p>;
}
