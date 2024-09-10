import { useState } from "react"

export default function ContactPage(props){
    //TODO: make form
    //{fields: name, email, message}
    const [ inputObj, setInputObj ] = useState({name: '', email: '', message: ''})
    const [ invalidMsg, setInvalidMsg ] = useState('')
    const [ message, setMessage ] = useState({name: '', email: '', message: ''})

    //update input object as user types
    function handleInputChange(event){
        //set input object to user input
        // setInputObj({...inputObj, [event.target.name]: event.target.value})

        setInputObj( (prev) => {
            const newState = {...prev, [event.target.name]: event.target.value }
            return newState
        })
        if(event.target.value.length>0){
            setMessage({...message, [event.target.name]: ""})
        }
    }

    //Warn user that field is required when cursor leaves

    function handleBlur(event){
        if(!inputObj[event.target.name].length){
            setMessage({...message, [event.target.name]: 'This field cannot be empty'})
        }
        
    }

    //validate form on submit
    function validateForm(){
        const regex = /.+\@.+\..+/
        if(!inputObj.name || !inputObj.message || !inputObj.email){
            setInvalidMsg('Please fill out all form fields')
        } else if (!inputObj.email.match(regex)){
            setInvalidMsg('Invalid email')
        } else {
            setInvalidMsg('Message sent!')
            handleSubmit()
        }
    }

    function handleSubmit(){
        setInputObj({name: '', email: '', message: ''})
    }


    return(
        <div className="row d-flex" id="contact">
            <h4>Contact</h4>
            <form className="col-sm d-flex flex-column">
                <label className="pt-2" htmlFor="name">Name:</label>  
                <input value={inputObj.name} type="text" name="name" autoComplete="name" onChange={handleInputChange} onBlur={handleBlur} />
                {message.name.length>0 && (
                    <span className="warn">{message.name}</span>
                )}   

                <label className="pt-2" htmlFor="email">Email:</label>
                <input value={inputObj.email} type="text" name="email" autoComplete="email" onChange={handleInputChange} onBlur={handleBlur}/>
                {message.email.length>0 && (
                    <span className="warn">{message.email}</span>
                )}

                <label className="pt-2" htmlFor="message">Message:</label> 
                <textarea value={inputObj.message} name="message" id="message" onChange={handleInputChange} onBlur={handleBlur}/>
                {message.message.length>0 && (
                    <span className="warn">{message.message}</span>
                )}
                
                <div className="pt-2 pb-2   ">
                    <input type="button" value="Send" id="btn" onClick={() => validateForm(inputObj)}/> 
                    {invalidMsg.length>0 && (
                         <span className="warn">{invalidMsg}</span>
                    )} 
                </div>
            </form>

        </div>
    )
}