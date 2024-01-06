'use client'

import { ALBUM } from "@/app/lib/placeholder-data"
import 'bootstrap/dist/css/bootstrap.min.css'

export default function Album() {
    
    const playAudio = async (rute, name) => {
        try {
            const audio = new Audio(rute);

            // Esperar a que se cargue el audio antes de intentar reproducirlo
            await new Promise((resolve, reject) => {
                audio.addEventListener('loadeddata', resolve);
                audio.addEventListener('error', reject);
            });

            // Reproducir el audio después de que se ha cargado
            audio.play();
            console.log(`Reproduciendo... ${name}`);
        } catch (error) {
            console.error('Error al cargar o reproducir el audio:', error);
        }
    };

    return (
        <>
            <table className="table  table-striped">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Time</th>
                        <th>Play</th>
                    </tr>
                </thead>
                <tbody>
                    {ALBUM.map((track) => {
                        return (
                            <tr key={track.id}>
                                <td>{track.id}</td>
                                <td>{track.name}</td>
                                <td>{track.time}</td>
                                <td>
                                    <button onClick={() => playAudio(track.rute, track.name)}>Play</button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </>
    );
}
