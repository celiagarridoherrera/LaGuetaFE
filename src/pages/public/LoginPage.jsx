import { LoginForm } from "../../components/forms/LoginForm"

export const LoginPage = () => {
    const handleLogin = ({ username, password }) => {
        console.log("Login intentado con:", { username, password })
        // Aqui endpoint para enviar el login
    }
    return (
        <div className="w-full min-h-screen flex items-start justify-center mt-36" >
            <LoginForm  onSubmit={handleLogin} />
        </div>
    )
}