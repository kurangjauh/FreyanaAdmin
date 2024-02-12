import moment from "moment"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import TitleCard from "../../components/Cards/TitleCard"
import { openModal } from "../common/modalSlice"
import { deleteLead, getLeadsContent } from "./leadSlice"
import { CONFIRMATION_MODAL_CLOSE_TYPES, MODAL_BODY_TYPES } from '../../utils/globalConstantUtil'
import TrashIcon from '@heroicons/react/24/outline/TrashIcon'
import Pencil from'@heroicons/react/24/outline/PencilIcon'
import { showNotification } from '../common/headerSlice'
import {colletion, getDocs} from "firebase/firestore"
import { db } from "../../firebase"

const TopSideButtons = () => {

    const dispatch = useDispatch()

    const openAddNewArticleModal = () => {
        dispatch(openModal({title : "Add New Article", bodyType : MODAL_BODY_TYPES.ARTICLE_ADD_NEW}))
    }

    return(
        <div className="inline-block float-right">
            <button className="btn px-6 btn-sm normal-case btn-primary" onClick={() => openAddNewArticleModal()}>Add New Article</button>
        </div>
    )
}

function Article(){

    const {leads } = useSelector(state => state.lead)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getLeadsContent())
    }, [])

    const deleteCurrentArticle = (index) => {
        dispatch(openModal({title : "Confirmation", bodyType : MODAL_BODY_TYPES.CONFIRMATION, 
        extraObject : { message : `Are you sure you want to delete this article?`, type : CONFIRMATION_MODAL_CLOSE_TYPES.ARTICLE_DELETE, index}}))
    }

    return(
        <>
            
            <TitleCard title="Current Articles" topMargin="mt-2" TopSideButtons={<TopSideButtons />}>
                {/* Article List in table format loaded from slice after api call */}
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                    <tr>
                        <th>Article Title</th>
                        <th>Creator</th>
                        <th>Created at</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            leads.map((l, k) => {
                                return(
                                    <tr key={k}>
                                    
                                    <td>{l.email}</td>
                                    <td>{moment(new Date()).add(-5*(k+2), 'days').format("DD MMM YY")}</td>
                                    <td>{l.last_name}</td>
                                    <td><button className="btn btn-square btn-ghost" onClick={() => deleteCurrentArticle(k)}><Pencil className="w-5"/></button><button className="btn btn-square btn-ghost" onClick={() => deleteCurrentArticle(k)}><TrashIcon className="w-5"/></button></td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
            </TitleCard>
        </>
    )
}


export default Article