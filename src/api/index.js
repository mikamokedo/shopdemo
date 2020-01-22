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