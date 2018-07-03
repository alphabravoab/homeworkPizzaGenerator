export const SELECT_BASE = 'SELECT_BASE'

 export const selectBase = (base) => {
   console.log('i am the actioncreaor of selectBase', base.id)
   return{

     type:'SELECT_BASE',
      payload: base
   }
 }
