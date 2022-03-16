 const mongoose = require('mongoose');
 const MONGO_URI = 'mongodb+srv://usuario:123@gerardo.qfuny.mongodb.net/chat?retryWrites=true&w=majority'

 async function main(){
     await mongoose('MONGO_URI');
 }

 function createMessage(){
     const messageSchema = new mongoose.Schema({
         content: String, 
         sender: String, 
         read: Bolean
     });

     const Message = mongoose.model('Message', messageSchema);

     const message = new Message ({
         content: 'Este es el primer mensaje',
         sender: 'Gerardo Guzmán',
         read: false
     })

     return message,save();
     return message;
 }

 main()
 .then(() => {
     console.log('la conexión fue exitosa');
     createMessage()
     .then(() => console.log('El mensaje se creo con exito'))
     

 })
 .catch( (err) => {
     console.log(err)
 });