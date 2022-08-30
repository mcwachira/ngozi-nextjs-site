import React,{useMemo} from 'react'
import dynamic from 'next/dynamic'


const LocationMap =() => {
    
    const Map = useMemo(() => dynamic(() => import('../blogComponents/Map'), { 
        loading: ()=> <p>Map i loading ...</p>,
        
        ssr: false
     }), [])
    
    return <Map/>

}
   

export default LocationMap