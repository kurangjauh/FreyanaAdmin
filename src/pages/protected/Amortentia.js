import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setPageTitle } from '../../features/common/headerSlice'
import Amor from '../../features/amortentia'

function InternalPage(){
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setPageTitle({ title : "Amortentia✨"}))
      }, [])


    return(
        <Amor />
    )
}

export default InternalPage