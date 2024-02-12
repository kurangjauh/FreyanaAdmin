import React from 'react'
import TitleCard from '../../components/Cards/TitleCard'
import { useState } from "react"
import { useDispatch } from "react-redux"
import { showNotification } from "../common/headerSlice"

const SHOW_LIST = [
    {name : "Renai Kinshi Jourei"},
    {name : "Ramune no Nomikata"},
    {name : "Seifuku no Me"},
]

function ShowCounter() {

    const dispatch=useDispatch()
    const [showList, setShowList] = useState (SHOW_LIST)

    return(
        <>
            <TitleCard title="Total Show"/>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {
                    showList.map((i,k) => {
                        return(
                            <TitleCard key={k} title={i.name} topMargin={"mt-2"}>

                            </TitleCard>
                        )
                    })
                }
            </div>

        </>
    )
}

export default ShowCounter
