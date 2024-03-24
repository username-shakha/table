import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from '@reduxjs/toolkit'
import { useMemo } from 'react'
import type { AppDispatch, RootState } from '@/configureStore'
import * as userActions from '@/features/user'

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

function useAppActions() {
    const dispatch = useDispatch()
    return useMemo(() => {
        return bindActionCreators(userActions, dispatch)
    }, [dispatch])
}
export default useAppActions
