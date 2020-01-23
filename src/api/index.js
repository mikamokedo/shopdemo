import firebase from '../firebaseConfig';
export const  getMethod = () =>{
 let xhtml =    firebase.firestore().collection("listproduct").get().
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