# Conduit (Medium Clone on realworld.io)

## Technologies Used:

1. NodeJS - Platform
2. TypeScript - Programmming Language
3. PostgreSQL - Database
4. TypeORM - ORM

## Database Setup

1. Enter 'psql' as postgres(default username)

2. Create Database, user and grant privillages

'''psql
CREATE DATABASE conduit;
create user conduit with encrypted password 'conduit';
grant all privileges on database conduit to conduit;
'''
