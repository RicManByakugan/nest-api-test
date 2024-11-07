# Nest API Project

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

Ce projet utilise NestJS pour gérer une API. Vous pouvez importer la collection Postman avec le fichier [`NEST API TEST.postman_collection.json`](./NEST%20API%20TEST.postman_collection.json) pour effectuer les tests.

## Table des matières
- [Résumé des API](#résumé-des-api)
  - [User API](#user-api)
  - [Entity API](#entity-api)
  - [UserEntity API](#userentity-api)
- [Installation](#installation)
- [Compilation et exécution](#compilation-et-exécution)
- [Tests](#tests)
- [Déploiement](#déploiement)

## Résumé des API

### User API

- **GET** /user  
  Récupère tous les utilisateurs.
  **Réponse**: `ResponseApi<ResponseUserDto[]>` - Un tableau d'objets `ResponseUserDto` enveloppé dans un objet `ResponseApi`.

- **GET** /user/:id  
  Récupère un utilisateur par ID.
  **Paramètres de chemin**: `id` - L'ID de l'utilisateur à récupérer.
  **Réponse**: `ResponseApi<ResponseUserDto>` - L'objet `ResponseUserDto` de l'utilisateur demandé, enveloppé dans un objet `ResponseApi`.

- **POST** /user/create  
  Crée un nouvel utilisateur.
  **Structure des données** :
  ```json
  {
    "name": "Ben",
    "firstName": "Ben", 
    "language": "FR",
    "email": "mail@mail.com",
    "password": "secret"
  }
  **Réponse**: `ResponseApi<ResponseUserDto>` - L'objet `ResponseUserDto` créé, enveloppé dans un objet `ResponseApi`.

- **PATCH** /user/update/:id
  Met à jour un utilisateur existant.
  **Paramètres de chemin**: `id` - L'ID de l'utilisateur à mettre à jour.
  **Structure des données** :
  ```json
  {
    "name": "Name updated"
  }
  **Réponse**: `ResponseApi<User>` - L'objet `User` mis à jour, enveloppé dans un objet `ResponseApi`.

- **PUT** /user/update-all-fields/:id
  Met à jour tous les champs d'un utilisateur existant.
  **Paramètres de chemin**: `id` - L'ID de l'utilisateur à mettre à jour.
  **Structure des données** :
  ```json
  {
    "name": "Jean",
    "firstName": "Robert",
    "language": "FR",
    "email": "add@add.com",
    "password": "pass"
  }
  **Réponse**: `ResponseApi<User>` - L'objet `User` mis à jour, enveloppé dans un objet `ResponseApi`.

- **DELETE** /user/delete/:id
  Supprime un utilisateur existant.
  **Paramètres de chemin**: `id` - L'ID de l'utilisateur à supprimer.
  **Réponse**: `ResponseApi<User>` - L'objet `User` supprimé, enveloppé dans un objet `ResponseApi`.

### Entity API

- **GET** /entity
  Récupère toutes les entités.
  **Réponse**: `ResponseApi<ResponseEntityDto[]>` - Un tableau d'objets `ResponseEntityDto` enveloppé dans un objet `ResponseApi`.

- **GET** /entity/:id
  Récupère une entité par ID.
  **Paramètres de chemin**: `id` - L'ID de l'entité à récupérer.
  **Réponse**: `ResponseApi<ResponseEntityDto>` - L'objet `ResponseEntityDto` de l'entité demandée, enveloppé dans un objet `ResponseApi`.

- **POST** /entity/create
  Crée une nouvelle entité.
  **Structure des données** :
  ```json
  {
    "name": "Name of the object",
    "description": "Some description about the description",
    "siret": "Siret",
    "keyLicence": "6K5ZEA",
    "website": "web.com"
  }
  **Réponse**: `ResponseApi<ResponseEntityDto>` - L'objet `ResponseEntityDto` créé, enveloppé dans un objet `ResponseApi`.

- **PATCH** /entity/update/:id
  Met à jour une entité existante.
  **Paramètres de chemin**: `id` - L'ID de l'entité à mettre à jour.
  **Structure des données** :
  ```json
  {
    "name": "Name updated"
  }
  **Réponse**: `ResponseApi<EntityObject>` - L'objet `EntityObject` mis à jour, enveloppé dans un objet `ResponseApi`.

- **PUT** /entity/update-all-fields/:id
  Met à jour tous les champs d'une entité existante.
  **Paramètres de chemin**: `id` - L'ID de l'entité à mettre à jour.
  **Structure des données** :
  ```json
  {
    "name": "Add your name in the body",
    "description": "Add your name in the body",
    "siret": "Add your ",
    "keyLicence": "add@add.com"
  }
  **Réponse**: `ResponseApi<EntityObject>` - L'objet `EntityObject` mis à jour, enveloppé dans un objet `ResponseApi`.

- **DELETE** /entity/delete/:id
  Supprime une entité existante.
  **Paramètres de chemin**: `id` - L'ID de l'entité à supprimer.
  **Réponse**: `ResponseApi<EntityObject>` - L'objet `EntityObject` supprimé, enveloppé dans un objet `ResponseApi`.

### UserEntity API

- **GET** /user-entity
  Récupère toutes les relations entre utilisateurs et entités.
  **Réponse**: `ResponseApi<UserEntity[]>` - Un tableau d'objets `UserEntity` enveloppé dans un objet `ResponseApi`.

- **GET** /user-entity/:id
  Récupère une relation entre un utilisateur et une entité par son ID.
  **Paramètres de chemin**: `id` - L'ID de la relation à récupérer.
  **Réponse**: `ResponseApi<UserEntity>` - L'objet `UserEntity` de la relation demandée, enveloppé dans un objet `ResponseApi`.

- **POST** /user-entity/create
  Crée une nouvelle relation entre un utilisateur et une entité.
  **Structure des données** :
  ```json
  {
    "userId": 1,
    "entityId": 1
  }
  **Réponse**: `ResponseApi<UserEntity>` - L'objet `UserEntity` créé, enveloppé dans un objet `ResponseApi`.

- **PATCH** /user-entity/update/:id
  Met à jour une relation existante entre un utilisateur et une entité.
  **Paramètres de chemin**: `id` - L'ID de la relation à mettre à jour.
  **Structure des données** :
  ```json
  {
    "userId": 1,
    "entityId": 2
  }
  **Réponse**: `ResponseApi<UserEntity>` - L'objet `UserEntity` mis à jour, enveloppé dans un objet `ResponseApi`.

- **DELETE** /user-entity/delete/:id
  Supprime une relation existante entre un utilisateur et une entité.
  **Paramètres de chemin**: `id` - L'ID de la relation à supprimer.
  **Réponse**: `ResponseApi<UserEntity>` - L'objet `UserEntity` supprimé, enveloppé dans un objet `ResponseApi`.

## Installation

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Compilation et exécution

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Déploiement

Lorsque vous serez prêt à déployer votre application NestJS en production, il existe quelques étapes clés à suivre pour vous assurer qu'elle fonctionne de manière aussi efficace que possible. Consultez la [documentation sur le déploiement](https://docs.nestjs.com/deployment) pour plus d'informations.

Si vous recherchez une plateforme cloud pour déployer votre application NestJS, découvrez [Mau](https://mau.nestjs.com), notre plateforme officielle pour déployer des applications NestJS sur AWS. Mau rend le déploiement simple et rapide, ne nécessitant que quelques étapes simples :

```bash
$ npm install -g mau
$ mau deploy
```