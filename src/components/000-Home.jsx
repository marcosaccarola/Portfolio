import { useState } from 'react'
import './000.css'
import Bar from './100-Bar'
import Central from './200-Central'
// import Panel from './300-Panel'

const Home=()=>{
    const[index,setIndex]=useState('Menu')

    return(
        <div className='min-vh-100'>
            <Bar setIndex={setIndex} />
            <Central index={index} setIndex={setIndex} />
            {/* <Panel /> */}
        </div>
    )
}

export default Home