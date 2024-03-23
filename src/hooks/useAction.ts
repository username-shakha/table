import { useMemo } from 'react'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from '@reduxjs/toolkit'
import { updateUser, addUser, deleteUser } from '../app/store/redusers/users/reduser'

const rootActions = {
    updateUser,
    addUser,
    deleteUser,
}

export default function useAction() {
    const dispatch = useDispatch()
    return useMemo(() => {
        return bindActionCreators(rootActions, dispatch)
    }, [dispatch])
}
