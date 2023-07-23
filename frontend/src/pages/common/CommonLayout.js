import React from 'react'
import style from './CommonLayout.module.css'
import api from "../../components/api";
import {useNavigate} from "react-router-dom";
import Left from "./left/Left";

function CommonLayout({children}){


    return(
        <div className={style.allPage}>
            <div className={style.leftMenu}>
                <Left/>
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