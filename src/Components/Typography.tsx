import React, { MouseEventHandler, ReactNode } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '@/redux/reducers';

interface TypographyInterface {
    children?: ReactNode
    text?: string
    color?: string
    fontWeight?: number
    fontSize?: string | number
    fontFamily?: string
    textAlign?: any
    bB?: string | number
    p?: string | number
    cursor?: string
    onMouseOver?: MouseEventHandler<HTMLParagraphElement>
    onMouseLeave?: MouseEventHandler<HTMLParagraphElement>
    onClick?: Function
}

const Typography: React.FC<TypographyInterface> = ({ children, text, color, fontWeight, fontSize, textAlign, bB, p, cursor, onMouseOver, onMouseLeave, onClick }) => {
    const { mode, textDark, textLight, } = useSelector((state: RootState) => state.theme)
    const isDark = Boolean(mode === 'dark')


    return (
        <div className='d-flex align-items-center justify-content-start ' onClick={onClick ? () => onClick() : () => { }} >
            <h5 className='mb-0 ' style={{
                fontFamily: "FiraCode", fontWeight: fontWeight ? fontWeight : 800,
                fontSize: fontSize ? fontSize : '1rem', color: color ? color : isDark ? textLight : textDark,
                textAlign: textAlign ? textAlign : 'start', borderBottom: bB ? bB : '', padding: p && p,
                cursor: cursor ? cursor : ''


            }} onMouseOver={onMouseOver}
                onMouseLeave={onMouseLeave}
            >
                {text}{children}
            </h5>
        </div>
    )
}

export default Typography