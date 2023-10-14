# Node.js, Sequelize, CockroachDB, and Express Project

This is a Node.js project that demonstrates how to use Sequelize, CockroachDB, and Express to create a basic CRUD API.

## Features

- Create, read, update, and delete (CRUD) operations
- RESTful API using Express
- Data storage with Sequelize and CockroachDB

![terminal](https://github.com/thevargheseshibu/node-sequelize-cockroachDB-crud/blob/master/images/terminal.png)
![insert](https://github.com/thevargheseshibu/node-sequelize-cockroachDB-crud/blob/master/images/insert.png)
![read](https://github.com/thevargheseshibu/node-sequelize-cockroachDB-crud/blob/master/images/read.png)


### Prerequisites


- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)
- [CockroachDB](https://www.cockroachlabs.com/docs/v20.2/build-a-nodejs-app-with-cockroachdb.html)

### Installation


1. Clone the repository:

   ```sh
   git clone https://github.com/yourusername/your-repo.git
   ```

2. Navigate to the project directory:

   ```sh
   Copy code
   cd your-repo
   ```

3. Install dependencies:

   ```sh
   Copy code
   npm install
   ```

4. Set up your CockroachDB connection details in config.js or a configuration file:

module.exports = {
database: 'your-database-name',
username: 'your-username',
password: 'your-password',
host: 'your-host',
port: 26257, // CockroachDB default port
};

5. Run the application:

   ```sh
   Copy code
   npm start
   ```
