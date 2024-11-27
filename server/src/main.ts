import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";


async function start() {
    const PORT = process.env.PORT || 2200;
    const app = await NestFactory.create(AppModule) //Экземпляр приложения. Его метод create сканирует существующие модули

    const config = new DocumentBuilder()
        .setTitle('project-are-create-site-v2')
        .setDescription('Документация REST API')
        .setVersion('1.0.0')
        .addTag('RYIVOL')
        .build()
        const document = SwaggerModule.createDocument(app, config);
        SwaggerModule.setup('/api/docs', app, document)

    await app.listen(PORT, () => console.log(`Server started on port ${PORT}`)) 

}
start();
