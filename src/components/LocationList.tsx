import React from 'react'
import { classes, style } from 'typestyle'
import { PlaceIcon } from '../assets'
import { LocationEnum } from '../schemas'
import { mulishFont } from '../theme'

interface LocationListProps{
    setLocationSelected: React.Dispatch<React.SetStateAction<LocationEnum>>
}
export const LocationList:React.FC<LocationListProps> = ({setLocationSelected}) => {
    const locationsData:Array<LocationEnum> = [
        LocationEnum.HELSINKI,
        LocationEnum.OULU,
        LocationEnum.TURKU,
        LocationEnum.VAASA
    ]
  return (
    <ul className={locationList}>
        {
            locationsData.map((item, i)=>(
                <li key={i} className={classes(locationItem, locationItemFont)} onClick={()=>setLocationSelected(item)}>
                    <PlaceIcon /> 
                    {item}
                </li>
            ))
        }
    </ul>
  )
}


const locationList = style(
    {
        width:'100%',
        height:'auto',
        display:'flex',
        flexDirection:'column',
        gap:'36px',
        marginTop:'36px',
        marginBottom:'182px',
        paddingLeft:'1rem'
    }
)
const locationItem = style(
    {
        width:'100%',
        display:'flex',
        alignItems:'center',
        gap:'10px',
    }
)
const locationItemFont = style(
    {
        color: '#4F4F4F',
        fontFamily: mulishFont,
        fontSize: '14px',
        fontStyle: 'normal',
        fontWeight: 400,
        lineHeight: 'normal'
    }
)
