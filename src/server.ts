import { app } from "./app";

const port = process.env.PORT || 3001

const server = app.listen(port, () => console.log(`Ouvindo na porta ${port}`))

process.on('SIGINT', () => {
    server.close()
    console.log('app finalizado')
})