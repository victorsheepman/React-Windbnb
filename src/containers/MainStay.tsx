import { useContext } from 'react'
import { media, style } from 'typestyle'
import { monserratFont } from '../theme'
import { CardStay } from '../components'
import { WindbnbContext } from '../context'

export const MainStay = () => {
    const {stayList} = useContext(WindbnbContext)
  return (
    <div className={mainStayWrapper}>
        <section className={mainStayHeader}>
            <h4 className={mainStayTitle}>Stays in Finland</h4>
            <span className={mainStaySpan}>12+ stays</span>
        </section>
        <section className={mainStayList}>
            {
                stayList.map((item,index)=>(
                   <CardStay 
                        key={index} 
                        title={item.title} 
                        photo={item.photo} 
                        type={item.type} 
                        rating={item.rating} 
                        beds={item.beds} 
                        host={item.superHost} />
                ))
            }
                

                
        </section>
    </div>
  )
}

const mainStayWrapper = style(
    {
        width:'100%',
        height:'auto',
        marginTop:'34px',
        padding:'0px 12px',
    },
    media(
        {minWidth:768},
        {
            padding:'0px 52px',
        }
    ),
    media(
        {minWidth:1440},
        {
            padding:'0px 99px'
        }
    )
)
const mainStayHeader = style(
    {
        width:'100%',
        height:'auto',
        display:'flex',
        justifyContent:'space-between',
    }
)

const mainStayTitle = style(
    {
        color: '#333',
        fontFamily: monserratFont,
        fontSize: '18px',
        fontStyle: 'normal',
        fontWeight: 700,
        lineHeight: 'normal',
    }
)

const mainStaySpan = style(
    {
        color: '#4F4F4F',
        fontFamily: 'Montserrat',
        fontSize: '14px',
        fontStyle: 'normal',
        fontWeight: 500,
        lineHeight: 'normal',
    }
)

const mainStayList = style(
    {
        width:'100%',
        marginTop:'32px',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        gap:'32px'  ,
        marginBottom:'101px',
        
    },
    media(
        {
            minWidth:768
        },
        {
            flexDirection:'row',
            gap:"50px 32px",
            flexWrap:'wrap',
            justifyContent:'center'
        }
    ),
    media(
        {minWidth:2560},
        {
            
           padding:'0% 22%'
        }
    )
)