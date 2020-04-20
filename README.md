# Students Service



### Iniciar

Por defecto inicia en el puerto 3000

```bash
npm install
npm start
```

### Usar
|N°| Endpoint | Método | Resultado|
|-| ------------- | ------------- |---------|
|1| /students  | GET |Entrega colección students |
|2| /students/:id  | GET |Entrega un registro de students|
|3| /students/:id  | PUT| Modifica registro de students|
|4| /students  | POST|Crea registro de students|
|5| /students/:id | DELETE|Elimina registro de students|
|6| /students/replace    | POST|Busca los estudiantes que tengan una nota, y le agrega un estado|
|7| /students/avg/:sub  | GET |Retorna el promedio de las notas los estudiantes de un curso. Siendo sub el nombre del curso|

### Parámetros

- Solicitud 3, 4 
```json
{
        "name": String,
        "lastname": String,
        "email": String,
        "score": Int,
        "subject": String
    }
```
Ejemplo:
```json
{
        "name": "Luis",
        "lastname": "Monsalve",
        "email": "ernesto.monsalve@udea.edu.co",
        "score": 4,
        "subject": "Ing Web"
    }

```
- Solicitud 6
Busca los estudiantes que tengan la nota indicada en 'value' y agrega un estado al estudiante cuyo valor es indicado en 'status'
```json
{

        "value":Int,
        "status":String
    }    
```
Ejemplo:
```json
{
        "value":4,
        "status":"Approve"
    }
```
