import { useParams } from 'react-router-dom';

export function Profile(){
  const { id } = useParams<{ id: string }>();
  return (
    <div className='base-div'>
      <p>Perfil do usuário {id}</p>
    </div>
  );
}
