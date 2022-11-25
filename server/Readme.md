***************************user Registration*****************************************

Request type --POST

**EndPoint**
http://localhost:7000/api/v1/user/register

**Req.Body**
{
  "name":"shri",
  "email":"shri@mail.com",
  "password":"123456789"
}

**response**

{
  "result": true,
  "data": {
    "name": "Shri",
    "email": "shri@mail.com",
    "password": "$2b$10$eLkEuTp3vm5FXMRNuIL1IumLfrwZujsz9u4B/gnak4Q8lpjcQYJ72",
    "_id": "6374887a4b7aad629ab14d46",
    "createdAt": "2022-11-16T06:51:38.501Z",
    "updatedAt": "2022-11-16T06:51:38.501Z",
    "__v": 0
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNvbm55QG1haWwuY29tIiwiaWQiOiI2Mzc0OGVjZGM1YmRkZjA4NWU2NTE1N2QiLCJpYXQiOjE2Njg1ODMxMTcsImV4cCI6MTY2ODY2OTUxN30.mc5W9AhJoqBhVg_o18jAex0K8Tbbi_h_ZaKyniK2LH0"
}



*************************************user Login************************************************

Request Type-- POST

**EndPoint**
http://localhost:7000/api/v1/user/login

**Req Body**
{
  "email":"sonny@mail.com",
  "password":"123456789"
}

**Response**
{
  "result": true,
  "msg": {
    "_id": "63748ecdc5bddf085e65157d",
    "name": "Sonny",
    "email": "sonny@mail.com",
    "password": "$2b$10$AtmzyX8QIXlnYyUxsYUBR.NEDZjCTYAe6Xy6rDfxlK3tuL1/LvxxG",
    "createdAt": "2022-11-16T07:18:37.743Z",
    "updatedAt": "2022-11-16T07:18:37.743Z",
    "__v": 0
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNvbm55QG1haWwuY29tIiwiaWQiOiI2Mzc0OGVjZGM1YmRkZjA4NWU2NTE1N2QiLCJpYXQiOjE2Njg1ODM3MTEsImV4cCI6MTY2ODY3MDExMX0.eX8HYJdDMUm35Xc0z1rPjM-kgOMo8zx7H8gAuhnSz8A"
}

