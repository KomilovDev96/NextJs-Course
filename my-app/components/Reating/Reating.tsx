import { IReatingProps } from './Reating.props';
import StarIcon from './star.svg'
import styles from './Reating.module.css'
import cn from 'classnames'
import { KeyboardEvent, useEffect, useState } from 'react';

export const Reating = ({ isEditable = false, rating, setRating, ...props }: IReatingProps): JSX.Element => {

    const [ratingArry, setratingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>))

    useEffect(() => {
        constructRating(rating)
    }, [rating])

    const constructRating = (currentRating: number) => {
        const updateArray = ratingArry.map((r: JSX.Element, i: number) => {
            return (
                <span
                    className={cn(styles.star, {
                        [styles.filled]: i < currentRating,
                        [styles.editable]: isEditable
                    })}
                    onMouseEnter={() => changeDisplay(i + 1)}
                    onMouseLeave={() => changeDisplay(rating)}
                    onClick={() => onClick(i + 1)}
                >
                    <StarIcon
                        tabIndex={isEditable ? 0 : -1}
                        onKeyDown={(e: KeyboardEvent<SVGAElement>) => isEditable && hadleSpace(i + 1, e)}
                    />
                </span>
            )
        })
        setratingArray(updateArray)
    }
    const changeDisplay = (i: number) => {
        if (!isEditable) {
            return
        }
        constructRating(i)
    }
    const onClick = (i: number) => {
        if (!isEditable || !setRating) {
            return
        }
        setRating(i)
    }
    const hadleSpace = (i: number, e: KeyboardEvent<SVGAElement>) => {
        if (e.code !== 'Space' || !setRating) {
            return
        }
        setRating(i)
    }
    return (
        <div {...props}>
            {ratingArry.map((r, i) => (
                <span key={i}>
                    {r}
                </span>
            ))}
        </div>
    )
}