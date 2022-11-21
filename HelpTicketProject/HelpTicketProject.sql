--create database HelpDeskDB

--create table Tickets 
--(
--Id int primary key identity (1,1),
--[Name] nvarchar(30),
--[Email] nvarchar(50),
--TicketIssue nvarchar(200),
--TicketDetails nvarchar(500),
--ResolvedBy nvarchar(30));

--create table Users
--(
--Id int primary key identity (1,1),
--UserName nvarchar(30));

--insert into Users
--values('Jsacks'),
--('TLannister'),
--('JLannister');


--create table Favorites
--(
--Id int primary key identity (1,1),
--UserId int foreign key references Users(Id),
--TicketId int foreign key references Tickets(Id));

--insert into Favorites
--values(1,1),(2,2);



--insert into Tickets
--values ('Jsacks','jsacks@gmail.com','Projector won''t turn on.','I tried to present a powerpoint presentation today and the projector would not connect to the internet.','Jake Berger'),
--('TLannister','tlanny@gmail.com','Faulty ladder','The ladder doesn''t extend enough to reach. This ladder must be broken. I demand a new one.','Jessie Whiting'),
--('JLannister','jlanny@gmail.com','I''ve misplaced my hand!','After my hand was taken off by a northern lord, it was tied around my neck.. the string broke and now I can''t find it.','Brandon Fullwood'),
--('CLannister','clanny@yahoo.com','My children are my brothers.','Robert Baratheon is unaware that his kids are not his own. How do I keep this a secret?','Brandon Fullwood'),
--('EStark','estarkles@gmail.com','I have a problem with my head.','It seems to have detached itself from my body.','Jake Berger'),
--('CStark','cstarkles@gmail.com','Experience neck pain.','While attending a wedding I got an itch in my throat and can''t stop the bleeding.','Jake Berger'),
--('RStark','rstarkles@aol.com','Experiencing chest pains.','While attending a wedding I experience a sharp pain in my test. Aspirin isn''t working.','Brandon Fullwood'),
--('JSand','jsandycheeks@gmail.com','How to connect with my parents?','Even though I have a great releationship with my dad, my stop mom hates me. pls help.', 'Jessie Whiting'),
--('SStark','sstarkles@yahoo.com','I don''t want to get married!','My previous two marraiges didn''t work out so well for me.', 'Jake Berger'),
--('AStark','astarkles@gmail.com','I don''t want be a girl!','Being the daughter of a high lord, theres too much pressure to be a lady.','Brandon Fullwood'),
--('BStark','bstarkles@aol.com','I can''t feel my legs!','All I remember is climbing a tower and the next thing I remember, I couln''t walk.','Jessie Whiting'),
--('TGreyjoy','Tjoyboi@hotmail.com','How to drop a nickname?','I''ve aquired a rather nasty nickname..some would say it reeks.','Jake Berger'),
--('CTully','ctullyawhat@aol.com','Worried mother.','somebody is trying to kill my so.n','Brandon Fullwood'),
--('PBaelish','pbbaelish@gmail.com','Help wanted.','I need to frame somebody.','Jessie Whiting'),
--('JMormont','jmoremonayyy@yahoo.com','Rangers gone missing.','We''ve had several men disappear in the middle of the night and there are rumors that winter is coming.','Jake Berger'),
--('DTargaryen','dtargaryen@aol.com','My pet ran away!','After letting my dragon out to eat, it hasn''t come back in 7 days!','Jessie Whiting'),
--('VTargaryen','vtargaryen@aol.com','Something stuck in hair.','I seem to have molten gold fused to my hair, tried peanut butter.','Brandon Fullwood'),
--('JBaratheon','jbrat@hotmail.com','Can''t Breathe!!','I think there''s something in my throat. Maybe the pie is bad?','Jake Berger'),
--('SBaratheon','sbrat@hotmail.com','Looking for something hot.','Have you seen the fire priestess?','Brandon Fullwood'),
--('KDrogo','kdrogoon@yahoo.com','Battlewound: Treatment needed.','I feel very sick after receiving a cut during battle, please bring medicine.','Jessie Whiting'),
--('MTyrell','mtyreal@gmail.com','Words of encouragement.','I need help convincing my husband to take his promotion..I think it would be good for the whole family.','Jessie Whiting'),
--('GWorm','gwormjim@aol.com','Looking for loyalty.','Renound warrior looking for work. Must be worthy.','Jessie Whiting'),
--('RBolton','rbolts@yahoo.com','Do you want to play a game?','Serious inquiries only. Anything can happen.','Jake Berger'),
--('BTarth','btarth@gmail.com','Is this dishonor?','I am in love with the man I am sworn to protect.','Brandon Fullwood');

--select * from Tickets
--select * from Favorites
--select * from Users

--drop table Favorites
--drop table Users
--drop table Tickets
