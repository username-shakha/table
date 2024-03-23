import { ReactNode } from 'react'
import styles from './Modal.module.css'

type ModalProps = {
    isOpen: boolean
    onClose: () => void
    children: ReactNode
}

export default function Modal({ isOpen, onClose, children }: ModalProps) {
    return (
        <div>
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
        </div>
    )
}
