import { useParams } from 'react-router-dom';

export function Profile(){
  const { id } = useParams<{ id: string }>();
  return (
    <div className='base-div'>
      <h1>Perfil do usuário {id}</h1>
    </div>
  );
}
