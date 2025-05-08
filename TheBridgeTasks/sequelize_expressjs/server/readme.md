## API Documentation

### Use case: registrar un socio

```
POST /members
REQUEST
{
    name: string
}

RESPONSE{
    id: int
}
```

### Use case: retirar un libro

```
POST /loans
REQUEST
{
    member_id: int,
    book_id: int
}

RESPONSE{
    deadline: datetime
}
```

### Use case: devolver un libro

```
PATCH /loans
REQUEST
{
    book_id: int
}

RESPONSE{
    res.sendStatus(200)
}
```


### Use case: listar préstamos de un socio

```
GET /loans?memberId=member_id
REQUEST
{

}
RESPONSE{
    loans: 
        [   
            bookTitle: string,
            loandate: datetime,
            deadline: datetime,
            returndate: datetime
        ]
}
```