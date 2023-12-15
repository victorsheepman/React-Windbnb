import React from 'react'
import { classes, style } from 'typestyle'
import { blackColor, mulishFont, redColor } from '../theme'
import { SearchIcon } from '../assets'
import { LocationEnum } from '../schemas'

interface FilterButtoProps{
    location:LocationEnum | undefined,
    guest:number,
    setIsShow: React.Dispatch<React.SetStateAction<boolean>>
}
export const FilterButton:React.FC<FilterButtoProps> = ({location, guest, setIsShow}) => {
  return (
    <div className={filterButtonWrapper}>
        <div className={classes(locationSection, textAlignStyle)}>
            <p className={classes(textStyle, style({color:blackColor}))}>
               {location}
            </p>
        </div>
        <div className={classes(guestSection, textAlignStyle)}>
            <p className={classes(textStyle, style({color: guest == 0 ?'#BDBDBD':blackColor}))}>
                {guest == 0 ? 'Add Guest':guest}
            </p>
        </div>
        <div onClick={()=>setIsShow(true)} className={classes(searchSection, textAlignStyle)}>
            <SearchIcon color={redColor} />
        </div>
    </div>
  )
}

const filterButtonWrapper = style(
    {
        width:' 297px',
        height: '55px',
        display:'flex',
        flexShrink: 0,
        borderRadius: '16px',
        background: '#FFF',
       boxShadow:' 0px 1px 6px 0px rgba(0, 0, 0, 0.10)'
    }
)

const locationSection = style(
    {
        width:'138px',
        height:'100%',
        borderRight:'1px solid #F2F2F2'
    }
)

const guestSection = style(
    {
        width:'105px',
        height:'100%',
        borderRight:'1px solid #F2F2F2'
    }
)

const searchSection = style(
    {
        width:'53px',
        height:'100%',
        cursor:'pointer'
    },
   
)

const textAlignStyle = style(
    {
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    }
) 

const textStyle = style(
    {
        color: '#333',
        fontFamily: mulishFont,
        fontSize: '14px',
        fontStyle: 'normal',
        fontWeight: 400,
        lineHeight: 'normal',
      
    }
)