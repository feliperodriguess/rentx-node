import express from "express"

const app = express()

app.use(express.json())

app.get("/", (request, response) => response.json({ hello: "Hey buddy! 🍺" }))

export default app
