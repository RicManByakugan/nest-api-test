export const apiSummaryHtml = `
      <html>
        <head>
          <style>
            body {
              font-family: Arial, sans-serif;
              margin: 20px;
              color: #333;
            }
            h1 {
              color: #4CAF50;
              text-align: center;
            }
            h2 {
              color: #2196F3;
              border-bottom: 2px solid #2196F3;
              padding-bottom: 5px;
            }
            ul {
              list-style-type: none;
              padding: 0;
            }
            li {
              margin: 10px 0;
              background: #f9f9f9;
              padding: 10px;
              border-radius: 5px;
              transition: background-color 0.3s;
            }
            li:hover {
              background: #e0f7fa;
            }
            code {
              background: #eee;
              padding: 2px 4px;
              border-radius: 4px;
              font-size: 90%;
            }
            a {
              color: #2196F3;
              text-decoration: none;
            }
            a:hover {
              text-decoration: underline;
            }
          </style>
        </head>
        <body>
          <p>Accédez aux API en ligne : 
            <a href="https://nest-api-test-4gx5.onrender.com/user" target="_blank">User API</a> | 
            <a href="https://nest-api-test-4gx5.onrender.com/entity" target="_blank">Entity API</a> | 
            <a href="https://nest-api-test-4gx5.onrender.com/user-entity" target="_blank">UserEntity API</a>
          </p>

          <h2>User API</h2>
          <ul>
            <li>
              <strong>GET</strong> <a href="https://nest-api-test-4gx5.onrender.com/user" target="_blank"><code>/user</code></a> - Récupère tous les utilisateurs.
            </li>
            <li>
              <strong>GET</strong> <a href="https://nest-api-test-4gx5.onrender.com/user/:id" target="_blank"><code>/user/:id</code></a> - Récupère un utilisateur par ID.
            </li>
            <li>
              <strong>POST</strong> <code>/user/create</code> - Crée un nouvel utilisateur.
            </li>
            <li>
              <strong>PATCH</strong> <code>/user/update/:id</code> - Met à jour un utilisateur existant.
            </li>
            <li>
              <strong>PUT</strong> <code>/user/update-all-fields/:id</code> - Met à jour tous les champs d'un utilisateur.
            </li>
            <li>
              <strong>DELETE</strong> <code>/user/delete/:id</code> - Supprime un utilisateur.
            </li>
          </ul>

          <h2>Entity API</h2>
          <ul>
            <li>
              <strong>GET</strong> <a href="https://nest-api-test-4gx5.onrender.com/entity" target="_blank"><code>/entity</code></a> - Récupère toutes les entités.
            </li>
            <li>
              <strong>GET</strong> <a href="https://nest-api-test-4gx5.onrender.com/entity/:id" target="_blank"><code>/entity/:id</code></a> - Récupère une entité par ID.
            </li>
            <li>
              <strong>POST</strong> <code>/entity/create</code> - Crée une nouvelle entité.
            </li>
            <li>
              <strong>PATCH</strong> <code>/entity/update/:id</code> - Met à jour une entité existante.
            </li>
            <li>
              <strong>PUT</strong> <code>/entity/update-all-fields/:id</code> - Met à jour tous les champs d'une entité.
            </li>
            <li>
              <strong>DELETE</strong> <code>/entity/delete/:id</code> - Supprime une entité.
            </li>
          </ul>

          <h2>UserEntity API</h2>
          <ul>
            <li>
              <strong>GET</strong> <a href="https://nest-api-test-4gx5.onrender.com/user-entity" target="_blank"><code>/user-entity</code></a> - Récupère toutes les relations utilisateur-entité.
            </li>
            <li>
              <strong>GET</strong> <a href="https://nest-api-test-4gx5.onrender.com/user-entity/:id" target="_blank"><code>/user-entity/:id</code></a> - Récupère une relation par ID.
            </li>
            <li>
              <strong>POST</strong> <code>/user-entity/create</code> - Crée une relation utilisateur-entité.
            </li>
            <li>
              <strong>PATCH</strong> <code>/user-entity/update/:id</code> - Met à jour une relation existante.
            </li>
            <li>
              <strong>DELETE</strong> <code>/user-entity/delete/:id</code> - Supprime une relation.
            </li>
          </ul>
        </body>
      </html>
    `