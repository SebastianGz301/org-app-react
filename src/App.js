import './App.css';
import Header from './componets/Header/Header';
import Formulario from './componets/Formulario/Form';
import Miorg from './componets/MiOrg';
import { useState } from 'react';
import Equipo from './componets/Equipo';
import Footer from './componets/Footer';
import { v4 as uuidv4 } from 'uuid';


function App() {
  
  const [mostrarFormulario,actualizarMostrar] = useState(false);
  const [colaboradores,actualizarColaboradores] = useState([{
    id: uuidv4(),
    team: "Programación",
    foto: "https://github.com/SebastianGz301.png",
    nombre: "Sebastian Gomez",
    puesto: "Desarrollador Junior",
    fav: true
  },
  {
    id: uuidv4(),
    team: "Front End",
    foto: "https://github.com/harlandlohora.png",
    nombre: "Harland Lohora",
    puesto: "Instructor",
    fav: true
  },
  {
    id: uuidv4(),
    team: "Front End",
    foto: "https://github.com/christianpva.png",
    nombre: "Christian Velasco",
    puesto: "Head de Alura e Instructor",
    fav: true
  },
  {
    id: uuidv4(),
    team: "Data Science",
    foto: "https://github.com/JoseDarioGonzalezCha.png",
    nombre: "Jose Gonzalez",
    puesto: "Dev. FullStack",
    fav: false
  },
  {
    id: uuidv4(),
    team: "Data Science",
    foto: "https://github.com/christianpva.png",
    nombre: "Christian Velasco",
    puesto: "Head de Alura e Instructor",
    fav: true
  },
  {
    id: uuidv4(),
    team: "Data Science",
    foto: "https://github.com/genesysR-dev.png",
    nombre: "Genesys Rondón",
    puesto: "Desarrolladora de software e instructora",
    fav: false
  },
  {
    id: uuidv4(),
    team: "Devops",
    foto: "https://github.com/christianpva.png",
    nombre: "Christian Velasco",
    puesto: "Head de Alura e Instructor",
    fav: false
    
  },
  {
    id: uuidv4(),
    team: "Devops",
    foto: "https://github.com/harlandlohora.png",
    nombre: "Harland Lohora",
    puesto: "Instructor",
    fav: false
  },
  {
    id: uuidv4(),
    team: "Devops",
    foto: "https://github.com/genesysR-dev.png",
    nombre: "Genesys Rondón",
    puesto: "Desarrolladora de software e instructora",
    fav: false
  },
  {
    id: uuidv4(),
    team: "Devops",
    foto: "https://github.com/JeanmarieAluraLatam.png",
    nombre: "Jeanmarie Quijada",
    puesto: "Instructora en Alura Latam",
    fav: false
  }
  
]);


  //Equipos
  const [equipos, actualizarEquipos] = useState([
    {
      id: uuidv4(),
      titulo:"Programación",
      colorPrimario:"#57C278",
      colorSecundario: "#D9F7E9"
    },
    {
      id: uuidv4(),
      titulo:"Front End",
      colorPrimario:"#82CFFA",
      colorSecundario: "#E8F8FF"
    },
    {
      id: uuidv4(),
      titulo:"Data Science",
      colorPrimario:"#A6D157",
      colorSecundario: "#F0F8E2"
    },
    {
      id: uuidv4(),
      titulo:"Devops",
      colorPrimario:"#E06B69",
      colorSecundario: "#FDE7E8F"
    },
    {
      id: uuidv4(),
      titulo:"UX y diseño",
      colorPrimario:"#DB6EBF",
      colorSecundario: "#FAE9F5"
    },
    {
      id: uuidv4(),
      titulo:"Móvil",
      colorPrimario:"#FFBA05",
      colorSecundario: "#FFF5D9"
    },
    {
      id: uuidv4(),
      titulo:"Innovación Y Gestión",
      colorPrimario:"#FF8A29",
      colorSecundario: "#FFEEDF"
    }
])

  //Ternario --> condicion ? seMuestra : noSeMuestra
  //Condicion && seMuestra

  const cambiarMostrar = () =>{
    actualizarMostrar(!mostrarFormulario)
  }
  
  //Registrar Colaborador
  const registrarColaborador = (colaborador) => {
    console.log("Nuevo Colaborador:", colaborador);
    //Spread Operator
    actualizarColaboradores([...colaboradores, colaborador])
  }

  //Eliminar Colaborador
  const eliminarColaborador = (id) => {
    console.log("Colaborador Eliminado:", id);
    const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id !== id)
    actualizarColaboradores(nuevosColaboradores)
  }

  //Actualizar Color
  const actualizarColor = (color, id) => {
    console.log("Nuevo Color:", color, id);
    const equiposActualizados = equipos.map((equipo) =>{
      if(equipo.id === id){
        equipo.colorPrimario = color
      }
      return equipo
    })
    actualizarEquipos(equiposActualizados)
  }


    //Crear Equipo
    const crearEquipo = (nuevoEquipo) =>{
    actualizarEquipos([...equipos, {...nuevoEquipo, id: uuidv4()}])

    }

    //Like
    const like = (id) => {
    const colaboradesActualizados = colaboradores.map((colaborador) =>{
      if(colaborador.id === id){
        colaborador.fav = !colaborador.fav
      }
      return colaborador
    })
      actualizarColaboradores(colaboradesActualizados)
    }

  return (
    <div>
      <Header/>
      {mostrarFormulario && <Formulario
          equipos={equipos.map((equipo) => equipo.titulo)}
          registrarColaborador={registrarColaborador}
          crearEquipo={crearEquipo}
          />
        }
      
      
      <Miorg cambiarMostrar={cambiarMostrar}/> 
      
      { 
        equipos.map( (team) =><Equipo
        datos={team} 
        key={team.titulo}
        colaboradores={colaboradores.filter(colaborador => colaborador.team === team.titulo)}
        eliminarColaborador={eliminarColaborador}
        actualizarColor={actualizarColor}
        like={like}
        />
      )
      }
    <Footer/>
    </div>
  );
}

export default App;
