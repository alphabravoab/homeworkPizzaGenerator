export const SELECT_BASE = "SELECT_BASE";
export const DESELECT_BASE = 'DESELECT_BASE'

     export const selectBase = (base) => {
       return{
         type:'SELECT_BASE',
          payload: base
       }
     }

     export const deSelectBase = (base) => {
       return{
         type:'DESELECT_BASE',
          payload: base
       }
     }
