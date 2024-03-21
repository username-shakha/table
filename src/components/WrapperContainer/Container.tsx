import { ReactNode } from 'react'
import styles from './Container.module.css'
type ContainerProps = {
  children: ReactNode
}

export default function Container({ children }: ContainerProps) {
  return (
    <div className={styles.container} style={{ width: '1400px', margin: '0 auto' }}>
      {children}
    </div>
  )
}
