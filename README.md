<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

## User API - Endpoints

### Get All Users
**Route**: `GET /user`
**Description**: Retrieves all users.
**Response**: `ResponseApi<ResponseUserDto[]>` - An array of `ResponseUserDto` objects wrapped in a `ResponseApi` object.

### Create User
**Route**: `POST /user/create`
**Description**: Creates a new user.
**Request Body**: `CreateUserDto` - DTO containing the data for the new user.
**Response**: `ResponseApi<ResponseUserDto>` - The created `ResponseUserDto` object wrapped in a `ResponseApi` object.

### Update User
**Route**: `PATCH /user/update/:id`
**Description**: Updates an existing user.
**Path Parameters**: `id` - The ID of the user to update.
**Request Body**: `UpdateUserDto` - DTO containing the updated data for the user.
**Response**: `ResponseApi<User>` - The updated `User` object wrapped in a `ResponseApi` object.

### Update All Fields of a User
**Route**: `PUT /user/update-all-fields/:id`
**Description**: Updates all fields of an existing user.
**Path Parameters**: `id` - The ID of the user to update.
**Request Body**: `UpdateAllFieldUserDto` - DTO containing the updated data for the user.
**Response**: `ResponseApi<User>` - The updated `User` object wrapped in a `ResponseApi` object.

### Delete User
**Route**: `DELETE /user/delete/:id`
**Description**: Deletes an existing user.
**Path Parameters**: `id` - The ID of the user to delete.
**Response**: `ResponseApi<User>` - The deleted `User` object wrapped in a `ResponseApi` object.

### Get User by ID
**Route**: `GET /user/:id`
**Description**: Retrieves a user by its ID.
**Path Parameters**: `id` - The ID of the user to retrieve.
**Response**: `ResponseApi<ResponseUserDto>` - The `ResponseUserDto` object for the requested user, wrapped in a `ResponseApi` object.



## Entity API - Endpoints

### Get All Entities
**Route**: `GET /entity`
**Description**: Retrieves all entities.
**Response**: `ResponseApi<ResponseEntityDto[]>` - An array of `ResponseEntityDto` objects wrapped in a `ResponseApi` object.

### Create Entity
**Route**: `POST /entity/create`
**Description**: Creates a new entity.
**Request Body**: `CreateEntityObjectDto` - DTO containing the data for the new entity.
**Response**: `ResponseApi<ResponseEntityDto>` - The created `ResponseEntityDto` object wrapped in a `ResponseApi` object.

### Update Entity
**Route**: `PATCH /entity/update/:id`
**Description**: Updates an existing entity.
**Path Parameters**: `id` - The ID of the entity to update.
**Request Body**: `UpdateEntityObjectDto` - DTO containing the updated data for the entity.
**Response**: `ResponseApi<EntityObject>` - The updated `EntityObject` wrapped in a `ResponseApi` object.

### Update All Fields in an Entity
**Route**: `PUT /entity/update-all-fields/:id`
**Description**: Updates all fields of an existing entity.
**Path Parameters**: `id` - The ID of the entity to update.
**Request Body**: `UpdateEntityObjectDto` - DTO containing the updated data for the entity.
**Response**: `ResponseApi<EntityObject>` - The updated `EntityObject` wrapped in a `ResponseApi` object.

### Delete Entity
**Route**: `DELETE /entity/delete/:id`
**Description**: Deletes an existing entity.
**Path Parameters**: `id` - The ID of the entity to delete.
**Response**: `ResponseApi<EntityObject>` - The deleted `EntityObject` wrapped in a `ResponseApi` object.

### Get Entity by ID
**Route**: `GET /entity/:id`
**Description**: Retrieves an entity by its ID.
**Path Parameters**: `id` - The ID of the entity to retrieve.
**Response**: `ResponseApi<ResponseEntityDto>` - The `ResponseEntityDto` object for the requested entity, wrapped in a `ResponseApi` object.



## UserEntity API - Endpoints

### Get All User Entities
**Route**: `GET /user-entity`
**Description**: Retrieves all user entities.
**Response**: `ResponseApi<UserEntity[]>` - An array of `UserEntity` objects wrapped in a `ResponseApi` object.

### Get User Entity by ID
**Route**: `GET /user-entity/:id`
**Description**: Retrieves a user entity by its ID.
**Path Parameters**: `id` - The ID of the user entity to retrieve.
**Response**: `ResponseApi<UserEntity>` - The `UserEntity` object for the requested user entity, wrapped in a `ResponseApi` object.

### Create User Entity
**Route**: `POST /user-entity/create`
**Description**: Creates a new user entity.
**Request Body**: `CreateAndUpdateUserEntityDto` - DTO containing the data for the new user entity.
**Response**: `ResponseApi<UserEntity>` - The created `UserEntity` object wrapped in a `ResponseApi` object.

### Update User Entity
**Route**: `PATCH /user-entity/update/:id`
**Description**: Updates an existing user entity.
**Path Parameters**: `id` - The ID of the user entity to update.
**Request Body**: `CreateAndUpdateUserEntityDto` - DTO containing the updated data for the user entity.
**Response**: `ResponseApi<UserEntity>` - The updated `UserEntity` object wrapped in a `ResponseApi` object.

### Delete User Entity
**Route**: `DELETE /user-entity/delete/:id`
**Description**: Deletes an existing user entity.
**Path Parameters**: `id` - The ID of the user entity to delete.
**Response**: `ResponseApi<UserEntity>` - The deleted `UserEntity` object wrapped in a `ResponseApi` object.



## Installations

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Deployment

When you're ready to deploy your NestJS application to production, there are some key steps you can take to ensure it runs as efficiently as possible. Check out the [deployment documentation](https://docs.nestjs.com/deployment) for more information.

If you are looking for a cloud-based platform to deploy your NestJS application, check out [Mau](https://mau.nestjs.com), our official platform for deploying NestJS applications on AWS. Mau makes deployment straightforward and fast, requiring just a few simple steps:

```bash
$ npm install -g mau
$ mau deploy
```