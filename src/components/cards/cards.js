import Card from '../card/card'

const cardsTitle = ['Título card 1', 'Título card 2', 'Título card 3']

const showCardColor = (color) => {
    console.log(color);
    
}

const Cards = () => {
    return (
        <div>
            <h2>Meus Cards</h2>

            <div>
                {

                    cardsTitle.map((cardTitle, index) =>(
                    
                        <Card key={index} showCardColor={showCardColor}>
                            <h3>{cardTitle}</h3>
                            <p>esse é um texto do card 1</p>
                        </Card>
                    )
                    )
                }

                        <Card color='blue'showCardColor={showCardColor}>
                            <h3>Card com fundo azul</h3>
                            <p>esse é um texto do card 1</p>
                        </Card>
            </div>

        </div>
    )
}

export default Cards