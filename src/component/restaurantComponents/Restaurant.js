import React, { useState } from 'react'
import Menu from './menuApi.js'
import "./style.css"
import MenuCard from './menucard/MenuCard.js'
import Navbar from './navbar/Navbar.js'
import Footer from "./footer/Footer.js"


const uniqueList = [
    ...new Set(
        Menu.map((curElement)=>{
            return curElement.category;
        })
    ),"All"
];


const Restaurant=()=>{

    const [menuData, setMenuData] = useState(Menu)
    const [menuList, setMenuList] = useState(uniqueList)

    const filterItem = (category)=>{

        if (category=== "All") {
            setMenuData(Menu)
            return
        }

        const updatedList = Menu.filter((curElement)=>{
            return curElement.category === category;
        });
        setMenuData(updatedList);
    }
    return <>
        <Navbar filterItem={filterItem} menuList = {menuList}/>
        <MenuCard menuData={menuData}/>
        <Footer/>
    </>
}

export default Restaurant;