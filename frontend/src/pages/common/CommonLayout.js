import React from 'react'
import style from './CommonLayout.module.css'

function CommonLayout({children}){
    return(
        <div className={style.allPage}>
            <div className={style.leftMenu}>
            </div>
            <div className={style.right}>
                <div className={style.header}>
                </div>
                <div className={style.content}>
                    {children}
                </div>
            </div>
        </div>
    )

}

export default CommonLayout