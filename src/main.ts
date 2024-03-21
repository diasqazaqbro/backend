import { NestFactory } from "@nestjs/core"
import { AppModule } from "./app.module";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

async function start() {
    const PORT = process.env.PORT || 5050
    const app = await NestFactory.create(AppModule)

    const config = new DocumentBuilder()
    .setTitle('Tестим Nest')
    .setDescription('Описание')
    .setVersion('1.0.0')
    .addTag('diasqazaqbro')
    .build()

    const document = SwaggerModule.createDocument(app,config)
    SwaggerModule.setup('/api/docs', app, document)
    await app.listen(PORT,() => {
        console.log('server is start on ', PORT);
        
    })
}

start()