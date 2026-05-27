import {app} from "./app.js"
import "dotenv/config"

const PORT = Number(process.env.PORT ?? 3333)


export function start(){
  try {
    app.listen({
      port: PORT,
      host: "0.0.0.0"
    })

    console.log(`Server running in http://localhost:${PORT}`)
  } catch (error) {
    app.log.error(error)
    process.exit(1)
  }
}

start()