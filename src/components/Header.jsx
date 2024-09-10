import { useState } from "react"
import { Nav } from "./index"

export default function Header(){
    return(
        <>
            <header className="container-fluid">
                <div className="row">
                    <div className="col-sm">
                        <h1 className="p-2 pt-3">JonGrom</h1>
                    </div>
                    <div className="col-lg">
                        <Nav/>
                    </div>
                </div>
            </header>
        </>
    )
}