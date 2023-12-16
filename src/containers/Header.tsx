import { useContext } from 'react'
import { media, style } from 'typestyle'
import { FilterButton } from '../components/FilterButton'
import { FilterModal } from '../components/FilterModal'
import { WindbnbContext } from '../context'

export const Header = () => {
   
    const {locationContext, isShowContext, guestContext, total, setIsShowContext} = useContext(WindbnbContext)
  return (
    <header className={headerWrapper}>
        <section className={headerSectionLogo}>
            <figure className={headerLogo}>
                <img className={style({width:'90%', height:'90%', objectFit:'contain'})} src="../../../src/assets/logo.png" alt=""  />
            </figure>
        </section>
        <section className={headerSectionBottom}>
           <FilterButton location={locationContext} guest={total} setIsShow={setIsShowContext} />
        </section>
        <FilterModal setIsShow={setIsShowContext} isShow={isShowContext} currentLocation={locationContext} currentQty={guestContext}/>
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
