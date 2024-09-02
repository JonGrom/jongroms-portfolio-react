export default function ContactPage(props){
    //TODO: make form
    //{fields: name, email, message}
    return(
        <div className="row d-flex justify-content-center" id="contact">
            <h4>Contact</h4>
            <form className="col-4 d-flex flex-column">
                <label className="pt-2" for="name">Name:</label>  
                <input type="text" id="name"/> 

                <label className="pt-2" for="email">Email:</label>
                <input type="text" id="email"/>

                <label className="pt-2" for="title">Message:</label> 
                <textarea name="message" id="message"/>
                
                <div className="pt-2 pb-2">
                    <input type="button" value="Send" id="btn"/>  
                </div>
            </form>

        </div>
    )
}