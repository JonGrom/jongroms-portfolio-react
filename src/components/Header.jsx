import { useState } from "react"
import { Nav } from "./index"

export default function Header(){
    return(
        <>
            <header className="container-fluid">
                <div className="row">
                    <div className="col-4">
                        <h1>JonGrom</h1>
                    </div>
                    <div className="col-8">
                        <Nav/>
                    </div>
                </div>
            </header>
        </>
    )
}