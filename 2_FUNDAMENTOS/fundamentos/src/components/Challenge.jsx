const Challenge = () => {

    const valorA = 10;
    const valorB = 20;

    return (
        <div>
            <p>Primeiro valor é: {valorA}, o segundo é {valorB}.</p>
            <button onClick={() => { console.log(valorA + valorB); }}>Somar</button>
        </div>
    )
}

export default Challenge;