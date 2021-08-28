# Not to do Backend api

this is the backend api for our not tto do react app
##how to use
-clone the project
-run `npm install`
-Make sure to have `nodemon` install globally in your system, if you dont have then run ` npm i -g nodemon`
-run `npm start`

##Api Endpointss
-All the api and point will folllow the rootUrl/api/v1/` path | # | API | Method | Description | |----|----|----| |1.|`/`|GET | Fet single task if @id param is provide otherwise fetch all the ticket list from server | |2.|`/`|POST | Add new ticket in the database | |3.|`/`|Delete | Expects IDs to be deleted,and delets from the database. | |4.|`/`|PATCH | Expects @ids,update the task to do list and not to do list |
