import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { LoginForm } from '../../components/forms/LoginForm';
import { toast } from 'react-toastify';

export const LoginPage = () => {
  const { loginUser } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState('');

  const handleSubmit = async ({ username, password }) => {
    try {
      const success = await loginUser({ username, password });

      if (success) {
        toast.success("¡Bienvenido, JacoboRaboso! 🎉");
        navigate('/admin');
      } else {
        toast.error("Credenciales incorrectas ❌");
      }
    } catch (err) {
      console.error("Error real de login:", err);
      setError('Error al iniciar sesión');
      toast.error("Error de servidor ❌");
    }
  };

  return (
    <div className="w-full min-h-screen flex items-start justify-center mt-36">
        <LoginForm onSubmit={handleSubmit} />

        {error && <p className="text-red-500 text-center mt-4">{error}</p>}
      </div>
  );
};
