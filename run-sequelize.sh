#!/usr/bin/env bash

sequelize model:create --name User --attributes "username:string, password:string, contact:string, isAdmin:boolean"

sequelize model:create --name Location --attributes "name:string, males:integer, female:integer"
