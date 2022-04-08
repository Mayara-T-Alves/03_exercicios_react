import { useState } from "react";
import DraSabrina from "../../assets/images/Dra.Sabrina.jpg";
import DrJoao from "../../assets/images/Dr.Joao.jpg";
import "../../assets/css/medicos/index.css";

function Medicos(){
    //Usando a função useState  para declarar um array de objetos "privada"
    const [medicos, setMedicos] = useState([
        {"nome": "Dra.Sabrina", "foto": DraSabrina }, 
        {"nome": "Dr.Joao", "foto": DrJoao },  
        {"nome": "Dra.Pamela", "foto": "https://telemedicinamorsch.com.br/wp-content/uploads/2018/05/carreira-medica.jpg"}
    ])

    const [style, setStyle] = useState({ //Declaraçã da JSON para criação de CSS
        "conteiner_main":{
            "margin":"2% 2%",
            "display": "flex",
            "flex-direction": "column",
            "align-items": "center",
            "border": "1px solid black",
            "border-radius": "5px",
            "background-color": "rgb(223, 223, 223)"
        }
    })
    return(
    <>
    <div style={style.conteiner_main}> {/*Style recebido pelo JSON acima*/}
        <h1>Profissionais da Saúde</h1>
        <div style={{"display":"flex", //CSS inline
                "justify-content":"space-around",
                "border": "1px solid black", 
                "border-radius": "5px",   
                "margin":"2em 2em",
                "width":"90%"}}>
            {/*loop dentro do array medicos retornando uma div para cada objeto*/}
            {medicos.map((medico, index)=> {
                return(
                <div key={index} className="medico_conteiner">
                    <img src={medico.foto} alt="" className="medico_foto"/>
                    <p className="medico_name">{medico.nome}</p>
                </div>)
            })}     
        </div>
    </div>
    </>
    )
}

export default Medicos;
