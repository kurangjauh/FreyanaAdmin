import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setPageTitle } from '../../features/common/headerSlice'
import ShowCount from '../../features/showcounter'

function InternalPage(){
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setPageTitle({ title : "Show Counter"}))
      }, [])


    return(
        <ShowCount />
    )
}

export default InternalPage