const { z } = require("zod");

const loginSchema = z.object({
    email: z
    .string({required_error:"Email is required"}).trim()
    .email({ message:"Invalid email address"})
    .min(3,{ message:"Email must be atleast 3 chars."})
    .max(255,{ message: "Email must not be more than 255 characters"}),

    password: z
    .string({required_error:"password is required"}).trim()
    .min(5,{ message:"password must be atleast 6 chars."})
    .max(255,{ message: "password can't be greater than 1024 characters"}), 
})

//creating an object schema
const signupSchema = loginSchema.extend({
    username: z
    .string({required_error:"Name is required"}).trim()
    .min(3,{message:"Name must be atleast 3 chars."})
    .max(255,{message: "Name must not be more than 255 characters"}),
    
    phone: z
    .string({required_error:"phone is required"}).trim()
    .min(10,{ message:"Phone must be atleast 10 chars."})
    .max(255,{ message: "phone must not be more than 20 characters"}),

});

module.exports = {signupSchema,loginSchema};