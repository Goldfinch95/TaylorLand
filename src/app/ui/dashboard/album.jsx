'use client'
import { useState, useRef } from 'react';
import { ALBUM } from "@/app/lib/placeholder-data";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Icon } from '@iconify/react';
import playIcon from '@iconify/icons-mdi/play';
import pauseIcon from '@iconify/icons-mdi/pause';

export default function Album() {
    const [audioPlaying, setAudioPlaying] = useState(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);

    const playAudio = (route) => {
        if (audioRef.current) {
            audioRef.current.src = route;
            if(!isPlaying){
                audioRef.current.play();
                setAudioPlaying(route);
                setIsPlaying(true)
            }
            else{
                audioRef.current.pause();
                setIsPlaying(false)
            }
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
                    {ALBUM.map((track) => (
                        <tr key={track.id}>
                            <td>{track.id}</td>
                            <td>{track.name}</td>
                            <td>{track.time}</td>
                            <td>
                            <button onClick={() => playAudio(track.route)}>
                            <Icon icon={isPlaying && audioPlaying === track.route ? pauseIcon : playIcon} />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <audio ref={audioRef} autoPlay={false} controls={false} />
        </>
    );
}

