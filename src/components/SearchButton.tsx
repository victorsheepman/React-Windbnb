import React, { useContext } from 'react'
import { style } from 'typestyle'
import { SearchIcon } from '../assets'
import { redColor } from '../theme'
import { WindbnbContext } from '../context'
import { LocationEnum } from '../schemas'

interface SearchButtonProps{
  locationSelected:LocationEnum
}
export const SearchButton:React.FC<SearchButtonProps> = ({locationSelected}) => {
  const context = useContext(WindbnbContext)
  return (
    <button className={buttonStyle} onClick={()=>context?.handlerState(locationSelected)}>
        <SearchIcon color='#FFFFFFFF' />
        Search
    </button>
  )
}

const buttonStyle = style(
    {
        width: '126px',
        height: '48px',
        border:'unset', 
        flexShrink: 0,
        borderRadius: '16px',
        background: redColor,
        boxShadow: '0px 1px 6px 0px rgba(0, 0, 0, 0.10)',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        color: '#F2F2F2',
        fontFamily: 'Mulish',
        fontSize: '14px',
        fontStyle: 'normal',
        fontWeight: 700,
        lineHeight: 'normal',
        gap:'11px'
       
    }
)
