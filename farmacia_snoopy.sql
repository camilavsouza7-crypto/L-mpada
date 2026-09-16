DROP DATABASE IF EXISTS farmacia_snoopy;

CREATE DATABASE farmacia_snoopy;

USE farmacia_snoopy;

CREATE TABLE funcionarios (
  
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(150) NOT NULL UNIQUE,
    senha VARCHAR(50) NOT NULL,
    horario_entrada TIME NOT NULL,
    horario_saida TIME NOT NULL
);

SELECT * FROM funcionarios;
show tables;                 