import React from 'react'
import { classes, style } from 'typestyle'
import { blackColor, lightGrayColor, mulishFont } from '../theme'
import { GuestEnum } from '../schemas'


interface GuestQtyProps {
    type:GuestEnum,
    qty:number
}

export const GuestQty:React.FC<GuestQtyProps> = ({type, qty}) => {

  return (
    <div className={guestWrapper}>
      <section className={guestHeader}>
        <h6 className={classes(guestText, style({color:blackColor, fontWeight:700}))}>{type}</h6>
        <span className={classes(guestText, style({color:'#BDBDBD', fontWeight:400}))}>
          Ages 13 or above
        </span>
      </section>
      <section className={guestMain}>
        <button className={guestButton}>-</button>
        <p className={classes(guestText, style({color:blackColor, fontWeight:700}))}>{qty}</p>
        <button className={guestButton}>+</button>
      </section>
    </div>
  )
}

const guestWrapper = style(
  {
    width:'114px',
    height:'auto',
  }
)

const guestHeader = style(
  {
    width:'100%',
    height:'36px',
  }
)

const guestText = style(
  {
    fontFamily: mulishFont,
    fontSize: '14px',
    fontStyle: 'normal',
    lineHeight: 'normal',
  }
)

const guestMain = style(
  {
    width:'100%',
    height:'auto',
    marginTop:'12px',
    display:'flex',
    justifyContent:'flex-start',
    gap:'18px'
  }
)

const guestButton = style(
  {
    width: '23px',
    height: '23px',
    flexShrink: 0,
    textAlign:'center',
    backgroundColor:'unset',
    borderRadius: '4px',
    border: '1px solid #828282',
    color:lightGrayColor,
    cursor:'pointer'
  }
)