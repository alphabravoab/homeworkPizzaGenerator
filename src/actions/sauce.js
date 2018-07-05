export const SELECT_SAUCE = "SELECT_SAUCE";
export const DESELECT_SAUCE = 'DESELECT_SAUCE'

     export const selectSauce = (sauce) => {
       return{

         type:'SELECT_SAUCE',
          payload: sauce
       }
     }

     export const deSelectSauce = (sauce) => {
       return{

         type:'DESELECT_SAUCE',
          payload: sauce
       }
     }
