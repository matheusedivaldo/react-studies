const TemplateExpressions = () => {

    const name = "Matheus Edivaldo";
    const data = {
        age: 19,
        job: "Systems developer",
    }

    return (
        <div>
            <p>Olá {name}, tudo bem?</p>
            <p>Você tem {data.age} anos e atua como {data.job}.</p>
            <p>{10 / 2}</p>
            <p>{console.log("JSX React")}</p>
        </div>
    );
};


export default TemplateExpressions;