import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from '@reduxjs/toolkit'
import { useMemo } from 'react'
import type { RootState, AppDispatch } from '../../configureStore'
import { updateUser, removeUser, createUser } from '../../features/user/index'

const userActions = {
    updateUser,
    removeUser,
    createUser,
}

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

function useAppActions() {
    const dispatch = useDispatch()
    return useMemo(() => {
        return bindActionCreators(userActions, dispatch)
    }, [dispatch])
}
export default useAppActions
