import {  DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';
export interface IButtonProps extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>{
    children : ReactNode;
    appearance: 'primary' | 'ghost';
    arrow?: 'right' | 'down' | 'none'
}
