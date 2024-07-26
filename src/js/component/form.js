import React from 'react';

export const Form = () => {
    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        
        try {
            const response = await fetch('https://ominous-space-happiness-6rpj574vpwr3xqgp-5000.app.github.dev/saludar', {
                method: 'POST',
                body: formData
            });
            
            if (!response.ok) {
                throw new Error('Error al enviar el formulario');
            }
            
            const data = await response.json();
            alert(data.message); // Muestra el mensaje recibido desde el backend

            // Aquí puedes manejar la respuesta del servidor si es necesario
            alert('Formulario enviado correctamente');
        } catch (error) {
            alert('Error al enviar el formulario:', error);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="What's your name" />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};
