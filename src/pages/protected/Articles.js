import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setPageTitle } from '../../features/common/headerSlice'
import Leads from '../../features/leads'
import Articles from '../../features/articles'

function InternalPage(){
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setPageTitle({ title : "Articles"}))
      }, [])


    return(
        <Articles />
    )
}

export default InternalPage