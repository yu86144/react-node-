import * as actionsTypes from './actionsTypes'
import axios from 'axios'
import { setTimeout } from 'timers';
export const getData = () => {
    return (dispatch) => {
        return new Promise((resolve,reject) => {
            axios.get('/users/getUser').then((res)=>{
                console.log(res)
                dispatch({
                    type: actionsTypes.USERNAME,
                    data: res.data
                })
            }).catch((err)=>{
                // console.log(err.status);
            }) 
        })
        // setTimeout(() => {
        //     dispatch({
        //         type: actionsTypes.USERNAME,
        //         data: [1,2,3,4,5,6,7,8]
        //     })
        // },1000)
    }
}
export const ADD = () => {
     return (dispatch) => {
        setTimeout(() => {
            dispatch({
                type: actionsTypes.ADD
            })
        },1000)
    }
}