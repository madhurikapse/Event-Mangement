const ContactsSchema=new mongoose.Schema({
    name:String,
    email:String,
    message:{type:String ,required:true}
})
const Contact=model("Contact",ContactsSchema)
export default Contact