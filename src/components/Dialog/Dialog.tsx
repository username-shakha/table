import { ReactNode } from 'react'
import './Dialog.sass'

type TDialogProps = {
    isOpen: boolean
    onClose: () => void
    children: ReactNode
}

export default function Dialog({ isOpen, onClose, children }: TDialogProps) {
    return (
        <div>
            {isOpen && (
                <div>
                    <div className="overlay">
                        <div className="content" onClick={(e) => e.stopPropagation()}>
                            {children}
                        </div>
                    </div>
                    <div className="backdrop" onClick={onClose}></div>
                </div>
            )}
        </div>
    )
}
