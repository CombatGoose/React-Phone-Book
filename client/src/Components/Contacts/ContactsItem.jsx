import s from './contacts.module.scss'

const ContactItem = (props) => { 
    return (
        <li className={s.list_item}>
            <p className={s.list_item_text}>{props.name}:{props.phone}</p>
            <button onClick={props.handleDeleteItem}>Delete</button>
            <p>Reputation:{props.reputation}</p>
            <div className={s.flex}>
                <button
                onClick={() => {
                     props.handleChangeReputation(props.id, 'minus')

                }}
                >
                - </button>
                <button
                onClick={() => {
                    props.handleChangeReputation(props.id, 'plus')
                }}
                >
                + </button>
            </div>
        </li>
    )
}

export default ContactItem