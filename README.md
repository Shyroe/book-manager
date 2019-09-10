This project in the beginning will have styles with a bootstrap framework for React.

## You can run this project with the following command

In the project directory, you can run:

### `npm start`

In the project I'm using json-server to create a simple api, to run it write the following line:

First you need to install json server, for that reason you can run:

### npm install -g json-server

Open the api and check if it's working

### json-server --watch db.json

Then, you can close the server of the API and can run following command to change the port to have the client running in default=3000 and our API in the 4000:

### json-server --watch db.json --port 4000
