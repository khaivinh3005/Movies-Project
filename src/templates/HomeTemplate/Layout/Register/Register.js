import React from 'react'

export default function Register() {
    return (
        <div className=" flex items-center justify-center">
            <form id="form" className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="text-center text-2xl">REGISTER</div>
                <br />
                <h1 className="block text-gray-700 font-bold mb-2 text-xl text-center">CUESTIONARIO DE PREGUNTAS Y ENVÍO POR WHATSAPP</h1>
                <br />
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                        Nombre
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="name" id="name" type="text" placeholder="Ingresa tu nombre" required />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                        Número de Celular
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="tel" id="tel" type="tel" placeholder="Ingresa tu Número de Celular" required />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                        Correo
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="email" id="email" type="email" placeholder="Ingresa tu correo" required />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Date">
                        Fecha
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="date" id="date" type="date" placeholder="Ingresa tu Fecha de Nacimiento" required />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                        ¿Pregunta 01?
                    </label>
                    <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="message1" id="message1" type="text" placeholder="Escríbe tu respuesta Aquí..." required defaultValue={""} />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                        ¿Pregunta 02?
                    </label>
                    <textarea className="bshadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="message2" id="message2" type="text" placeholder="Escríbe tu respuesta Aquí..." required defaultValue={""} />
                </div>
                <div className="flex items-center justify-between">
                    <button id="submit" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                        <i className="fab fa-whatsapp" /> Enviar a WhatsApp
                    </button>
                </div>
                <div className="mb-4">
                </div></form>
        </div>

    )
}
