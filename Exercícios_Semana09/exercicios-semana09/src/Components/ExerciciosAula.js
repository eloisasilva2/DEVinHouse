import { useState, useRef } from "react";
import {Timer} from './style2.js';

export default function Cronometro() {

    const [timer, setTimer]= useState(0)

    const meuContadorId = useRef();

    function iniciarContagem() {
        meuContadorId.current = setInterval(() => {
            setTimer(prev => prev + 1)
        }, 1000);
    }

    function pausarContagem() {
        clearInterval(meuContadorId.current)
    }
    return (
        <div style={{'display': 'block', 'width': '240px','margin': '0 auto', 'textAlign': 'center', 'transform': 'scale(2) translateY(50%)'}}>
            <Timer value={timer}>{timer}</Timer>
            <button onClick={iniciarContagem}>Iniciar</button>
            <button onClick={pausarContagem}>Pausar</button>
        </div>
    );
}