import React, { useState } from 'react'
import { classes, media, style } from 'typestyle'
import { CloseIcon } from '../assets'
import { FilterForm, SearchButton } from '.'

import { LocationList } from './LocationList'
import { GuestEnum, LocationEnum } from '../schemas'
import { GuestQty } from './GuestQty'

interface FilterModalProps{
    currentLocation:LocationEnum,
    isShow:boolean,
    setIsShow:React.Dispatch<React.SetStateAction<boolean>>
}
export const FilterModal:React.FC<FilterModalProps> = ({isShow, setIsShow, currentLocation}) => {
   const [locationSelected, setLocationSelected] = useState<LocationEnum>(currentLocation)
   const [keyState, setkeyState] = useState<number>(0)
   let content = null;
   switch (keyState) {
    case 1: 
        
        content = <LocationList setLocationSelected={setLocationSelected} />
        break;
    case 2: 
        content = <GuestQty type={GuestEnum.ADULTS} qty={0} />
        break;
   
    default:
        break;
   }
  return (
    <div className={classes(modalWrapper, style({display:isShow?'block':'none'}))}>
        <section className={modalContainer}>
            <div className={modalHeader}>
                <h5 className={modalTitle}>Edit your search</h5>
                <figure className={style({cursor:'pointer'})} onClick={()=>setIsShow(false)}>
                    <CloseIcon />
                </figure> 
            </div>
            <div className={modalMain}>
                <FilterForm setkeyState={setkeyState} location={locationSelected}/>
            </div>
            <div className={ classes(modalList, style(media({minWidth:1366}, {justifyContent:keyState === 2? 'center':'unset'})))}>
                {content}
            </div>
            <div className={modalFooter}>
                <SearchButton locationSelected={locationSelected} />
            </div>
        </section>
    </div>
  )
}

const modalWrapper = style(
    {
        position:'fixed',
        top:0,
        left:0,
        bottom:0,
        right:0,
        backgroundColor: 'rgba(79, 79, 79, 0.40)',
    }

)
const modalList = style(
    {
        width:'100%', 
        height:'auto',
        display:'flex'
    }
)
const modalContainer = style(
    {
        width: '100%',
        height: 'auto',
        flexShrink: 0,     
        backgroundColor:'#FFFFFFFF',
        padding:'18px 22px',
    },
    media(
        {minWidth:1366},
        {
            padding:'93px 96px'
        }
    )
)
const modalHeader = style(
    {
        width:'100%',
        height:'auto',
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
    }
)

const modalTitle = style(
    {
        color: '#333',
        fontFamily: 'Mulish',
        fontSize: '12px',
        fontStyle: 'normal',
        fontWeight: 700,
        lineHeight: 'normal',   
    }
)

const modalMain = style(
    {
        width:'100%',
        height:'auto',
    }
)
const modalFooter = style(
    {
        width:'100%',
        height:'48px',
        display:'flex',
        justifyContent:'center',
    },
    media(
        {minWidth:1366},
        {
            display:'none'
        }
    )
)


