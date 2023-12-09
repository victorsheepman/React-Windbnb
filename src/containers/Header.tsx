import React from 'react'
import { media, style } from 'typestyle'
import { FilterButton } from '../components/FilterButton'
import { LocationEnum } from '../schemas'

export const Header = () => {

  return (
    <header className={headerWrapper}>
        <section className={headerSectionLogo}>
            <figure className={headerLogo}>
                <img className={style({width:'90%', height:'90%', objectFit:'contain'})} src="../../public/logo.png" alt=""  />
            </figure>
        </section>
        <section className={headerSectionBottom}>
           <FilterButton location={LocationEnum.HELSINKI} guest='Add Guest' />
        </section>
    </header>
  )
}

const headerWrapper = style(
    {
        width:'100%',
        height:'auto',
        display:'flex',
        flexDirection:'column'
    },
    media(
        {minWidth:768},
        {
            flexDirection:'row'
        }
    ),
)

const headerSectionLogo = style(
    {
        width:'100%',
        height:'87px',
        display:'flex',
        alignItems:'center',
        paddingLeft:'19px',
    },
    media(
        {minWidth:1440},
        {
            paddingLeft:'94px'
        }
    )
)
const headerSectionBottom = style(
    {
        width:'100%',
        height:'87px',
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    },
    media(
        {minWidth:1440},
        {
            justifyContent:'flex-end',
            paddingRight:'96px',
            
        }
    )
)
const headerLogo = style({
    width:'96px',
    height:'19px',
})
