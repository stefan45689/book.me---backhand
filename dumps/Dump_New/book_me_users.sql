CREATE DATABASE  IF NOT EXISTS `book_me` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `book_me`;
-- MySQL dump 10.13  Distrib 8.0.33, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: book_me
-- ------------------------------------------------------
-- Server version	8.0.33

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(50) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `password` varchar(100) DEFAULT NULL,
  `role` enum('anonymus','user','admin') DEFAULT NULL,
  `created` timestamp NULL DEFAULT NULL,
  `updated` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=32 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Admin01','stefan.m45689@gmail.com','SpLod45687>%&&687','admin',NULL,NULL),(19,'anon2','dqdqwd@15656.com','564891594','user','2023-11-05 22:55:42','2023-11-05 22:55:42'),(20,'test12','test12@gmail.com','456456456','user','2024-01-18 18:22:25','2024-01-18 18:22:25'),(21,'testUser168','testing1237@gmail.com','krP45SRzjk48?!58&Fk5','user','2024-06-09 13:54:26','2024-06-09 13:54:26'),(22,'test Angular','ngserve@gmail.com','faW654Awzy','user','2024-06-10 14:42:38','2024-06-10 14:42:38'),(23,'Ana S.','ana1289@gmail.com','Add26510pki','user','2024-09-03 11:56:53','2024-09-03 11:56:53'),(24,'Joseph','joe_malta@yahoo.com','Sklepwf4568798','user','2024-09-03 11:58:35','2024-09-03 11:58:35'),(25,'Dragan','dragi456789@outlook.com','DDgeokdola654879#=+8','user','2024-09-03 11:59:52','2024-09-03 11:59:52'),(26,'Miralem ','miki_s654@gmail.com','apeolfkcmoeings','user','2024-09-03 12:00:56','2024-09-03 12:00:56'),(27,'Sanja','saki_sale125@yahoo.com','1701198917011989','user','2024-09-03 12:05:33','2024-09-03 12:05:33'),(28,'Thomas V.','thomas.veva23@icloud.com','tommyboy77958','user','2024-09-03 13:11:23','2024-09-03 13:11:23'),(29,'Ekaterina Makarova','katya_mak669@yandex.ru','KaLrpyhWzc7798@22','user','2024-09-03 13:17:15','2024-09-03 13:17:15'),(30,'M. radović','mradov175@outlook.com','pOmcjJFovneujg','user','2024-09-04 19:03:07','2024-09-04 19:03:07'),(31,'Dijana M.','dikimki7@gmail.com','68795123547985','user','2024-09-04 19:04:07','2024-09-04 19:04:07');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-09-08 18:22:04
