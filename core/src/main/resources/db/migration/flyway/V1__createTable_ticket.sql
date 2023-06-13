create table if not exists ticket(
    id bigint not null primary key,
    title varchar (255) not null,
    description longtext null,
    ticketStatus varchar(255) not null,
    startedDate datetime(6) null,
    completedDate datetime(6) null,
    createUser bigint not null,
    lastModifyingUser bigint null,
    createdDate datetime(6) not null,
    lastModifiedDate datetime(6) not null
)