import ContactItem from './ContactsItem'
import s from './contacts.module.scss'
const Contacts = (props) => { 
    const handleDeleteItem = (idToDelete) => {
        const newList = props.list.filter(item => item.id !== idToDelete)
        props.reRender(newList)
    }
    const handleChangeReputation = (contactId, method) => {
        const newList = props.list.map(el => {
            if (el.id === contactId) {
                if (method === 'plus') {
                    el.reputation += 1
                } else {
                    el.reputation -= 1
                }
            }
            return el
        })
        props.reRender(newList)
    }

    const ContactsCollection = props.list.map(el => {
        return (
            <ContactItem
                key={el.id}
                id = {el.id}
                name={el.name}
                phone={el.phone}
                handleDeleteItem = {() =>
                    handleDeleteItem(el.id)
                }
                reputation={el.reputation}
                handleChangeReputation = {handleChangeReputation}
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