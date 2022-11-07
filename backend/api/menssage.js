import dotenv from 'dotenv'

dotenv.config();
console.log(process.env.PHONE);

const host = "localhttp://localhost:3000"
const sendMenssage = async (id)=>{
 return `https://api.whatsapp.com/send?phone=${process.env.PHONE}&text=mi%20pedido%20es:%20${host}/checkout/${id}`

};

export default sendMenssage;