import twilio from 'twilio';

/// Falta definir el mensaje

const accountSid = 'ACaa76dd59405afa5b19e42a5e0135d227'; 
const authToken = 'srthjmnbfgteyuyjfnbgwtey';
console.log(process.env.PHONE);
const client = twilio(accountSid, authToken);
 
const sendMenssage = async (phone, menssage)=>{

try{
  const response = await client.messages 
  .create({ 
     body: `mi pedido es:${menssage}`, 
     from: `whatsapp:${phone}`,       
     to: `whatsapp:${process.env.PHONE}`
   });

}catch(err){
    return "error"
}

};

export default sendMenssage;