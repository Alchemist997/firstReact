import css from './Messages.module.css'
import { NavLink } from "react-router-dom"

const DialogItem = props => {
    return <NavLink to={`/messages/${props.id}`} className={css.dialog}>
        <div>{props.name}</div>
        <div>{props.text}</div>
    </NavLink>
}

const DialogItems = props => {
    return props.data.map(el => <DialogItem name={el.name} text={el.text} id={el.id} />)
}

let Messages = props => {
    return <div className={css.messages}>
        <DialogItems data={props.data} />
    </div>
}

export default Messages