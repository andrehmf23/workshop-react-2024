import { useNavigate } from 'react-router-dom';

const SomeComponent: React.FC = () => {
  const navigate = useNavigate();

  const goToContact = () => {
    navigate('/contact');
  };

  return <button onClick={goToContact}>Ir para Contato</button>;
}