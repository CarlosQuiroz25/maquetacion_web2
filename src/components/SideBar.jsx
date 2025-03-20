"use client";

const enlaces = [
    { id: 1, nombre: 'Inicio', ruta: '/' },
    { id: 2, nombre: 'Perfil', ruta: '/' },
    { id: 3, nombre: 'Cursos', ruta: '/' },
    { id: 4, nombre: 'Cerrar sesión', ruta: '/' }
];

export const SideBar = () => {
    return (
        <aside className="panel-control-aside">
            <div>
                <img src="/public/perfil.png" alt="Perfil" />
            </div>
            <nav>
                {enlaces.map((enlace) => (
                    <a href={enlace.ruta} key={enlace.id}>{enlace.nombre}</a>
                ))}      
            </nav>
        </aside>
    );
};
