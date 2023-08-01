import { createSlice } from "@reduxjs/toolkit";
const menuItemSlice=createSlice({
    name:'menuItem',
    initialState:{
        menuItemList:[],
        
    },
    reducers:{
        setMenuItemList:(state,action)=>{
            state.menuItemList=action.payload
        },
    }
})

export  const {setMenuItemList}=menuItemSlice.actions;
export default  menuItemSlice.reducer;