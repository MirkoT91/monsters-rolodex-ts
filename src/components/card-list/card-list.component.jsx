
import Card from '../card/card.component.jsx';

import './card-list.styles.css';

const CardList = ({ monsters }) => {

    const { id } = monsters;
    return (
        <div className="card-list">
            {monsters.map((monster) => {

                return (
                    <Card monster={monster} key={id}/>
                )
            })}
        </div>
    )
}
export default CardList;