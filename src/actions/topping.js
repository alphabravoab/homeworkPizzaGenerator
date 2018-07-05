export const SELECT_TOPPING = "SELECT_TOPPING";
export const DESELECT_TOPPING = 'DESELECT_TOPPING'

     export const selectTopping = (topping) => {

       return{

         type:'SELECT_TOPPING',
          payload: topping
       }
     }

     export const deSelectTopping = (topping) => {

       return{

         type:'DESELECT_TOPPING',
          payload: topping
       }
     }
