import { Link } from "react-router-dom"

export default function Nav(props){
    //Menu for rendering nav items
    const menu = [
        { id: 0, label: 'About Me', href: "/"},
        { id: 1, label: 'Contact', href: "/contact"},
        { id: 2, label: 'Portfolio', href: "/portfolio"},
        { id: 3, label: 'Resume', href: "/resume"}
    ]

    return(
        <ul className='nav'>
            { menu.map( item => (
                <li key={item.id} className="nav-item">
                    <Link className="nav-link" to={item.href}>
                        {item.label}
                    </Link>
                </li>
        ))}
        </ul>
    )
}

// { menu.map( item => (
//     <li key={item.id} className="nav-item">
//         <Link className="nav-link" to={item.href}>
//             {item.label}
//         </Link>
//     </li>
// ))}