export  const  Message=async(req,res)=>{
    const { message } = req.body;
    
    if (!message) {
        return res.status(400).json({ error: 'Message is required' });
    }

    const savedMessage = Message.create(message);
    res.status(201).json({ status: 'Message sent successfully', data: savedMessage });
};