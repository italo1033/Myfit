create database MyFit;
use MyFit;
--------------------- REGRAS ---------------------
-- nome de tabela com a primeira letra Mauiscula
-- nome de atributo sempre portugues
-- nome de tipo de atribuito toda em letra Mauiscula
-- outros parametros todo em mauisculo
-- nome de atributo todo minusculo
-- seguir modelo camelCase
-- chave estrangeira iniciar por id

CREATE TABLE Aluno (
    id INT NOT NULL AUTO_INCREMENT,
    nome VARCHAR(50) NOT NULL,
    idade INT NOT NULL,
    cpf VARCHAR(14) NOT NULL,    -- 111.111.111-11
    contato VARCHAR(13) NOT NULL, --(82)9 99999999
    altura FLOAT NOT NULL,
    peso FLOAT NOT NULL,
    dtNascimento  DATETIME NOT NULL,
    percentualGorduraCorporal FLOAT NOT NULL,
    idAcademia INT NOT NULL,
    idInstrutor INT NOT NULL,
    dtMatriculo DATETIME NOT NULL,
    img VARCHAR(100),
    idTipoDeTreino INT,
    PRIMARY KEY (id)
);

CREATE TABLE Instrutor(
    id INT NOT NULL AUTO_INCREMENT,
    nome VARCHAR(50) NOT NULL,
    cpf VARCHAR(14) NOT NULL,
    contato VARCHAR(13) NOT NULL,
    dtNascimento  DATETIME NOT NULL,
    img VARCHAR(100),
    PRIMARY KEY (id)
);


CREATE TABLE Academia(
    id INT NOT NULL AUTO_INCREMENT,
    cnpj VARCHAR(17) NOT NULL,  --11.111.111/1111-11
    razao VARCHAR(50) NOT NULL,
    nomeFantasia VARCHAR(50) NOT NULL,
    idAluno INT NOT NULL,
    idInstrutor INT NOT NULL,
    idMaquina INT NOT NULL,
    img VARCHA(100),
    PRIMARY KEY (id)
)

CREATE TABLE Inventario(
    id INT NOT NULL AUTO_INCREMENT,
    nome VARCHAR(20) NOT NULL,
    img VARCHAR(100) NOT NULL,
    video VARCHAR(255) NOT NULL,
    quantidade INT NOT NULL,
    PRIMARY KEY(id)
);


CREATE TABLE Exercicio(
    id INT NOT NULL AUTO_INCREMENT,
    nome VARCHAR(20) NOT NULL,
    img VARCHAR(100) NOT NULL,
    video VARCHAR(255) NOT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE TipoDeTreino(
    id INT NOT NULL AUTO_INCREMENT,
    nome VARCHAR(20) NOT NULL,
    PRIMARY KEY(id)
);