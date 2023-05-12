import styles from './Layout.module.css'
import cn from 'classnames'
import { ILayoutProps } from './Layout.props'
import { Sidebar } from './Siderbar/Sidebar'
import { Footer } from './Footer/Footer'
import { Header } from './Header/Header'
import { FunctionComponent } from 'react'

const Layout = ({ children }: ILayoutProps): JSX.Element => {
    return (
        <div className={styles.wrapper}>
            <Header className={styles.header} />
            <Sidebar className={styles.sidebar} />
            <div className={styles.body}>
                {children}
            </div>
            <Footer className={styles.footer} />
        </div>
    )
}

// Комонент вышего порядка
export const withLayout = <T extends Record<string, unknown>>(Component: FunctionComponent<T>) => {
    return function withLayoutComonent(props: T): JSX.Element {
        return (
            <Layout>
                <Component {...props} />
            </Layout>
        )
    }
}