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
export const uploadImgFirebase = (file) =>{
  const storage = firebase.storage();
  const uploadTask =  storage.ref(`/shopimage/${file.name}`).put(file);
  return new Promise((resolve, reject) => {
    uploadTask.on(
     'state_changed',
     function(snapshot) {
     },
     function(error) {
       reject(error);  
       alert(error);
     },
     function() {
       const downloadURL = uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
          return downloadURL;
      });
       resolve(downloadURL); 
     }
   );
 });
}