import fastify from "fastify"
import { serializerCompiler, validatorCompiler } from "fastify-type-provider-zod"
import cors from "@fastify/cors"
import { createTrip } from "./routes/create-trip"
import { confirmTrip } from "./routes/confirm-trip"

const app = fastify()

app.setValidatorCompiler(validatorCompiler)
app.setSerializerCompiler(serializerCompiler)

//CORS define quais frontends podem se conectar a este backend
app.register(cors,{
    origin: true //url do front; true ou '*' => qualquer frontend
})
app.register(createTrip)
app.register(confirmTrip)

app.listen({port: 3333}).then(() => {
    console.log("Server running")
})
