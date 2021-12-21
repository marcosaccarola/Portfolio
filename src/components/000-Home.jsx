import './000.css'
import Bar from './100-Bar'
import Central from './200-Central'
import Panel from './300-Panel'

const Home=()=>{

    return(
        <div className='min-vh-100 bg-dark'>
            <Bar />
            <Central />
            {/* <Panel /> */}
        </div>
    )
}

export default Home