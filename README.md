## Manual installation
 - Install nodejs locally ()
 - Clone the repo
 - Install dependencies (npm install)
 - Start the DB locally
    - docker run -d --name mongodb -p 27017:27017 -e MONGO_INITDB_ROOT_USERNAME=admin -e MONGO_INITDB_ROOT_PASSWORD=admin mongo
    - Go to mongodb atlas and get yourself a new DB URL
 - Change the .env file and update your DB credentials
 - npm run build
 - npm run start

 ## Docker installation
 - Install docker
 - Create a network - docker network create user_project
 - Start mongodb
    -  docker run -d --name mongodb -p 27017:27017 -e MONGO_INITDB_ROOT_USERNAME=admin -e MONGO_INITDB_ROOT_PASSWORD=admin --network user_project mongo
 - Build the image - `docker build --network=host -t user-project .`
 - Start the image - `docker run -p 3000:3000 --network user_project user-project`

 ## Docker Compose installation steps
 - Install docker, docker-compose
 - Run `docker-compose up`