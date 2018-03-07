create table songs
(songid serial primary key, 
songName varchar(140),
songDesc varchar(140),
songGenre varchar(140)
--67E
foreign key (userID) references users(id)
)