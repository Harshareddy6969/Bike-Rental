
## install node js from www.nodejs.org
## install postgresql on your system from www.postgresql.org/download/
 --add the postgresql bin into your system variables
 --use the following comman to import the database schema 
 --psql -U postgres -d bike_rent -f F:\storage\ONLINE_PROJECTS\postgres_project\bike-rental\bike_rental.dump

## installing the dependencies --go into the main folder (i.e BIKE-RENTAL) and run 
    $npm install
 --now again go into FrontEnd Folder(i.e client) by using
    $cd client
    now run the following command to install dependencies into the frontend project
        $npm install

## once the database is set run the server within the main folder (i.e BIKE-RENTAL) in one terminal using the command 
    $npm run server
    
## navigate into FrontEnd(i.e client) folder and run the following command in another folder
    $npm run start
    you can also use
    $npm run client in the main folder also