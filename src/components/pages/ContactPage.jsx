import { useState } from "react"

export default function ContactPage(props){
    //TODO: make form
    //{fields: name, email, message}
    const [ inputObj, setInputObj ] = useState({name: '', email: '', message: ''})
    const [warningObj, setWarningObj] = useState({})
    const [ invalidMsg, setInvalidMsg ] = useState('')

    //update input object as user types
    function handleInputChange(event){
        //set input object to user input
        setInputObj({...inputObj, [event.target.name]: event.target.value})
        console.log(inputObj[event.target.name])
    }

    //Warn user that field is required when cursor leaves

    function mouseLeaveWarn(event){
        
    }
    //validate form on submit
    function validateForm(){
        const regex = /.+\@.+\..+/
        if(!inputObj.name || !inputObj.message || !inputObj.email){
            setInvalidMsg('Please fill out all form fields')
        } else if (!inputObj.email.match(regex)){
            setInvalidMsg('Invalid email')
        } else {
            handleSubmit()
        }
        console.log(invalidMsg)
    }

    function handleSubmit(){
        console.log('FORM SUBMITTED!')
    }


    return(
        <div className="row d-flex justify-content-center" id="contact">
            <h4>Contact</h4>
            <form className="col-4 d-flex flex-column">
                <label className="pt-2" htmlFor="name">Name:</label>  
                <input value={inputObj.name} type="text" id="name" autoComplete="name" onChange={handleInputChange} /> 

                <label className="pt-2" htmlFor="email">Email:</label>
                <input value={inputObj.email} type="text" id="email" autoComplete="email" onChange={handleInputChange} />

                <label className="pt-2" htmlFor="message">Message:</label> 
                <textarea value={inputObj.message} name="message" id="message" onChange={handleInputChange} />
                
                <div className="pt-2 pb-2">
                    <input type="button" value="Send" id="btn" onClick={() => validateForm(inputObj)}/>  
                </div>
            </form>

        </div>
    )
}