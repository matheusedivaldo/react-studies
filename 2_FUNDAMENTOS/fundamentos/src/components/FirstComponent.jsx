import MyComponent from "./MyCOmponent";

//Arquivos de Estilo
const FirstComponent = () => {
    /*
    Multi Linha
    */
    return (
        <div>
            {/*Comentários dentro do JSX*/}
            <h1>Meu primeiro componente.</h1>
            <p className="teste">Meu Texto.</p>
            <MyComponent/>
        </div>
    )
}

export default FirstComponent;