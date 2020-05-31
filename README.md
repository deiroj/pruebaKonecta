# Pruebas React
Prueba de React

CREATE DATABASE pruebasReact;

CREATE TABLE `productos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(500) NOT NULL,
  `referencia` varchar(100) NOT NULL,
  `precio` int NOT NULL,
  `peso` int NOT NULL,
  `categoria` varchar(100) NOT NULL,
  `stock` int NOT NULL DEFAULT '0',
  `fecha_creacion` date NOT NULL,
  `fecha_ultima_venta` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8
