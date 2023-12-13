import React from 'react'
import { classes, media, style } from 'typestyle'
import { blackColor, darkGrayColor, lightGrayColor, monserratFont } from '../theme'
import { StarIcon } from '../assets'

interface CardStayProps{
    photo:string,
    title:string,
    rating:number,
    beds:number,
    type:string,
    host:boolean
}
export const CardStay:React.FC<CardStayProps> = ({photo,title, rating, beds,type,host}) => {
  return (
    <div className={cardWrapper}>
        <figure className={cardFigure}>
            <img src={photo} alt="" />
        </figure>
        <section className={cardDetail}>
            {
                host?
                <span className={classes(cardHost, cardHostText)}>
                    Super host
                </span>:
                null
            }
           
            <p 
                className={
                    classes(
                        cardDetailText, 
                        style(
                            {
                                marginRight:host?'38px':'135px',
                            },
                            media(
                                {minWidth:1366},
                                {
                                    
                                    marginRight:'50%'
                                }
                            )
                        )
                    )
                }
            >
                {type} . {beds} beds
            </p>
           
                
                <StarIcon />
                <p className={classes(cardDetailText, style({color:darkGrayColor, marginLeft:'4.4px'}))}>{rating}</p>
          
        </section>
        <h5 className={cardTitle}>{title}</h5>
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

const cardHost = style(
    {
        width:'88px',
        height:'24px',
        flexShrink:0,
        borderRadius:'12px',
        display:'flex',
        alignItems:'center',
       justifyContent:'center',
        border:`1px solid ${darkGrayColor}`,
        marginRight:'9.7px',
    },
    media(
        {minWidth:1366},
        {
            marginRight:'11px'
        }
    )
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