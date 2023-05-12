import styles from './Header.module.css'
import cn from 'classnames'
import { IHeaderProps } from './Header.props'


export const Header = ({ ...props }: IHeaderProps):JSX.Element => {
    return (
      <div {...props}>
          Header
      </div>
    )
}