

const ContactForm = ({handler}) => {
  
  const handlerFrom = e => {
    e.preventDefault();
    handler();
  }

  return (
    <aside>
      <form>
          <div className="flexy-col">
              <label>Name</label>
              <input type="text" placeholder="Please add name here.." />
          </div>
          <div className="flexy-col">
              <label>Number / Email</label>
              <input type="text" placeholder="Please add email/numbers here.." />
          </div>
          <div className="flexy-col">
              <label>Messsage</label>
              <textarea rows="10" placeholder="How may we help you ?"></textarea>
          </div>
          <div className="flexy-col">
            <button style={{
              pointerEVent : "none",
              opacity : "0.4",
              cursor : "cell !important"
            }}>Send</button>
          </div>
      </form>
    </aside>
  )
}

export default ContactForm;