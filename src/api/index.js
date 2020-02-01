import firebase from '../firebaseConfig';
export const  getMethod = () =>{
 let xhtml = firebase.firestore().collection("listproduct").get().
    then((querySnapshot) => {
        
        return querySnapshot;
   
  }).catch((erro) =>{

    return erro;
  })

  return xhtml;

}

export const getSingleMethod = (id) =>{
  let xhtml =  firebase.firestore().collection("listproduct").doc(id).get().
   then((querySnapshot) => {
     return querySnapshot.data();
  
 }).catch((erro) =>{
 
     return erro;
 })
   return xhtml;
 
 };


 export const fillterbycate = (cate) =>{
  let listProducts = [];
   let json = firebase.firestore().collection("listproduct").where("cate", "==", cate).get().then(function(querySnapshot) {
       querySnapshot.forEach(function(doc) {
        listProducts.push(doc.data());  
       });
       return listProducts;
   })
   return json;

}