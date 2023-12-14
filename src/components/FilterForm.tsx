import React from 'react'
import { classes, media, style } from 'typestyle'
import { mulishFont } from '../theme'
import { SearchButton } from '.'
import { LocationEnum } from '../schemas'

interface FilterFormProps{
    location: LocationEnum
    setkeyState: React.Dispatch<React.SetStateAction<number>>
}

export const FilterForm:React.FC<FilterFormProps> = ({location, setkeyState}) => {
  return (
    <div className={filterStyle}>
        <label className={classes(label, labelTitle, labelLocation)} onClick={()=>setkeyState(1)}>
            LOCATION
            <input className={classes(inputValue, labelInput)} disabled  value={location}/>
        </label>
        <label className={classes(label, labelTitle)} onClick={()=>setkeyState(2)}>
            GUEST
            <input className={classes(inputValue, labelInput)} placeholder='Add guests' disabled />
        </label>
        
        <section className={classes(buttonFormSection)}>
            <SearchButton locationSelected={location} />
        </section>

        
          
    </div>   
  )
}

const filterStyle = style(
    {
        width:'100%',
        height:'113px',
        display:'flex',
        flexDirection:'column',
        borderRadius: '16px',
        background: '#FFF',
        boxShadow: '0px 1px 6px 0px rgba(0, 0, 0, 0.10)',
        marginBottom:'1rem' ,
    },
    media(
        {minWidth:1366},
        {
            flexDirection:'row',
            height: '55px',
        }
    )
)

const label = style(
    {
        width:'100%',
        height:'50%',
        display:'flex',
        flexDirection:'column',
        borderRadius: '16px 16px 0px 0px',
        padding:'11px 26px',
        backgroundColor:'white',
        '$nest':{
            '&::selection':{
                backgroundColor:'red'
            }
        }
    },
    media(
        {minWidth:1366},
        {
            width: '33.33%',
            height: '100%',
            flexShrink: 0,
            borderRadius: 'unset',
            boxShadow: '0px 1px 6px 0px rgba(0, 0, 0, 0.10)',
            borderRight:'1px #F2F2F2 solid'
        }
    )
)
const labelLocation = style(
    {
        borderBottom:'1px #F2F2F2 solid',

    },
    media(
        {minWidth:1366},
        {
            borderRadius: '16px 0px 0px 16px',
            borderBottom:'unset'
        }
    )
)


const labelTitle = style(
    {
        color: '#333',
        fontFamily: mulishFont,
        fontSize: '9px',
        fontStyle: 'normal',
        fontWeight: 800,
        lineHeight: 'normal',
        textTransform: 'uppercase',
    }
)

const labelInput = style(
    {
        marginTop:'4px', 
        border:"unset",
        backgroundColor:'unset',
        $nest:{
            '&::placeholder':{
                color: '#BDBDBD',
                fontFamily: mulishFont,
                fontSize: '14px',
                fontStyle: 'normal',
                fontWeight: 400,
                lineHeight: 'normal'
            }
        }
    }
)

const inputValue = style(
    {
        color: '#333',
        fontFamily: mulishFont,
        fontSize: '14px',
        fontStyle: 'normal',
        fontWeight: 400,
        lineHeight: 'normal'      
    }
)

const buttonFormSection = style(
    {
        
        width:'100%',
        height:'100%',
        padding:'11px 26px',
        borderRadius: '0px 16px 16px 0px',
        boxShadow: '0px 1px 6px 0px rgba(0, 0, 0, 0.10)',
        display:'none',
        backgroundColor:'white',
    },
    media(
        {minWidth:1366},
        {
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
        }
    )
)
