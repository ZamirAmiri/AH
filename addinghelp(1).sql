-- phpMyAdmin SQL Dump
-- version 4.8.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Gegenereerd op: 05 feb 2019 om 16:00
-- Serverversie: 10.1.34-MariaDB
-- PHP-versie: 7.2.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `addinghelp`
--

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `ActiveUsers`
--

CREATE TABLE `ActiveUsers` (
  `userId` int(11) NOT NULL,
  `session` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Gegevens worden geëxporteerd voor tabel `ActiveUsers`
--

INSERT INTO `ActiveUsers` (`userId`, `session`) VALUES
(1, '018fa08d-11e0-4f21-8d7e-83df78790d05'),
(1, '01fceab6-f24f-459a-adb0-092fe7a93b12'),
(1, '0702b69d-b011-438e-bfb4-ec3f5daad689'),
(1, '07c6d2b3-44ae-48bd-8825-19070d383fc5'),
(1, '0c1e7be9-f0ab-4c77-b501-4aaa8a2731fa'),
(1, '0c76379c-7e15-4b53-9818-63d74cb7a175'),
(1, '0e0469a4-fed1-4b77-b390-5379e505ce1a'),
(1, '10eb10f3-454d-4364-b3bb-973759ced531'),
(1, '1576cd2c-fdd9-408e-a448-47aade3661cb'),
(1, '16387f82-c60d-49e7-82b1-7988ecd33213'),
(1, '16e45a8e-e3f6-41e7-a740-9f9dbb3ce21a'),
(1, '1bad13cb-aba3-45ca-a64b-6b4ee0276698'),
(1, '1bb1493b-07f6-414e-8b5d-2ec74941c7d9'),
(1, '1eff60b5-5378-4c18-82ae-d9aa6fcbadf6'),
(1, '20ebbb1c-8a23-4b19-ad09-7aa666c61350'),
(1, '22f84e85-db0d-4b92-8abe-a58c7e416ea6'),
(1, '25538681-c6b4-45ec-a715-0e0d39e78a0d'),
(1, '26fac527-83fd-42d5-b604-4e8a1200c7bf'),
(1, '276adf99-b9fd-4b34-8eea-f983d67adb3f'),
(1, '27ba3f63-2e99-4e13-ab38-f3fa6ded0262'),
(1, '28c46ad9-a8af-4066-8857-3de46f2dfff6'),
(1, '297d9c2e-8c48-4657-b732-aaf032d08611'),
(1, '298c26a5-2311-493a-be17-c2da390e5674'),
(1, '30861757-7fa8-4cb9-b8ff-dcbe0933c8a2'),
(1, '36d35f8d-dcc9-478e-b085-e531b8e9583e'),
(1, '39fb361b-7433-4da8-a39d-e4b6aecdaa11'),
(1, '3ab2fa3a-e7e6-4770-87f7-9caefe508889'),
(1, '48147a8e-532e-4e6a-a5ae-41abd6f9f139'),
(1, '48d5ce8c-e1c4-4c3b-8cf4-c85589efa0fa'),
(1, '4a9625c1-49e9-4dab-aa49-c5b3be61a0d8'),
(1, '4da73a5a-b70c-47dc-aed6-479780059f04'),
(1, '4ff329e3-6f29-4043-b16d-b26b83105f23'),
(1, '5038c432-2789-4a82-b9c9-44c7da67997e'),
(1, '57bab73c-114c-451c-87de-a284fdc1649a'),
(1, '5b3a6258-711b-4e94-846f-09e99c4a1e50'),
(1, '5b9d748c-abb1-4765-bfe8-d97782b29be7'),
(1, '5cc5ef4b-65d7-411e-a764-e87ea3cab008'),
(1, '5e784b30-a3f1-4b85-9702-063b00858157'),
(1, '5ee22c42-78f9-44c8-a6d3-49a0a93fe60a'),
(1, '61f04258-65a2-4133-87a6-71e704a32323'),
(1, '64390c92-bbb2-4972-8dac-6eb3884c686e'),
(1, '654b3d15-9a32-40c7-9914-320c1f97ab45'),
(1, '656caeec-257c-43af-9787-5d65562511d9'),
(1, '67716dea-ac56-4a65-8f24-cc85eca1eecc'),
(1, '67e2c7bc-cb0b-4c35-956a-ada77ef760cd'),
(1, '6bbb26fc-9ed3-4f79-80a2-37f513192154'),
(1, '6cb860aa-f61f-4bc5-950f-d1d598c8bcd2'),
(1, '6d0fd8c4-e463-4f46-a833-11bedb8ba89f'),
(1, '6da95c57-359b-4222-b6bc-dc9fa678bfd7'),
(1, '6ece12b8-d696-4672-a83b-0d125cb2b3e6'),
(1, '705379b7-48e8-4019-9d53-ecacfc5fd86e'),
(1, '751e4ee4-f96d-415c-a3c9-bc1f3daf0cfe'),
(1, '7b6ec03d-91f6-49f4-a1eb-643ca533431e'),
(1, '7d5f2434-2686-43b5-95e9-8d2eeedb984e'),
(1, '82ca342c-6af1-4438-aa86-e9721a4cd181'),
(1, '83c0d61c-2d14-4457-b721-cd292a90398b'),
(1, '859645e5-561d-4ed7-950f-6a9105508565'),
(1, '87ecf63f-1670-4674-8b53-6953c472c0fb'),
(1, '8d96ea0f-c88b-47a3-8d53-1fc19ce77d27'),
(1, '9378abf7-e538-47ff-a5e5-c3df8cdd865c'),
(1, '97050808-4e83-406f-86a9-2817ade0d74a'),
(1, '9a69a77d-8969-4db6-8640-2d8d2e1fe467'),
(1, '9ff0f29b-646b-406d-af45-96312e756ab7'),
(1, 'a375090f-d5c0-4344-b63c-c34e036974d0'),
(1, 'a500ae2a-8281-4557-a61c-43aebc811dec'),
(1, 'a8d2f530-a11d-4628-863a-85b53e7e3976'),
(1, 'ae76fb75-390f-4035-bed9-e8036059afad'),
(1, 'b3cde9bc-de95-492a-a3e9-92d148c1fa73'),
(1, 'b8498f83-e574-4a13-ac3c-fb6d6f15e562'),
(1, 'b998a07c-f9a3-4ef9-8c04-27eeab7d785b'),
(1, 'ba979799-0380-4e4e-ba2e-15f28d0f6d0c'),
(1, 'bd6473a6-ca05-4f07-98e2-c5f63af14750'),
(1, 'c267923f-7dd8-4e25-bbc3-6679429cc55e'),
(1, 'c3707256-8044-4375-8b34-bfdd78816d6d'),
(1, 'c4406e34-61f6-436c-a13c-6d803e5245f9'),
(1, 'c4e714b6-307b-4cb0-b37c-626e348de0c2'),
(1, 'c5ff58bd-6bef-4dc7-9361-1368147a3bfb'),
(1, 'c8916aaa-f087-4363-9987-c5729bdf6ec1'),
(1, 'c99991ed-e2ce-4100-9948-7c1e2f2f1dc5'),
(1, 'c9fffd9b-9648-4c6b-ad47-38a61330e606'),
(1, 'cc6be1dd-cf5b-485a-ad64-cc63765a1b32'),
(1, 'cd9bdd8f-bdbb-456b-8357-6456f2e25396'),
(1, 'ce42f457-5b41-495f-a085-4ee9821bb865'),
(1, 'd2b8a5eb-9120-4ec2-81be-6da651077eea'),
(1, 'dc761210-69e1-4932-9df9-e595c37289c9'),
(1, 'e6b71bda-9976-4484-a1c2-96d8033ce675'),
(1, 'e89450e5-b740-4034-94f5-e39442c47902'),
(1, 'e971b695-1591-4cce-9d9f-d3ad7c66f459'),
(1, 'eb0df2e5-4500-461a-83af-cf19d89d18f1'),
(1, 'eb1ca87c-c42d-4d25-a529-3b883e47dcd7'),
(1, 'ef1670d3-52d3-418b-a30f-11dd7f9a87cd'),
(1, 'efd71e0d-b6e4-4cd4-910c-b936126b22aa'),
(1, 'f12d2d45-8e49-446e-8917-52c33751c4d3'),
(1, 'f843cac4-9880-4397-8da3-5a63881967e7'),
(1, 'fc2a3954-83d7-4555-af58-47d2d6e38bce'),
(1, 'fe0df98e-a7a4-443e-96eb-ab2ee2710178'),
(1, 'ff9a09ee-5849-45c6-99e2-cbed607640ca');

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `Countries`
--

CREATE TABLE `Countries` (
  `code` int(11) NOT NULL,
  `name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Gegevens worden geëxporteerd voor tabel `Countries`
--

INSERT INTO `Countries` (`code`, `name`) VALUES
(89, 'Afghanistan'),
(90, 'Albania'),
(91, 'Algeria'),
(92, 'Andorra'),
(93, 'Angola'),
(94, 'Anguilla'),
(95, 'Antigua & Barbuda'),
(96, 'Argentina'),
(97, 'Armenia'),
(98, 'Australia'),
(99, 'Austria'),
(100, 'Azerbaijan'),
(101, 'Bahamas'),
(102, 'Bahrain'),
(103, 'Bangladesh'),
(104, 'Barbados'),
(105, 'Belarus'),
(106, 'Belgium'),
(107, 'Belize'),
(108, 'Benin'),
(109, 'Bermuda'),
(110, 'Bhutan'),
(111, 'Bolivia'),
(112, 'Bosnia & Herzegovina'),
(113, 'Botswana'),
(114, 'Brazil'),
(115, 'Brunei Darussalam'),
(116, 'Bulgaria'),
(117, 'Burkina Faso'),
(119, 'Burundi'),
(120, 'Cambodia'),
(121, 'Cameroon'),
(122, 'Canada'),
(123, 'Cape Verde'),
(124, 'Cayman Islands'),
(125, 'Central African Republic'),
(126, 'Chad'),
(127, 'Chile'),
(128, 'China'),
(129, 'Colombia'),
(130, 'Comoros'),
(131, 'Congo'),
(132, 'Costa Rica'),
(133, 'Croatia'),
(134, 'Cuba'),
(135, 'Cyprus'),
(136, 'Czech Republic'),
(137, 'Democratic Republic of the Congo'),
(138, 'Denmark'),
(139, 'Djibouti'),
(140, 'Dominica'),
(141, 'Dominican Republic'),
(142, 'Ecuador'),
(143, 'Egypt'),
(144, 'El Salvador'),
(145, 'Equatorial Guinea'),
(146, 'Eritrea'),
(147, 'Estonia'),
(148, 'Ethiopia'),
(149, 'Fiji'),
(150, 'Finland'),
(151, 'France'),
(152, 'French Guiana'),
(153, 'Gabon'),
(154, 'Gambia'),
(155, 'Georgia'),
(156, 'Germany'),
(157, 'Ghana'),
(158, 'Great Britain'),
(159, 'Greece'),
(160, 'Grenada'),
(161, 'Guadeloupe'),
(162, 'Guatemala'),
(163, 'Guinea'),
(164, 'Guinea-Bissau'),
(165, 'Guyana'),
(166, 'Haiti'),
(167, 'Honduras'),
(168, 'Hungary'),
(169, 'Iceland'),
(170, 'India'),
(171, 'Indonesia'),
(172, 'Iran'),
(173, 'Iraq'),
(174, 'Israel and the Occupied Territories'),
(175, 'Italy'),
(176, 'Ivory Coast'),
(177, 'Jamaica'),
(178, 'Japan'),
(179, 'Jordan'),
(180, 'Kazakhstan'),
(181, 'Kenya'),
(182, 'Kosovo'),
(183, 'Kuwait'),
(184, 'Kyrgyz Republic (Kyrgyzstan)'),
(185, 'Laos'),
(186, 'Latvia'),
(187, 'Lebanon'),
(188, 'Lesotho'),
(189, 'Liberia'),
(190, 'Libya'),
(191, 'Liechtenstein'),
(192, 'Lithuania'),
(193, 'Luxembourg'),
(195, 'Madagascar'),
(196, 'Malawi'),
(197, 'Malaysia'),
(198, 'Maldives'),
(199, 'Mali'),
(200, 'Malta'),
(201, 'Martinique'),
(202, 'Mauritania'),
(203, 'Mauritius'),
(204, 'Mayotte'),
(205, 'Mexico'),
(206, 'Moldova'),
(207, 'Monaco'),
(208, 'Mongolia'),
(209, 'Montenegro'),
(210, 'Montserrat'),
(211, 'Morocco'),
(212, 'Mozambique'),
(118, 'Myanmar'),
(213, 'Namibia'),
(214, 'Nepal'),
(215, 'Netherlands'),
(216, 'New Zealand'),
(217, 'Nicaragua'),
(218, 'Niger'),
(219, 'Nigeria'),
(220, 'North Korea'),
(221, 'Norway'),
(222, 'Oman'),
(223, 'Pacific Islands'),
(224, 'Pakistan'),
(225, 'Panama'),
(226, 'Papua New Guinea'),
(227, 'Paraguay'),
(228, 'Peru'),
(229, 'Philippines'),
(230, 'Poland'),
(231, 'Portugal'),
(232, 'Puerto Rico'),
(233, 'Qatar'),
(194, 'Republic of Macedonia'),
(234, 'Reunion'),
(235, 'Romania'),
(236, 'Russian Federation'),
(237, 'Rwanda'),
(238, 'Saint Kitts and Nevis'),
(239, 'Saint Lucia'),
(240, 'Saint Vincent\'s & Grenadines'),
(241, 'Samoa'),
(242, 'Sao Tome and Principe'),
(243, 'Saudi Arabia'),
(244, 'Senegal'),
(245, 'Serbia'),
(246, 'Seychelles'),
(247, 'Sierra Leone'),
(248, 'Singapore'),
(249, 'Slovakia'),
(250, 'Slovenia'),
(251, 'Solomon Islands'),
(252, 'Somalia'),
(253, 'South Africa'),
(254, 'South Korea'),
(255, 'South Sudan'),
(256, 'Spain'),
(257, 'Sri Lanka'),
(258, 'Sudan'),
(259, 'Suriname'),
(260, 'Swaziland'),
(261, 'Sweden'),
(262, 'Switzerland'),
(263, 'Syria'),
(264, 'Tajikistan'),
(265, 'Tanzania'),
(266, 'Thailand'),
(267, 'Timor Leste'),
(268, 'Togo'),
(269, 'Trinidad & Tobago'),
(270, 'Tunisia'),
(271, 'Turkey'),
(272, 'Turkmenistan'),
(273, 'Turks & Caicos Islands'),
(274, 'Uganda'),
(275, 'Ukraine'),
(276, 'United Arab Emirates'),
(277, 'United States of America'),
(278, 'Uruguay'),
(279, 'Uzbekistan'),
(280, 'Venezuela'),
(281, 'Vietnam'),
(282, 'Virgin Islands (UK)'),
(283, 'Virgin Islands (US)'),
(284, 'Yemen'),
(285, 'Zambia'),
(286, 'Zimbabwe');

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `Donations`
--

CREATE TABLE `Donations` (
  `user` int(11) NOT NULL,
  `date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `helpcoins` int(6) NOT NULL,
  `project` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `FoundationPictures`
--

CREATE TABLE `FoundationPictures` (
  `code` varchar(256) NOT NULL,
  `foundation` int(11) NOT NULL,
  `post` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `FoundationProject`
--

CREATE TABLE `FoundationProject` (
  `id` int(11) NOT NULL,
  `projectname` varchar(20) NOT NULL,
  `foundation` int(11) NOT NULL,
  `gpsX` varchar(11) NOT NULL,
  `gpsY` varchar(11) NOT NULL,
  `info` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Gegevens worden geëxporteerd voor tabel `FoundationProject`
--

INSERT INTO `FoundationProject` (`id`, `projectname`, `foundation`, `gpsX`, `gpsY`, `info`) VALUES
(1, 'We sell lillte kids', 1, '234235', '23532423', ''),
(2, 'Save this nigerian p', 1, '3294872389.', '32984.39872', 'Hello you imbecile. We would like you to help us. So come and help us.');

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `Foundations`
--

CREATE TABLE `Foundations` (
  `id` int(11) NOT NULL,
  `foundationname` varchar(50) NOT NULL,
  `country` int(11) NOT NULL,
  `gps` varchar(50) NOT NULL,
  `info` text NOT NULL,
  `logo` text NOT NULL,
  `type` varchar(10) NOT NULL,
  `reward` text NOT NULL,
  `website` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Gegevens worden geëxporteerd voor tabel `Foundations`
--

INSERT INTO `Foundations` (`id`, `foundationname`, `country`, `gps`, `info`, `logo`, `type`, `reward`, `website`) VALUES
(1, 'Zullukingdom', 1, '1212309 17348912798', 'asdfasdfas', 'asdfasdfasfds', '', '', '');

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `Notifications`
--

CREATE TABLE `Notifications` (
  `id` int(11) NOT NULL,
  `info` text NOT NULL,
  `date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Gegevens worden geëxporteerd voor tabel `Notifications`
--

INSERT INTO `Notifications` (`id`, `info`, `date`) VALUES
(1, 'Malchika has donated 20 coins to your cause ;)', '2018-12-27 15:54:05');

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `Posts`
--

CREATE TABLE `Posts` (
  `id` int(11) NOT NULL,
  `short` varchar(200) NOT NULL,
  `content` text NOT NULL,
  `title` varchar(100) NOT NULL,
  `foundation` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `Projects`
--

CREATE TABLE `Projects` (
  `id` int(11) NOT NULL,
  `foundationProject` int(11) NOT NULL,
  `goal` int(11) NOT NULL,
  `helpcoins` int(11) NOT NULL,
  `user` int(11) NOT NULL,
  `creationdate` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `completiondate` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Gegevens worden geëxporteerd voor tabel `Projects`
--

INSERT INTO `Projects` (`id`, `foundationProject`, `goal`, `helpcoins`, `user`, `creationdate`, `completiondate`) VALUES
(1, 1, 200, 100, 1, '2018-12-27 16:01:04', NULL),
(2, 2, 20, 20, 2, '2018-09-11 16:00:58', NULL);

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `Propositions`
--

CREATE TABLE `Propositions` (
  `foundationProject` int(11) NOT NULL,
  `helpcoins` int(11) NOT NULL,
  `info` varchar(120) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `SpecialRequests`
--

CREATE TABLE `SpecialRequests` (
  `id` int(11) NOT NULL,
  `code` int(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `Subscriptions`
--

CREATE TABLE `Subscriptions` (
  `helper` int(11) NOT NULL,
  `helpee` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Gegevens worden geëxporteerd voor tabel `Subscriptions`
--

INSERT INTO `Subscriptions` (`helper`, `helpee`) VALUES
(1, 2),
(1, 5),
(2, 1),
(3, 1),
(4, 1);

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `UnverifiedUsers`
--

CREATE TABLE `UnverifiedUsers` (
  `username` varchar(20) NOT NULL,
  `password` char(45) NOT NULL,
  `email` varchar(50) NOT NULL,
  `gender` varchar(1) NOT NULL,
  `birthdate` date NOT NULL,
  `registrationdate` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `activationcode` int(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Gegevens worden geëxporteerd voor tabel `UnverifiedUsers`
--

INSERT INTO `UnverifiedUsers` (`username`, `password`, `email`, `gender`, `birthdate`, `registrationdate`, `activationcode`) VALUES
('3gvut78', 'sDYPxtkmF4LcbiKBTAXcGM5AQRuONj3oIFkQpyFHicM=', 'Fgc@gcg.com', 'M', '2018-12-29', '2018-12-29 18:07:44', 2878),
('7w5ts', '3GNR+DqbJMi9o89owP6TE4qOzwjj7GbfkRSPe38SpJk=', 'Kgditx@kgdiy.com', 'M', '2018-12-29', '2018-12-29 21:27:33', 852),
('Cusjzu', 'kzmOIQFZavkCywROwNTXV5jkCjwrJmb44u/zEEmGDEg=', 'Sutsiy@fist.com', 'M', '2018-12-29', '2018-12-29 21:31:12', 3857),
('Djcdhcb', '/lHTrr8ZyWJ7JhIlhl8SWXugSl5K/xs1rZkgeqJRuXI=', 'Dd@dd.com', 'M', '2018-12-29', '2018-12-29 21:17:53', 3535),
('Duvb57', 'kHe+5jzvdIdFTi8CZrG/IErkR5BkGCvDTkJRdRApCRY=', 'Dg@fyg.com', 'M', '2018-12-29', '2018-12-29 18:08:45', 6854),
('Itsitxitdi', 'Qvn+aUy2FufVz6ayO92RCl2UJWf1VNW+oQp2KC2qlMI=', 'Xkhxoh@oysit.com', 'M', '2018-12-29', '2018-12-29 21:19:52', 5358),
('Jfsigs8e5', '/qrFgAuJZj4K3j98l4BjRPOXCW1qn0ZSRv3ptOvUwp0=', 'Jtsitd@uqrurs.com', 'M', '2018-12-29', '2018-12-29 21:30:11', 2145),
('Jgsigd', 'gl6tC5fu5q0ttfgl87V1mdEcI6+4Glp0CkgWmHcn7No=', 'Vjzjfz@kgxkg.com', 'M', '2018-12-29', '2018-12-29 21:33:57', 4885),
('Sitsisit', 'K/7xTla4QbIUtTUXyHktW1e5iNjaqNzTXzoJxOuqJWA=', 'Sitsit@kgdiy.com', 'M', '2018-12-29', '2018-12-29 21:21:26', 8172),
('Uaufa', 'BxNhO0UnQfw0PAKidnEVSW2zkkgfO9TV/6rXLe6YLb4=', 'Jfzjf@zufs.com', 'M', '2018-12-29', '2018-12-29 21:34:42', 2378),
('Ufaursfu', 'zvAaOvd36DhYpbBxJIJ0J4JWLaA1DL3kFnVaPalYByc=', 'Utsuts@oysiy.com', 'M', '2018-12-29', '2018-12-29 21:24:59', 8356),
('Zise86e', 'NapqOA5jLRsMTNnAgVFReVRJGCQwtTWWcUSlT+zPSgs=', 'Urssi@fohd.com', 'M', '2018-12-29', '2018-12-29 21:28:52', 3145),
('Zutfzi', 'ldS3imJMbVMYLzrgQFc3KUBN89msroqgk2bA6Ss0YBM=', 'Sits@igsit.com', 'M', '2018-12-29', '2018-12-29 21:26:35', 428);

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `Users`
--

CREATE TABLE `Users` (
  `id` int(11) NOT NULL,
  `username` varchar(20) NOT NULL,
  `password` varchar(45) NOT NULL,
  `email` varchar(50) NOT NULL,
  `gender` varchar(1) NOT NULL,
  `birthdate` date NOT NULL,
  `helpcoins` int(6) NOT NULL DEFAULT '0',
  `accumulated` int(9) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Gegevens worden geëxporteerd voor tabel `Users`
--

INSERT INTO `Users` (`id`, `username`, `password`, `email`, `gender`, `birthdate`, `helpcoins`, `accumulated`) VALUES
(1, 'zamiri', 'JY25XW649q3Zu66peik3WTLHcY0YoxTKRCi5HFZDvVk=', 'zamirboy88@hotmail.com', 'M', '1994-03-06', 0, 15),
(2, 'shair', 'lol123', 'shair88@hotmail.com', 'M', '1994-03-06', 0, 0),
(3, 'tester', 'lol123', 'tester88@hotmail.com', 'M', '1994-03-06', 0, 0),
(4, 'toaster', 'lol123', 'toeaster88@hotmail.com', 'M', '1994-03-06', 0, 0),
(5, 'tester0', 'lol123', 'toaster0@hotmail.com', 'M', '1994-03-06', 0, 0),
(6, 'tester1', 'lol123', 'toaster1@hotmail.com', 'M', '1994-03-06', 0, 0),
(7, 'tester2', 'lol123', 'toaster2@hotmail.com', 'M', '1994-03-06', 0, 0),
(8, 'tester3', 'lol123', 'toaster3@hotmail.com', 'M', '1994-03-06', 0, 0),
(9, 'tester4', 'lol123', 'toaster4@hotmail.com', 'M', '1994-03-06', 0, 0),
(10, 'tester5', 'lol123', 'toaster5@hotmail.com', 'M', '1994-03-06', 0, 0),
(11, 'tester6', 'lol123', 'toaster6@hotmail.com', 'M', '1994-03-06', 0, 0),
(12, 'tester7', 'lol123', 'toaster7@hotmail.com', 'M', '1994-03-06', 0, 0),
(13, 'tester8', 'lol123', 'toaster8@hotmail.com', 'M', '1994-03-06', 0, 0),
(14, 'tester9', 'lol123', 'toaster9@hotmail.com', 'M', '1994-03-06', 0, 0),
(15, 'tester10', 'lol123', 'toaster10@hotmail.com', 'M', '1994-03-06', 0, 0),
(16, 'tester11', 'lol123', 'toaster11@hotmail.com', 'M', '1994-03-06', 0, 0),
(17, 'tester12', 'lol123', 'toaster12@hotmail.com', 'M', '1994-03-06', 0, 0),
(18, 'tester13', 'lol123', 'toaster13@hotmail.com', 'M', '1994-03-06', 0, 0),
(19, 'tester14', 'lol123', 'toaster14@hotmail.com', 'M', '1994-03-06', 0, 0),
(20, 'tester15', 'lol123', 'toaster15@hotmail.com', 'M', '1994-03-06', 0, 0),
(21, 'tester16', 'lol123', 'toaster16@hotmail.com', 'M', '1994-03-06', 0, 0),
(22, 'tester17', 'lol123', 'toaster17@hotmail.com', 'M', '1994-03-06', 0, 0),
(23, 'tester18', 'lol123', 'toaster18@hotmail.com', 'M', '1994-03-06', 0, 0),
(24, 'tester19', 'lol123', 'toaster19@hotmail.com', 'M', '1994-03-06', 0, 0),
(25, 'tester20', 'lol123', 'toaster20@hotmail.com', 'M', '1994-03-06', 0, 0),
(26, 'tester21', 'lol123', 'toaster21@hotmail.com', 'M', '1994-03-06', 0, 0),
(27, 'tester22', 'lol123', 'toaster22@hotmail.com', 'M', '1994-03-06', 0, 0),
(28, 'tester23', 'lol123', 'toaster23@hotmail.com', 'M', '1994-03-06', 0, 0),
(29, 'tester24', 'lol123', 'toaster24@hotmail.com', 'M', '1994-03-06', 0, 0),
(30, 'tester25', 'lol123', 'toaster25@hotmail.com', 'M', '1994-03-06', 0, 0),
(31, 'tester26', 'lol123', 'toaster26@hotmail.com', 'M', '1994-03-06', 0, 0),
(32, 'tester27', 'lol123', 'toaster27@hotmail.com', 'M', '1994-03-06', 0, 0),
(33, 'tester28', 'lol123', 'toaster28@hotmail.com', 'M', '1994-03-06', 0, 0),
(34, 'tester29', 'lol123', 'toaster29@hotmail.com', 'M', '1994-03-06', 0, 0),
(35, 'tester30', 'lol123', 'toaster30@hotmail.com', 'M', '1994-03-06', 0, 0),
(36, 'tester31', 'lol123', 'toaster31@hotmail.com', 'M', '1994-03-06', 0, 0),
(37, 'tester32', 'lol123', 'toaster32@hotmail.com', 'M', '1994-03-06', 0, 0),
(38, 'tester33', 'lol123', 'toaster33@hotmail.com', 'M', '1994-03-06', 0, 0),
(39, 'tester34', 'lol123', 'toaster34@hotmail.com', 'M', '1994-03-06', 0, 0),
(40, 'tester35', 'lol123', 'toaster35@hotmail.com', 'M', '1994-03-06', 0, 0),
(41, 'tester36', 'lol123', 'toaster36@hotmail.com', 'M', '1994-03-06', 0, 0),
(42, 'tester37', 'lol123', 'toaster37@hotmail.com', 'M', '1994-03-06', 0, 0),
(43, 'tester38', 'lol123', 'toaster38@hotmail.com', 'M', '1994-03-06', 0, 0),
(44, 'tester39', 'lol123', 'toaster39@hotmail.com', 'M', '1994-03-06', 0, 0),
(45, 'tester40', 'lol123', 'toaster40@hotmail.com', 'M', '1994-03-06', 0, 0),
(46, 'tester41', 'lol123', 'toaster41@hotmail.com', 'M', '1994-03-06', 0, 0),
(47, 'tester42', 'lol123', 'toaster42@hotmail.com', 'M', '1994-03-06', 0, 0),
(48, 'tester43', 'lol123', 'toaster43@hotmail.com', 'M', '1994-03-06', 0, 0),
(49, 'tester44', 'lol123', 'toaster44@hotmail.com', 'M', '1994-03-06', 0, 0),
(50, 'tester45', 'lol123', 'toaster45@hotmail.com', 'M', '1994-03-06', 0, 0),
(51, 'tester46', 'lol123', 'toaster46@hotmail.com', 'M', '1994-03-06', 0, 0),
(52, 'tester47', 'lol123', 'toaster47@hotmail.com', 'M', '1994-03-06', 0, 0),
(53, 'tester48', 'lol123', 'toaster48@hotmail.com', 'M', '1994-03-06', 0, 0),
(54, 'tester49', 'lol123', 'toaster49@hotmail.com', 'M', '1994-03-06', 0, 0),
(55, 'tester50', 'lol123', 'toaster50@hotmail.com', 'M', '1994-03-06', 0, 0),
(56, 'tester51', 'lol123', 'toaster51@hotmail.com', 'M', '1994-03-06', 0, 0),
(57, 'tester52', 'lol123', 'toaster52@hotmail.com', 'M', '1994-03-06', 0, 0),
(58, 'tester53', 'lol123', 'toaster53@hotmail.com', 'M', '1994-03-06', 0, 0),
(59, 'tester54', 'lol123', 'toaster54@hotmail.com', 'M', '1994-03-06', 0, 0),
(60, 'tester55', 'lol123', 'toaster55@hotmail.com', 'M', '1994-03-06', 0, 0),
(61, 'tester56', 'lol123', 'toaster56@hotmail.com', 'M', '1994-03-06', 0, 0),
(62, 'tester57', 'lol123', 'toaster57@hotmail.com', 'M', '1994-03-06', 0, 0),
(63, 'tester58', 'lol123', 'toaster58@hotmail.com', 'M', '1994-03-06', 0, 0),
(64, 'tester59', 'lol123', 'toaster59@hotmail.com', 'M', '1994-03-06', 0, 0),
(65, 'tester60', 'lol123', 'toaster60@hotmail.com', 'M', '1994-03-06', 0, 0),
(66, 'tester61', 'lol123', 'toaster61@hotmail.com', 'M', '1994-03-06', 0, 0),
(67, 'tester62', 'lol123', 'toaster62@hotmail.com', 'M', '1994-03-06', 0, 0),
(68, 'tester63', 'lol123', 'toaster63@hotmail.com', 'M', '1994-03-06', 0, 0),
(69, 'tester64', 'lol123', 'toaster64@hotmail.com', 'M', '1994-03-06', 0, 0),
(70, 'tester65', 'lol123', 'toaster65@hotmail.com', 'M', '1994-03-06', 0, 0),
(71, 'tester66', 'lol123', 'toaster66@hotmail.com', 'M', '1994-03-06', 0, 0),
(72, 'tester67', 'lol123', 'toaster67@hotmail.com', 'M', '1994-03-06', 0, 0),
(73, 'tester68', 'lol123', 'toaster68@hotmail.com', 'M', '1994-03-06', 0, 0),
(74, 'tester69', 'lol123', 'toaster69@hotmail.com', 'M', '1994-03-06', 0, 0),
(75, 'tester70', 'lol123', 'toaster70@hotmail.com', 'M', '1994-03-06', 0, 0),
(76, 'tester71', 'lol123', 'toaster71@hotmail.com', 'M', '1994-03-06', 0, 0),
(77, 'tester72', 'lol123', 'toaster72@hotmail.com', 'M', '1994-03-06', 0, 0),
(78, 'tester73', 'lol123', 'toaster73@hotmail.com', 'M', '1994-03-06', 0, 0),
(79, 'tester74', 'lol123', 'toaster74@hotmail.com', 'M', '1994-03-06', 0, 0),
(80, 'tester75', 'lol123', 'toaster75@hotmail.com', 'M', '1994-03-06', 0, 0),
(81, 'tester76', 'lol123', 'toaster76@hotmail.com', 'M', '1994-03-06', 0, 0),
(82, 'tester77', 'lol123', 'toaster77@hotmail.com', 'M', '1994-03-06', 0, 0),
(83, 'tester78', 'lol123', 'toaster78@hotmail.com', 'M', '1994-03-06', 0, 0),
(84, 'tester79', 'lol123', 'toaster79@hotmail.com', 'M', '1994-03-06', 0, 0),
(85, 'tester80', 'lol123', 'toaster80@hotmail.com', 'M', '1994-03-06', 0, 0),
(86, 'tester81', 'lol123', 'toaster81@hotmail.com', 'M', '1994-03-06', 0, 0),
(87, 'tester82', 'lol123', 'toaster82@hotmail.com', 'M', '1994-03-06', 0, 0),
(88, 'tester83', 'lol123', 'toaster83@hotmail.com', 'M', '1994-03-06', 0, 0),
(89, 'tester84', 'lol123', 'toaster84@hotmail.com', 'M', '1994-03-06', 0, 0),
(90, 'tester85', 'lol123', 'toaster85@hotmail.com', 'M', '1994-03-06', 0, 0),
(91, 'tester86', 'lol123', 'toaster86@hotmail.com', 'M', '1994-03-06', 0, 0),
(92, 'tester87', 'lol123', 'toaster87@hotmail.com', 'M', '1994-03-06', 0, 0),
(93, 'tester88', 'lol123', 'toaster88@hotmail.com', 'M', '1994-03-06', 0, 0),
(94, 'tester89', 'lol123', 'toaster89@hotmail.com', 'M', '1994-03-06', 0, 0),
(95, 'tester90', 'lol123', 'toaster90@hotmail.com', 'M', '1994-03-06', 0, 0),
(96, 'tester91', 'lol123', 'toaster91@hotmail.com', 'M', '1994-03-06', 0, 0),
(97, 'tester92', 'lol123', 'toaster92@hotmail.com', 'M', '1994-03-06', 0, 0),
(98, 'tester93', 'lol123', 'toaster93@hotmail.com', 'M', '1994-03-06', 0, 0),
(99, 'tester94', 'lol123', 'toaster94@hotmail.com', 'M', '1994-03-06', 0, 0),
(100, 'tester95', 'lol123', 'toaster95@hotmail.com', 'M', '1994-03-06', 0, 0),
(101, 'tester96', 'lol123', 'toaster96@hotmail.com', 'M', '1994-03-06', 0, 0),
(102, 'tester97', 'lol123', 'toaster97@hotmail.com', 'M', '1994-03-06', 0, 0),
(103, 'tester98', 'lol123', 'toaster98@hotmail.com', 'M', '1994-03-06', 0, 0),
(104, 'tester99', 'lol123', 'toaster99@hotmail.com', 'M', '1994-03-06', 0, 0),
(107, 'sdsa', 'asdasd', 'z@w.com', 'M', '2018-10-03', 0, 0),
(108, 'zambo64', 'lol123', 'aldksfj!@ldkfja.com', 'M', '1994-06-03', 0, 0),
(110, 'Sursusufs', 'i8I2daAd2LgrPU+LWoT0L6onJw7jxfqaWpQ744OVsWA=', 'Sjgsuysi@utsfjsj.com', 'M', '2018-12-29', 0, 0),
(111, 'Jgskts', 'QvxMEeGHdC/0mNMrpu4Kgp841lqXN2QjWUJBNdKHeB4=', 'Srjsufs@jgsuts.com', 'M', '2018-12-29', 0, 0),
(112, 'Zjfzuts', 'LuaQU5oBcy53c6Nysp73PlkPG+tFGx4aznHxlHWC5UI=', 'Jfzufztu5@ggg.com', 'M', '2018-12-29', 0, 0),
(113, 'Dysitdg', 'yC3FBojvrsEuKr7jUmfFL5Cv6AP9yxRlCyVUVoqzUtQ=', 'Ogdigd@igsit.com', 'M', '2018-12-29', 0, 0),
(114, 'Xjvzg', '7XeUch76UE+FFYjzrF5zm88eUGv58OoyHuf59eUpHvY=', 'Vixjgx3@jgzig.com', 'M', '2018-12-29', 0, 0),
(115, 'Xigsgis', '37BvArorogZM8Ov5hXKgp6s/Izix86RXaVt0uieKDtE=', 'Zifzix@kxigsi.com', 'M', '2018-12-29', 0, 0),
(116, 'zamir', 'BzJjUJSG4Lg33NSD7CVmBvFKhuVg3dOtfXPTyOK/cZU=', 'zamir.amiri@hotmail.com', 'M', '1994-03-06', 0, 0);

--
-- Indexen voor geëxporteerde tabellen
--

--
-- Indexen voor tabel `ActiveUsers`
--
ALTER TABLE `ActiveUsers`
  ADD UNIQUE KEY `session` (`session`),
  ADD UNIQUE KEY `userId` (`userId`,`session`);

--
-- Indexen voor tabel `Countries`
--
ALTER TABLE `Countries`
  ADD PRIMARY KEY (`code`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indexen voor tabel `Donations`
--
ALTER TABLE `Donations`
  ADD UNIQUE KEY `user` (`user`,`date`);

--
-- Indexen voor tabel `FoundationPictures`
--
ALTER TABLE `FoundationPictures`
  ADD UNIQUE KEY `code` (`code`);

--
-- Indexen voor tabel `FoundationProject`
--
ALTER TABLE `FoundationProject`
  ADD PRIMARY KEY (`id`);

--
-- Indexen voor tabel `Foundations`
--
ALTER TABLE `Foundations`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`foundationname`,`gps`);

--
-- Indexen voor tabel `Posts`
--
ALTER TABLE `Posts`
  ADD PRIMARY KEY (`id`);

--
-- Indexen voor tabel `Projects`
--
ALTER TABLE `Projects`
  ADD PRIMARY KEY (`id`);

--
-- Indexen voor tabel `Propositions`
--
ALTER TABLE `Propositions`
  ADD UNIQUE KEY `foundation` (`foundationProject`,`helpcoins`);

--
-- Indexen voor tabel `SpecialRequests`
--
ALTER TABLE `SpecialRequests`
  ADD UNIQUE KEY `username` (`id`),
  ADD UNIQUE KEY `code` (`code`);

--
-- Indexen voor tabel `Subscriptions`
--
ALTER TABLE `Subscriptions`
  ADD UNIQUE KEY `user_one` (`helper`,`helpee`);

--
-- Indexen voor tabel `UnverifiedUsers`
--
ALTER TABLE `UnverifiedUsers`
  ADD UNIQUE KEY `name` (`username`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Indexen voor tabel `Users`
--
ALTER TABLE `Users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`),
  ADD UNIQUE KEY `name` (`username`);

--
-- AUTO_INCREMENT voor geëxporteerde tabellen
--

--
-- AUTO_INCREMENT voor een tabel `Countries`
--
ALTER TABLE `Countries`
  MODIFY `code` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=287;

--
-- AUTO_INCREMENT voor een tabel `FoundationProject`
--
ALTER TABLE `FoundationProject`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT voor een tabel `Foundations`
--
ALTER TABLE `Foundations`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT voor een tabel `Posts`
--
ALTER TABLE `Posts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT voor een tabel `Projects`
--
ALTER TABLE `Projects`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT voor een tabel `Users`
--
ALTER TABLE `Users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=117;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
