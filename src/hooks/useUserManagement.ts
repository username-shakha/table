import { useGetUsersQuery, useCreateUserMutation, useDeleteUserMutation, useUpdateUserMutation } from '../api'

const useUserManagement = () => {
    const getUsersQuery = useGetUsersQuery()
    const createUserMutation = useCreateUserMutation()
    const deleteUserMutation = useDeleteUserMutation()
    const updateUserMutation = useUpdateUserMutation() // Добавленный хук для обновления пользователя

    const getUsers = getUsersQuery
    const { data: usersData, isLoading: isUsersLoading, isError: isUsersError } = useGetUsersQuery()
    const createUser = createUserMutation[0]
    const { isLoading: isCreateLoading, isError: isCreateError } = createUserMutation[1]
    const deleteUser = deleteUserMutation[0]
    const { isLoading: isDeleteLoading, isError: isDeleteError, isSuccess: isDeleteSuccess } = deleteUserMutation[1]
    const updateUser = updateUserMutation[0] // Добавленная функция для обновления пользователя
    const { isLoading: isUpdateLoading, isError: isUpdateError } = updateUserMutation[1] // Состояние загрузки и ошибки для обновления пользователя

    return {
        getUsers,
        usersData,
        isUsersLoading,
        isUsersError,
        createUser,
        isCreateLoading,
        isCreateError,
        deleteUser,
        isDeleteLoading,
        isDeleteError,
        isDeleteSuccess,
        updateUser, // Возвращаем функцию обновления пользователя
        isUpdateLoading, // Возвращаем состояние загрузки для обновления пользователя
        isUpdateError, // Возвращаем состояние ошибки для обновления пользователя
    }
}

export default useUserManagement
