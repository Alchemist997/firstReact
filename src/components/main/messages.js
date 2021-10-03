import css from './Messages.module.css'
import { NavLink } from "react-router-dom"

const Dialogsdata = [
    {id: 997, name: 'Dimon', text: 'Hi bro'},
    {id: 9972, name: 'Dimson', text: 'What\'s up?'},
    {id: 9973, name: 'Dimas', text: 'Nice'}
]

const DialogItem = props => {
    return <NavLink to={`/messages/${props.id}`} className={css.dialog}>
        <div>{props.name}</div>
        <div>{props.text}</div>
    </NavLink>
}

const DialogItems = Dialogsdata
.map( el => <DialogItem name={el.name} text={el.text} id={el.id} />)

let messages = () => <div className={css.messages}>
    {DialogItems}
</div>

export default messages