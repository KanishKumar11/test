import React from 'react'
import tstyles from '../styles/tailwind.module.css'

function HamMenu({model, setmodel}) {
  return (

    <div className={tstyles.tran}>
        {model && (
            <div className={tstyles.tmm}>
                <p className={tstyles.tw}>hii</p>
        
            </div>
        )}
    </div>

  )
}

export default HamMenu