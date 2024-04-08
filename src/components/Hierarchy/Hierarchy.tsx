import { useState } from 'react'
import styles from './Hierarchy.module.css'

const Hierarchy = () => {
  const [showThem, setShowThem] = useState(false);
  const [showTeam, setShowTeam] = useState(false)
  const [team, setTeam] = useState(false);

  const toggleShowOthers = () => {
    setShowThem(prev => !prev)
  }
  const toggleShowTeam = () => {
    setShowTeam(prev => !prev)
  }

  return (
    <div>
        <div>
            <h1>Director</h1>
            <button onClick={toggleShowOthers}>Show others</button>
        </div>
        <div>
            
        </div>
        <div className={showThem ? `${styles.show}` : `${styles.hide}`}>
            <div className='col'>
                <p>Otdel1</p>
                <div>
                    <p>Diana</p>
                    <p>Fidan</p>
                </div>
            </div>
            <div className='col'>
                <p>Otdel2</p>
                <div>
                    <p>Aykhan</p>
                </div>
            </div>
            <div className='col'>
                <p>Otdel3</p>
                <div>
                    <p>Medina</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hierarchy