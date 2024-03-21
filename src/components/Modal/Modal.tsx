import { FC, ReactNode } from 'react'
import styles from './Modal.module.css'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  children: ReactNode
}

const Modal: FC<ModalProps> = ({ isOpen, onClose, children }) => {
  return (
    <>
      {isOpen && (
        <div>
          <div className={styles.overlay}>
            <div className={styles.content} onClick={(e) => e.stopPropagation()}>
              {children}
            </div>
          </div>
          <div className={styles.backdrop} onClick={onClose}></div>
        </div>
      )}
    </>
  )
}

export default Modal
