import {Items} from '../components/ProductItem'
//액션 타입 선언
const ADD_ITEM = '_cart/ADD_ITEM' as const
const DELETE_ITEM = '_cart/DELETE_ITEM' as const

let nextId = 0;
//액션 함수 생성
export const addCart = (item:Items) => {
    return {
        type:ADD_ITEM,
        payload:{
            id:nextId++,
            item
        }
    }
}

export const deleteCart = (item:Items) => {
    return {
        type:DELETE_ITEM,
        payload:item
    }
}

//액션 객체 타입 선언
type ActionTypes = ReturnType<typeof addCart>
    | ReturnType<typeof deleteCart> 

export type ItemState = {
    id: number;
    product_name: string;
    price: number;
    product_img: string;
    is_checked: boolean;
};

type initItemState = ItemState[];
const initState:initItemState = [];
//리듀서
export default function cartReducer(state=initState, action:ActionTypes):initItemState{
    switch(action.type){
        case ADD_ITEM:
            return [...state, action.payload.item]
        case DELETE_ITEM:
            return state.filter(item=>item.id !== action.payload.id)
        default:
            return state;
    }
}