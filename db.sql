-- MySQL dump 10.13  Distrib 5.5.23, for Win32 (x86)
--
-- Host: localhost    Database: monbubec_track
-- ------------------------------------------------------
-- Server version	5.5.23

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `email_login`
--

DROP TABLE IF EXISTS `email_login`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `email_login` (
  `ID` bigint(20) NOT NULL AUTO_INCREMENT,
  `gmt` datetime NOT NULL,
  `agent` varchar(256) NOT NULL,
  `ip` varchar(16) NOT NULL,
  `url` varchar(256) NOT NULL,
  `email` varchar(254) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `email_login`
--

LOCK TABLES `email_login` WRITE;
/*!40000 ALTER TABLE `email_login` DISABLE KEYS */;
/*!40000 ALTER TABLE `email_login` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `email_visit`
--

DROP TABLE IF EXISTS `email_visit`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `email_visit` (
  `ID` bigint(20) NOT NULL AUTO_INCREMENT,
  `gmt` datetime NOT NULL,
  `agent` varchar(256) NOT NULL,
  `ip` varchar(16) NOT NULL,
  `url` varchar(256) NOT NULL,
  `email` varchar(254) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `email_visit`
--

LOCK TABLES `email_visit` WRITE;
/*!40000 ALTER TABLE `email_visit` DISABLE KEYS */;
/*!40000 ALTER TABLE `email_visit` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `facebook_login`
--

DROP TABLE IF EXISTS `facebook_login`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `facebook_login` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `gmt` datetime NOT NULL,
  `agent` varchar(256) NOT NULL,
  `ip` varchar(16) NOT NULL,
  `url` varchar(256) NOT NULL,
  `fb_id` mediumtext NOT NULL,
  `email` varchar(254) NOT NULL,
  `first_name` varchar(64) NOT NULL,
  `middle_name` varchar(64) NOT NULL,
  `last_name` varchar(64) NOT NULL,
  `full_name` varchar(172) NOT NULL,
  `gender` varchar(16) NOT NULL,
  `locale` varchar(8) NOT NULL,
  `timezone` varchar(64) NOT NULL,
  `username` varchar(128) NOT NULL,
  `verified` varchar(16) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `facebook_login`
--

LOCK TABLES `facebook_login` WRITE;
/*!40000 ALTER TABLE `facebook_login` DISABLE KEYS */;
/*!40000 ALTER TABLE `facebook_login` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `facebook_visit`
--

DROP TABLE IF EXISTS `facebook_visit`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `facebook_visit` (
  `ID` bigint(20) NOT NULL AUTO_INCREMENT,
  `gmt` datetime NOT NULL,
  `agent` varchar(256) NOT NULL,
  `ip` varchar(16) NOT NULL,
  `url` varchar(256) NOT NULL,
  `fb_id` mediumtext NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `facebook_visit`
--

LOCK TABLES `facebook_visit` WRITE;
/*!40000 ALTER TABLE `facebook_visit` DISABLE KEYS */;
/*!40000 ALTER TABLE `facebook_visit` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `nologin`
--

DROP TABLE IF EXISTS `nologin`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `nologin` (
  `ID` bigint(20) NOT NULL AUTO_INCREMENT,
  `gmt` datetime NOT NULL,
  `agent` varchar(256) NOT NULL,
  `ip` varchar(16) NOT NULL,
  `url` varchar(256) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `nologin`
--

LOCK TABLES `nologin` WRITE;
/*!40000 ALTER TABLE `nologin` DISABLE KEYS */;
/*!40000 ALTER TABLE `nologin` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2013-10-15 12:27:22
