import React from 'react'

import Primeiro from "./components/basico/Primeiro";
import ComParametro from "./components/basico/ComParametro";
import Fragmento from "./components/basico/Fragmento";

export default () => (

    <div id="app">
        <h1>Fundamentos React</h1>
        <Fragmento> </Fragmento>

        <ComParametro
            titulo="Situação do aluno"
            subtitulo="Pedro Silval"
            nota={9.3}>    </ComParametro>
        <Primeiro> </Primeiro>

    </div>
);