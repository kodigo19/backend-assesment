# FAV LIST API

This is an Application build with Node, Express and Mongo.

This application provides Favorite management through lists.

# Resources

There are 2 main resources in this API

Users
Favs

# Routes

GET /favs
POST /favs
GET /favs/1
DELETE favs/1
POST /auth/local/login
POST /auth/local/signup


# REST API

## Signup User

### Request
        fetch('/auth/local/signup',{
            method:"POST",
            headers: new Headers({
                'Authorization': `Bearer ${authToken}`, 
                'Content-Type': 'application/x-www-form-urlencoded'
            }), 
            body:JSON.stringify(
                {
                    "email": "correo7@gmail.com",
                    "password": "123s45#7S"
                }
            ),
         })
            .then(res=>res.json())
            .then(json=>console.log(json))

### Response

    {
        "success": true,
        "token": {
            "authToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNTQ0Mzc3MTBiNGQ5ZTU3YzFmNzQ4ZSIsInVzZXIiOnsiZW1haWwiOiJjb3JyZW8xMEBnbWFpbC5jb20ifSwiaWF0IjoxNjQ5Njg5NDY0LCJleHAiOjE2NDk2OTY2NjR9.xHRS40lLUNxOrN-lISAeeWpZW0pimE8Y0gaBPyYrYXc",
            "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNTQ0Mzc3MTBiNGQ5ZTU3YzFmNzQ4ZSIsImlhdCI6MTY0OTY4OTQ2NCwiZXhwIjoxNjQ5Nzc1ODY0fQ.qpqRmdfnauXz8cnuRKtFtn_ajPriMwUQWuwpmBuj0Z0"
        }
    }

## Login User

### Request
        fetch('/auth/local/login',{
            method:"POST",
            headers: new Headers({
                'Authorization': `Bearer ${authToken}`, 
                'Content-Type': 'application/x-www-form-urlencoded'
            }), 
            body:JSON.stringify(
                {
                    "email": "correo7@gmail.com",
                    "password": "123s45#7S"
                }
            ),
         })
            .then(res=>res.json())
            .then(json=>console.log(json))

### Response

    {
        "success": true,
        "token": {
            "authToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNTQ0Mzc3MTBiNGQ5ZTU3YzFmNzQ4ZSIsInVzZXIiOnsiZW1haWwiOiJjb3JyZW8xMEBnbWFpbC5jb20ifSwiaWF0IjoxNjQ5Njg5NTAyLCJleHAiOjE2NDk2OTY3MDJ9.uLtMYycYQbbXvdgm53b6IhLqpF3A-wjlYW-rwYin7kY",
            "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNTQ0Mzc3MTBiNGQ5ZTU3YzFmNzQ4ZSIsImlhdCI6MTY0OTY4OTUwMiwiZXhwIjoxNjQ5Nzc1OTAyfQ.vlArqAxvLM1qwUudoCitW3gl7Br1CX5q6e12MHD2Wbc"
        }
    }

## Get List of Favorites

         fetch('/favs/?user_id=624fbbdfea80babf8a455932',{
            method:"GET",
            headers: new Headers({
                'Authorization': `Bearer ${authToken}`, 
                'Content-Type': 'application/x-www-form-urlencoded'
            }), 
         })
            .then(res=>res.json())
            .then(json=>console.log(json))

### Response
    
    {
    "success": true,
    "data": [
        {
            "_id": "62508783efb8cf673e0100ec",
            "user_id": "624fbbdfea80babf8a455932",
            "name": "Canciones Favoritas",
            "fav_items": [
                {
                    "title": "Cancion 1",
                    "description": "Descripcion 1",
                    "link": "link 1",
                    "_id": "6250b65937a59279fd86b70c"
                },
                {
                    "title": "Cancion 2",
                    "description": "Descripcion 2",
                    "link": "link 2",
                    "_id": "6250b66637a59279fd86b70e"
                }
            ],
            "created_at": "2022-04-08T19:05:39.112Z",
            "updated_at": "2022-04-08T22:35:59.896Z",
            "__v": 0
        },
        {
            "_id": "62508830efb8cf673e0100ee",
            "user_id": "624fbbdfea80babf8a455932",
            "name": "Canciones Favoritas",
            "fav_items": [
                {
                    "title": "Bypass",
                    "description": "Bachata",
                    "link": "https://google.com.pe",
                    "_id": "62508830efb8cf673e0100ef"
                },
                {
                    "title": "Standby",
                    "description": "Bachata",
                    "link": "https://google.com.pe/?standby",
                    "_id": "62508830efb8cf673e0100f0"
                }
            ],
            "created_at": "2022-04-08T19:08:32.186Z",
            "updated_at": "2022-04-08T19:08:32.186Z",
            "__v": 0
        },
        {
            "_id": "6250a61007b0dd83e255fb67",
            "user_id": "624fbbdfea80babf8a455932",
            "name": "Canciones Favoritas",
            "fav_items": [
                {
                    "title": "Bypass",
                    "description": "Bachata",
                    "link": "https://google.com.pe",
                    "_id": "6250a61007b0dd83e255fb68"
                },
                {
                    "title": "Standby",
                    "description": "Bachata",
                    "link": "https://google.com.pe/?standby",
                    "_id": "6250a61007b0dd83e255fb69"
                }
            ],
            "created_at": "2022-04-08T21:16:00.292Z",
            "updated_at": "2022-04-08T21:16:00.292Z",
            "__v": 0
        },
        {
            "_id": "6250a7535ee6f80b66ed2325",
            "user_id": "624fbbdfea80babf8a455932",
            "name": "Canciones Favoritas",
            "fav_items": [],
            "created_at": "2022-04-08T21:21:23.998Z",
            "updated_at": "2022-04-08T21:21:23.998Z",
            "__v": 0
        }
    ]
}

## Retrieve specific Favorite List by ID

## Request
         fetch('/favs/6250a61007b0dd83e255fb67,{
            method:"GET",
            headers: new Headers({
                'Authorization': `Bearer ${authToken}`, 
                'Content-Type': 'application/x-www-form-urlencoded'
            }), 
         })
            .then(res=>res.json())
            .then(json=>console.log(json))


### Response
    
    {
    "success": true,
    "data": {
        "_id": "6250a61007b0dd83e255fb67",
        "user_id": "624fbbdfea80babf8a455932",
        "name": "Canciones Favoritas",
        "fav_items": [
            {
                "title": "Bypass",
                "description": "Bachata",
                "link": "https://google.com.pe",
                "_id": "6250a61007b0dd83e255fb68"
            },
            {
                "title": "Standby",
                "description": "Bachata",
                "link": "https://google.com.pe/?standby",
                "_id": "6250a61007b0dd83e255fb69"
            }
        ],
        "created_at": "2022-04-08T21:16:00.292Z",
        "updated_at": "2022-04-08T21:16:00.292Z",
        "__v": 0
    }
}

## Create a new Fav List

### Request
        fetch('/favs/6250a61007b0dd83e255fb67,{
            method:"POST",
            headers: new Headers({
                'Authorization': `Bearer ${authToken}`, 
                'Content-Type': 'application/x-www-form-urlencoded'
            }), 
            body:JSON.stringify(
                {
                    "user_id": "624fbbdfea80babf8a455932",
                    "name": "Canciones Favoritas",
                    "fav_items": [
                        {
                            "title": "Bypass",
                            "description": "Bachata",
                            "link": "https://google.com.pe"
                        },
                        {
                            "title": "Standby",
                            "description": "Bachata",
                            "link": "https://google.com.pe/?standby"
                        }
                    ]
                }
            ),
         })
            .then(res=>res.json())
            .then(json=>console.log(json))

### Response

    {
    "success": true,
    "data": {
        "user_id": "624fbbdfea80babf8a455932",
        "name": "Canciones Favoritas Prueba",
        "fav_items": [
            {
                "title": "Bypass",
                "description": "Bachata",
                "link": "https://google.com.pe",
                "_id": "625442d110b4d9e57c1f748a"
            },
            {
                "title": "Standby",
                "description": "Bachata",
                "link": "https://google.com.pe/?standby",
                "_id": "625442d110b4d9e57c1f748b"
            }
        ],
        "_id": "625442d110b4d9e57c1f7489",
        "created_at": "2022-04-11T15:01:38.015Z",
        "updated_at": "2022-04-11T15:01:38.015Z",
        "__v": 0
    }
}

## Delete a Fav List

### Request
         fetch('/favs/6250a61007b0dd83e255fb67',{
            method:"DELETE",
            headers: new Headers({
                'Authorization': `Bearer ${authToken}`, 
                'Content-Type': 'application/x-www-form-urlencoded'
            }), 
         })
            .then(res=>res.json())
            .then(json=>console.log(json))

### Response

    Status: 204 No Content