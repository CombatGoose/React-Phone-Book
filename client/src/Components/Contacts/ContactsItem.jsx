import s from './contacts.module.scss'
const ContactItem = (props) => { 
    return (
        <li className={s.list_item}>
            <p className={s.list_item_text}>{props.name}:{props.phone}</p>
        </li>
    )
}

export default ContactItem