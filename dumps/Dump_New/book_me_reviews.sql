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
-- Table structure for table `reviews`
--

DROP TABLE IF EXISTS `reviews`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `reviews` (
  `id` int NOT NULL AUTO_INCREMENT,
  `rating` decimal(2,1) DEFAULT NULL,
  `comment` text,
  `created` timestamp NULL DEFAULT NULL,
  `updated` timestamp NULL DEFAULT NULL,
  `unit_id` int NOT NULL,
  `user_id` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reviews`
--

LOCK TABLES `reviews` WRITE;
/*!40000 ALTER TABLE `reviews` DISABLE KEYS */;
INSERT INTO `reviews` VALUES (1,NULL,'Wonderful stay! Avni is really very welcoming and has always been very responsive to our requests. I recommend the nearby fish restaurant and especially the fish soup.',NULL,NULL,10,22),(3,NULL,'What an amazing spot. I honestly felt like I was in paradise on that terrace',NULL,NULL,10,21),(4,NULL,'Very nice wooden house on stilts, spacious and well laid out. Everything is available for a pleasant stay. The landlord is very accessible for any questions we may have. We were out of season so still quiet.',NULL,NULL,10,20),(5,NULL,'We had a great time at Villa Unedo. We were a large group, but the house is very spacious with many terraces and living rooms so it never felt crowded. Jas was extremely helpful as well as Rosa, the lady next door. It\'s a great place to stay!',NULL,NULL,12,22),(6,NULL,'Everything was great... Hosts were excellent, room was big and clean, there was free wi fi, kitchen with everything. We will come again.',NULL,NULL,1,23),(7,NULL,'Very helpful and friendly staff. Excellent location, close to beach, city center. Clean and comfortable. The guy helped us with the luggage and even gave us a ride in his car. Highly recommended.',NULL,NULL,1,24),(8,NULL,'The apartment is clean and spacious. The host is kind, he allowed to enter the apartment much earlier than the scheduled check-in time, offered a ride when arriving and leaving the apartment, all praise for the young host.',NULL,NULL,1,27),(9,NULL,'Great people, good location, we had a great time. The hosts are also good people.',NULL,NULL,1,26),(10,NULL,'The apartment is big, clean, comfortable. The owner is an exceptional man, he is always kind and honest, he always came to meet us. I would recommend this apartment to everyone. My family and I had a great time.',NULL,NULL,1,25);
/*!40000 ALTER TABLE `reviews` ENABLE KEYS */;
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
