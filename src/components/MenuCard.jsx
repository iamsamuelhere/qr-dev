import { useDispatch } from 'react-redux'

import { removeMenu } from '../store/slices/menuSlice';
const MenuCard = ({ title, description, price, id }) => {
    const dispatch = useDispatch();
    return <div style={{ border: "0.2px solid black", minWidth: "200px", minHeight: "200px", width: "auto", height: "auto", padding: "5px", margin: "2px", borderRadius: "5px" }}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-between", height: "100%" }}>


            <div style={{ width: "100%", height: "100px", backgroundColor: "red" }}></div>
            <div>

                <b>{title}</b>
                <div>{description}</div>
                <div>{price}</div>
            </div>





            <div>
                <button onClick={() => {
                    dispatch(removeMenu(id))
                }} >Remove</button>
            </div>
        </div>


    </div>
}

export default MenuCard;