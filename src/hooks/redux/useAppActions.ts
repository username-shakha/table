import { bindActionCreators } from '@reduxjs/toolkit'
import { useMemo } from 'react'
import { useDispatch } from 'react-redux'

import { updateUser, removeUser, createUser } from '../../features/user/index'

const userActions = {
    updateUser,
    removeUser,
    createUser,
}

function useAppActions() {
    const dispatch = useDispatch()
    return useMemo(() => {
        return bindActionCreators(userActions, dispatch)
    }, [dispatch])
}
export default useAppActions
