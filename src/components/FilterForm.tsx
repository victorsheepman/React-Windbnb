import React from 'react'
import { classes, style } from 'typestyle'

export const FilterForm = () => {
  return (
    <div className={filterStyle}>
            <label className={classes(label, labelTitle)} htmlFor="">
            name
            <input />
        </label>
        <section></section>
        <section></section>
    </div>   
  )
}

const filterStyle = style(
    {
        width:'100%',
        height:'113px',
        borderRadius: '16px',
        background: '#FFF',
        boxShadow: '0px 1px 6px 0px rgba(0, 0, 0, 0.10)',
        
    }
)

const label = style(
    {
        width:'100%',
        height:'50%',
        display:'flex',
        flexDirection:'column',
        borderBottom:'1px red solid',
        borderRadius: '16px 16px 0px 0px',
        padding:'0px 26px',
        
    }
)


const labelTitle = style(
    {
        color: '#333',
        fontFamily: 'Mulish',
        fontSize: '9px',
        fontStyle: 'normal',
        fontWeight: 800,
        lineHeight: 'normal',
        textTransform: 'uppercase',
    }
)