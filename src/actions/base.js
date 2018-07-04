export const SELECT_BASE = "SELECT_BASE";


     export const selectBase = (base) => {
        console.log('selectBase action creater is clicked', base)
       return{

         type:'SELECT_BASE',
          payload: base
       }
     }
