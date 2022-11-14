

const sendMenssage = (obj)=>{



    return `https://api.whatsapp.com/send?phone=541123346010&text=mi%20pedido%20es:%20http://localhost:5000/checkout/order:${obj.number}`
}
export default sendMenssage