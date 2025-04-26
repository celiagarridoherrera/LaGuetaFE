import { useState } from 'react'

export const LoginForm = ({ onSubmit }) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        onSubmit?.({ username, password })
        setUsername('')
        setPassword('')
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="bg-form-public p-14 sm:p-20 rounded-2xl shadow-xl max-w-2xl w-full"
        >
            <label className="block text-text1-public font-primary mb-4 sm:text-[2rem] lg:text-[2.5rem]">
                Usuario
            </label>
            <input
                type="text"
                placeholder="Nombre de usuario"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="font-secondary text-lg sm:text-xl mb-8 p-4 border border-gray-300 rounded-xl w-full focus:outline-none focus:ring-2 focus:ring-color1-public text-black"
                required
                autoFocus
            />

            <label className="block text-text1-public font-primary mb-4 sm:text-[2rem] lg:text-[2.5rem]">
                Contraseña
            </label>
            <input
                type="password"
                placeholder="Tu contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="font-secondary text-lg sm:text-xl mb-8 p-4 border border-gray-300 rounded-xl w-full focus:outline-none focus:ring-2 focus:ring-color1-public text-black"
                required
            />

            <button
                type="submit"
                className="w-[60%] mx-auto block bg-buttons-public text-white font-primary text-[1.5rem] py-3 rounded-xl hover:bg-text2-public hover:text-buttons-public transition duration-300"
            >
                Acceder
            </button>
        </form>
    )
}
