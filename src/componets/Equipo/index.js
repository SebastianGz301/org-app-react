import "./Equipo.css";
import Colabolador from "../Colaboradores";
import hexToRgba from "hex-to-rgba";

const Equipo = (props) =>{

    //Destructuracion
    const {colorPrimario, colorSecundario, titulo, id} = props.datos
    const {colaboradores, eliminarColaborador, actualizarColor, like} = props  

    const obj={
        backgroundColor: hexToRgba(colorPrimario, 0.5)
    }

    const estiloTitulo = {borderColor: colorPrimario}


    return <>
    { 
        colaboradores.length > 0 &&
        <section className="equipo" style={obj}>
        <input
            type="color"
            className="input-color"
            value={hexToRgba(colorPrimario, 0.5)}
            onChange={(e) => actualizarColor(e.target.value, id)}
        
        
        />
        <h3 style={estiloTitulo}>{titulo}</h3> 
        <div className="colaboradores">
            {
                colaboradores.map( (colaborador, index) =><Colabolador
                datos={colaborador} 
                key={index} 
                colorPrimario={colorPrimario}
                eliminarColaborador={eliminarColaborador}
                like={like}
                />
            ) 
            }
        </div>
    </section>
    }</>
}


export default Equipo;