# Sequelize

Crear un archivo de conexión a la base de datos. 

creabamos los modelos 

creabamos un initModels para realizar las relaciones 


## Sequelize CLI (Command Line Interface)

primer parte comando de ejecución npx
segaunda parte cliente "sequelize"
el comando de sequelize "db:create"


1. Inicializar un proyecto con sequelize cli 
 - npx sequelize init 

2. Modificamos nuestros archivos de configuracion
 - Dentro de la carpeta config modificamos config.json 

3. Crear una base de datos con el comando 
    ```
    npx sequelize db:create
    ```
4. Eliminar una base de datos 
    ```
    npx sequelize db:drop
    ```
5. Como mover las carpetas dentro de /src 
    - creamos un archivo .sequelizerc
    ```
    const path = require('path');

    module.exports = {
    'config': path.resolve('./src/config/config.js'),
    'models-path': path.resolve('./src/models'),
    'migrations-path': path.resolve('./src/migrations'),
    'seeders-path': path.resolve('./src/seeders')
    }
    ``` 
6. Crear un modelo
    En la terminar usamos en comando 
    ```
    npx sequelize-cli model:generate ...
    ```
    -- name (nombre del modelo )
    -- name User
    -- attributes attr1:type,attr2:type,...,attrN:type
    ```
    npx sequelize-cli --name User model:generate --attributes username:string,email:string,password:string
    ```

