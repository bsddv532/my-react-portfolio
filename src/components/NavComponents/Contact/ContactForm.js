import React, {useState} from 'react'
import style from './Contact.module.css'

const ContactForm = () => {

    const [data, setData] = useState([]);
    const [fullName, setFullName] = useState('');
    const [number, setNumber] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');


    const formSubmit = e => {
        e.preventDefault();
        if (fullName && number && email && message) {
            setData([...data, { fullName, number, email, message }]);
            setFullName('');
            setNumber('');
            setEmail('');
            setMessage('')
            alert(`Thank you ${fullName} for your response.`);
        } else {
            alert('Please fill the required fields....')
        } 
        
    }

    return (
        <div className={style.main}>
            <div className={style.ContactForm}>
                <p>Send me a message</p>

                <form onSubmit={formSubmit}>
                    <div>
                        <label htmlFor='name'>First & Last Name <span>*</span></label><br />
                        <input type="text" name="name" value={fullName} onChange={e => setFullName(e.target.value)} />
                    </div>

                    <div>
                        <label htmlFor='mob'>Phone number <span>*</span></label><br />
                        <input type="text" name="mob" value={number} onChange={e => setNumber(e.target.value)} />
                    </div>

                    <div>
                        <label htmlFor='mail'>Email address <span>*</span></label><br />
                        <input type="text" name="mail" value={email} onChange={e => setEmail(e.target.value)}/>
                    </div>

                    <div>
                        <label htmlFor='message'>Message <span>*</span></label><br />
                        <textarea name='message' placeholder='Your message here' value={message} onChange={e => setMessage(e.target.value)}></textarea>
                    </div>

                    <input type="submit" value="Send Messsage" className={style.submitBtn} />
                </form>
            </div>

        </div>
    )
}

export default ContactForm