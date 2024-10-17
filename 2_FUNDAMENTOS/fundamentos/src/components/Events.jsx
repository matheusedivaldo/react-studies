const Events = () => {

    const handleMyEvent = (e) => {
        console.log(e);
    };

    return (
        <div>
            <div>
                <button onClick={handleMyEvent}>Clique aqui!</button>
            </div>
            <div>
                <button onClick={() => console.log("Clicou!")}>Função direto do botão.</button>
                <button onClick={() => {
                    if (true) {
                        console.log("Isso não deveria existir :).")
                    }
                }}>Maneira errada.</button>
            </div>
        </div>
    )
}

export default Events;