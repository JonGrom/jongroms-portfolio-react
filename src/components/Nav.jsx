import { Link } from "react-router-dom"
import { useState } from "react"

export default function Nav(props){
    //Menu for rendering nav items
    const menu = [
        { id: 0, label: 'About Me', href: "/"},
        { id: 1, label: 'Contact', href: "/contact"},
        { id: 2, label: 'Portfolio', href: "/portfolio"},
        { id: 3, label: 'Resume', href: "/resume"}
    ]
    
    //Conditionally format selected page
    const [ currentPage, setCurrentPage] = useState('About Me')
    console.log(currentPage)
    function handlePageChange(page){
        console.log(page)
        setCurrentPage(page)
    }

    return(
        <div>
            <ul className="d-flex justify-content-between nav">
                { menu.map( item => (
                    <li key={item.id} className={currentPage === item.label ? 'currentPage' : 'nav-item'} onClick={() => handlePageChange(item.label)}>
                        <Link className="nav-link" to={item.href}>
                            {item.label}
                        </Link>
                    </li>
            ))}
            </ul>
        </div>
    )
}

// { menu.map( item => (
//     <li key={item.id} className="nav-item">
//         <Link className="nav-link" to={item.href}>
//             {item.label}
//         </Link>
//     </li>
// ))}