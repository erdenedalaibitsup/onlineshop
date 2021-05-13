import React, { Component } from 'react'
import css from './style.module.css'
import Page1 from '../../Component/Page1/index'
import Page2 from '../../Component/Page2/index'
import Page3 from '../../Component/Page3/index'
const index = (props) => {
    return (
        <div className={css.home}>
            <div className={css.page1}>
                <Page1></Page1>
            </div>
            <div className={css.page2}>
                <Page2></Page2></div>
            {/* <div className={css.page3}>//ene deer customize hiij bolnoo
                <Page3></Page3>//huudas ni ene dotor baigaa 
                </div> */}
        </div>
    )
}

export default index