import React from 'react'
import { classes, media, style } from 'typestyle'
import { blackColor, darkGrayColor, lightGrayColor, monserratFont } from '../theme'
import { StarIcon } from '../assets'

export const CardStay = () => {
  return (
    <div className={cardWrapper}>
        <figure className={cardFigure}>

        </figure>
        <section className={cardDetail}>
            <span className={classes(cardHost, cardHostText)}>
                Super host
            </span>
            <p 
                className={
                    classes(
                        cardDetailText, 
                        marginText
                    )
                }
            >
                Entire apartment . 2 beds
            </p>
           
                
                <StarIcon />
                <p className={classes(cardDetailText, style({color:darkGrayColor, marginLeft:'4.4px'}))}>4.40</p>
          
        </section>
        <h5 className={cardTitle}>Stylist apartment in center of the city</h5>
    </div>
  )
}

const cardWrapper = style(
    {
        width: '350px',
        height: '313px',
        borderRadius:'8px',
    },
    media(
        {minWidth:1366},
        {
            width:'395px',
            height:'auto'
        }
    )
)
const cardFigure = style(
    {
        width: '100%',
        height: '238.354px',
        flexShrink: 0,
        borderRadius:'24px',
        backgroundColor:'black'
    },
    media(
        {minWidth:1366},
        {
            height:'269px',
            borderRadius:'24px'
        }
    )
)

const cardDetail = style(
    {
        width:"100%",
        height:'auto',
        display:'flex',
        alignItems:'center',
        marginTop:"13.29px",
    },
    media(
        {minWidth:1366},
        {
            marginTop:'15px'
        }
    )
)

const marginText = style(
    {
        marginLeft:'9.7px',
        marginRight:'38px',
    },
    media(
        {minWidth:1366},
        {
            marginLeft:'11px',
            marginRight:'83px'
        }
    )
)

const cardHost = style(
    {
        width:'88px',
        height:'24px',
        flexShrink:0,
        borderRadius:'12px',
        display:'flex',
        alignItems:'center',
       justifyContent:'center',
        border:`1px solid ${darkGrayColor}`
    }
)

const cardHostText = style(
    {
        color: darkGrayColor,
        fontFamily: monserratFont,
        fontSize: '10px',
        fontStyle: 'normal',
        fontWeight: 700,
        lineHeight: 'normal',
        textTransform: 'uppercase',
    }
)

const cardDetailText = style(
    {
        color: lightGrayColor,
        fontFamily: monserratFont,
        fontSize: '12px',
        fontStyle: 'normal',
        fontWeight: 500,
        lineHeight: 'normal',
    }
)

const cardTitle = style(
    {
        color:blackColor,
        fontFamily: monserratFont,
        fontSize: '14px',
        fontStyle: 'normal',
        fontWeight: 600,
        lineHeight: 'normal',
        marginTop:'11.5px'
    },
    media(
        {minWidth:1366},
        {
            marginTop:'12px'
        }
    )
)