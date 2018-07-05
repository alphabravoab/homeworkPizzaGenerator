export const SELECT_SAUCE = "SELECT_SAUCE";
export const DESELECT_SAUCE = 'DESELECT_SAUCE'

     export const selectSauce = (sauce) => {
        console.log('selectsauce action creater is clicked', sauce)
       return{

         type:'SELECT_SAUCE',
          payload: sauce
       }
     }

     export const deSelectSauce = (sauce) => {
        console.log('selectsauce action creater is clicked', sauce)
       return{

         type:'DESELECT_SAUCE',
          payload: sauce
       }
     }
