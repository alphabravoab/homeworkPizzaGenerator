export const SELECT_DELIVERY = "SELECT_DELIVERY";
export const DESELECT_DELIVERY = 'DESELECT_DELIVERY'

     export const selectFastDelivery = (delivery) => {

       return{

         type:'SELECT_DELIVERY',
          payload: delivery
       }
     }

     export const deSelectFastDelivery = (delivery) => {

       return{

         type:'DESELECT_DELIVERY',
          payload: delivery
       }
     }
