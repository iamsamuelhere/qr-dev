import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { useSelector, useDispatch } from 'react-redux';
import { addMenu, removeMenu, getMenus } from '../../../store/slices/menuSlice';

import MenuCard from "../../../components/MenuCard";
import Input from '../../../components/Input';
import TextArea from "../../../components/TextArea";
import Button from '../../../components/Button'

const Menu = () => {
    const menu = useSelector((state) => state.menu)
    console.log("menu", menu)
    const dispatch = useDispatch()

    console.log("Menu:", menu)
    const initialMenuForm = {
        "title": "",
        "price": "",
        "description": ""
    }
    const [menuForm, setMenuForm] = useState(initialMenuForm)
    return <div>
        <div style={{ display: "flex", justifyContent: "center" }}><h1>Menus</h1></div>
        <div style={{ width: "500px", margin: "auto" }}>
            <div style={{ display: "flex", justifyContent: "center", flexDirection: 'column' }}>
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <Input
                        name="title"
                        placeholder="Enter Menu Name"
                        value={menuForm.title}
                        onChange={(e) => {
                            setMenuForm({ ...menuForm, [e.target.name]: e.target.value })
                        }}
                    />
                    <Input
                        name="price"
                        placeholder="Enter Price"
                        value={menuForm.price}
                        onChange={(e) => {
                            setMenuForm({ ...menuForm, [e.target.name]: e.target.value })
                        }}
                    />
                </div>
                <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
                    <TextArea
                        name="description"
                        placeholder="Enter Menu Description"
                        value={menuForm.description}
                        onChange={(e) => {
                            setMenuForm({ ...menuForm, [e.target.name]: e.target.value })
                        }}
                        styles={{ rows: "5" }}
                    />

                </div>

                <Button
                    title="Add Menu"
                    onClick={() => {
                        dispatch(addMenu(menuForm))
                        setMenuForm(initialMenuForm)
                    }}

                />

            </div>
        </div>
        <div style={{ margin: "10px" }}>
            <div style={{ display: "flex", flexWrap: "wrap", height: "250px", overflow: "scroll", padding: "20px", backgroundColor: "#E5E4E2" }}>
                {
                    menu.map((menu) => {
                        return <MenuCard key={menu.id} {...menu} />
                    })
                }

            </div>
        </div>
    </div>
}

export default Menu;