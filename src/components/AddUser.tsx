import { SetStateAction, useState } from 'react'
import CustomButton from './CustomButton/CustomButton'

export function AddUser() {
  const [selectedDrone, setSelectedDrone] = useState('huey')

  const handleDroneChange = (event: { target: { value: SetStateAction<string> } }) => {
    setSelectedDrone(event.target.value)
  }
  return (
    <form className="add">
      <label htmlFor="name">Имя</label>
      <input type="text" id="name" />

      <label htmlFor="surname">Фамилия</label>
      <input type="text" id="surname" />

      <label htmlFor="username">Имя пользователя</label>
      <input type="text" id="username" />

      <p style={{ textAlign: 'center', fontSize: '14px', margin: '10px 0px' }}>
        График работы
      </p>
      <div
        style={{
          display: 'flex',
          gap: '5px',
          alignItems: 'center',
        }}
      >
        <div style={{ flex: 1 }}>
          <p
            style={{
              fontSize: '14px',
              textAlign: 'center',
              display: 'block',
              marginBottom: '5px',
            }}
          >
            Время Начала:
          </p>
          <input type="date" style={{ minWidth: '100%', paddingRight: '10px' }} />
        </div>
        <div style={{ flex: 1 }}>
          <p
            style={{
              fontSize: '14px',
              textAlign: 'center',
              display: 'block',
              marginBottom: '5px',
            }}
          >
            Время окончания:
          </p>
          <input type="date" style={{ minWidth: '100%', paddingRight: '10px' }} />
        </div>
      </div>

      <label htmlFor="tel">Телефон</label>
      <input type="tel" id="tel" />

      <label htmlFor="">Выберите компанию</label>
      <select
        name=""
        id=""
        style={{
          height: '35px',
          outline: 'none',
          border: '1px solid #ddd',
          borderRadius: '5px',
          paddingLeft: '5px',
        }}
      >
        <option value="">Select Option 1</option>
        <option value="">Select Option 2</option>
      </select>

      <label htmlFor="">Отдел</label>
      <input type="text" />

      <div>
        <p style={{ textAlign: 'center', fontSize: '14px', margin: '10px 0px' }}>
          Выберите Статус пользователя
        </p>

        <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
          <input
            style={{ cursor: 'pointer' }}
            type="radio"
            id="active"
            name="drone"
            value="active"
            checked={selectedDrone === 'active'}
            onChange={handleDroneChange}
          />
          <label style={{ cursor: 'pointer', margin: 0, padding: 0 }} htmlFor="active">
            Активный
          </label>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
          <input
            style={{ cursor: 'pointer' }}
            type="radio"
            id="inactive"
            name="drone"
            value="inactive"
            checked={selectedDrone === 'inactive'}
            onChange={handleDroneChange}
          />
          <label style={{ cursor: 'pointer', margin: 0, padding: 0 }} htmlFor="inactive">
            Не активен
          </label>
        </div>
      </div>

      <label htmlFor="dialog">Диалогов в работе</label>
      <input type="text" id="dialog" />

      <div style={{ textAlign: 'center' }}>
        <CustomButton
          style={{ width: '80px', margin: '10px 0px' }}
          type="button"
          variant="outline"
        >
          Submit
        </CustomButton>
      </div>
    </form>
  )
}
