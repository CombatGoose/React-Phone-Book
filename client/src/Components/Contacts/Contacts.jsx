import ContactItem from './ContactsItem'
import s from './contacts.module.scss'
const Contacts = (props) => { 
    const ContactsCollection = props.list.map(el => {
        return (
            <ContactItem
                key={el.id}
                name={el.name}
                phone={el.phone}
            />
        )
    })
    return ( 
        <ul className={s.list}>
            {ContactsCollection}
        </ul>
    )
}

export default Contacts