import CustomButton from './CustomButton/CustomButton'

export function AddUser() {
  return (
    <form className="add">
      <label htmlFor="">Имя</label>
      <input type="text" />
      <label htmlFor="">Фамилия</label>
      <input type="text" />
      <label htmlFor="">Имя пользователя</label>
      <input type="text" />
      <div>
        <p>График работы</p>

        <label htmlFor="">Время Начала:</label>
        <br />
        <input type="text" />
        <br />
        <label htmlFor="">Время окончания:</label>
        <br />
        <input type="text" />
      </div>
      <label htmlFor="">Телефон</label>
      <input type="text" />
      <label htmlFor="">Выберите компанию</label>
      <select name="" id="">
        <option value="">option</option>
      </select>
      <label htmlFor="">Отдел</label>
      <input type="text" />
      <div>
        <p>Выберите Статус пользователя</p>
        <label htmlFor="">Активный</label>
        <input type="checkbox" />
        <label htmlFor="">Не активен</label>
        <input type="checkbox" />
      </div>
      <p>Диалогов в работе</p>
      <input type="text" />
      <div style={{ textAlign: 'center' }}>
        <CustomButton style={{ width: '80px' }} type="button" variant="outline">
          Submit
        </CustomButton>
      </div>
    </form>
  )
}
