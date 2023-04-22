

const ContactsIcons = ({ item }) => {

    return (
      <article className="col-lg-4 col-md-4 flexy-col">
            <aside className="center-col">
              <h5>{item.name}</h5>
              <img src={item.img} alt="contact-icon" />
              <p>{item.detail}</p>
            </aside>
      </article>
    )
  }
  
  export default ContactsIcons;