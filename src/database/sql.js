-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema zoo
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema zoo
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS zoo DEFAULT CHARACTER SET utf8 ;
USE zoo ;

-- -----------------------------------------------------
-- Table zoo.zoologico
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS zoo.zoologico (
  idZoologico INT(3) NOT NULL AUTO_INCREMENT,
  nom VARCHAR(25) NOT NULL,
  ciudad VARCHAR(35) NOT NULL,
  pais VARCHAR(25) NOT NULL,
  tamanio INT(3) NULL,
  presupuesto DOUBLE(8,2) NULL,
  PRIMARY KEY (idZoologico))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table zoo.Especie
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS zoo.Especie (
  idEspecie INT(3) NOT NULL,
  nomCientifico VARCHAR(35) NOT NULL,
  familia VARCHAR(25) NOT NULL,
  enExtinsion TINYINT(1) NOT NULL,
  PRIMARY KEY (idEspecie),
  UNIQUE INDEX idEspecie_UNIQUE (idEspecie ASC) ,
  UNIQUE INDEX nomCientifico_UNIQUE (nomCientifico ASC) )
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table zoo.Animal
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS zoo.Animal (
  idAnimal INT(6) NOT NULL,
  nomVulgar VARCHAR(25) NOT NULL,
  sexo CHAR(1) NOT NULL COMMENT 'F) Femenino\nM) Masculino',
  anioNacimiento YEAR(4) NOT NULL,
  paisOrigen VARCHAR(30) NOT NULL,
  continente VARCHAR(20) NOT NULL,
  zoologico_idZoologico INT(3) NOT NULL,
  Especie_idEspecie INT(3) NOT NULL,
  PRIMARY KEY (idAnimal),
  UNIQUE INDEX idAnimal_UNIQUE (idAnimal ASC) ,
  INDEX fk_Animal_zoologico_idx (zoologico_idZoologico ASC) ,
  INDEX fk_Animal_Especie1_idx (Especie_idEspecie ASC) ,
  CONSTRAINT fk_Animal_zoologico
    FOREIGN KEY (zoologico_idZoologico)
    REFERENCES zoo.zoologico (idZoologico)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT fk_Animal_Especie1
    FOREIGN KEY (Especie_idEspecie)
    REFERENCES zoo.Especie (idEspecie)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
