import user from '../../../assets/user.png'
import './Message.scss';
const Message = ({ message }) => {
    return (
        <article className="message">
            <img className="message__icon" src={user} alt="An icon of the user" />
            <section className="message__text-container">
                <span className="message__top-container-flex">
                    <p className="message__user">{message.user}</p>
                </span>
                <h3 className="message__text">{message.text}</h3>
                <p className="message__added">{message.added}</p>
            </section>
      </article>
    )
}

export default Message
