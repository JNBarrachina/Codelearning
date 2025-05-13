const Loan = require("../models/Loans");
const Book = require("../models/Book");
const Member = require("../models/Members");

const booksRepository = require("../repositories/books.repository");
const usersRepository = require("../repositories/users.repository");

const loanBook = async (req, res) => {
    const memberId = req.body.memberId;
    const bookId = req.body.bookId;
    
    const foundedMember = await usersRepository.findMember(memberId);
    if (!foundedMember) {
        res.status(400).send("El usuario no existe");
        return;
    }

    const foundedBook = await booksRepository.findBook(bookId);
    if (!foundedBook) {
        res.status(400).send("El libro no existe");
        return;
    }

    const currentDate = new Date();
    const calculatedDeadline = new Date(currentDate);
    calculatedDeadline.setDate(currentDate.getDate() + 30);

    const createdLoan = await Loan.create({
        loan_date: currentDate,
        deadline: calculatedDeadline,
        BookId: bookId,
        MemberId: memberId
    });

    res.status(201).send({deadline: createdLoan.deadline});
}

const returnBook = async (req, res) => {
    const bookId = req.body.bookId;

    const modifyLoan = await Loan.update(
        { return_date: new Date() },
        { 
            where: 
            { 
                BookId: bookId,
                return_date: null
            }
        }
    );

    res.send(modifyLoan);
}

const loansMember = async (req, res) => {
    const idMember = req.query.member;
    const activeLoans = req.query.active;

    const foundMember =  await Member.findByPk(idMember);
    if (!foundMember){
        res.status(404).send("Member doesnt exist");
        return;
    }

    const filteredWhere = {};

    if (activeLoans == true) {
        filteredWhere.MemberId = idMember;
        filteredWhere.return_date = null;
    } else {
        filteredWhere.MemberId = idMember;
    }

    const getMemberLoans = await Loan.findAll(
        { 
            attributes: ['loan_date', 'return_date', 'deadline'],
            include: [
                {
                    model: Book,
                    attributes: ['id','title','author', 'publisher', 'isbn'],
                },
            ],
            where: filteredWhere,
            // order: [
            //     ['deadline', 'ASC']
            // ]
        }
    )
    
    res.send(getMemberLoans);
}

exports.loanBook = loanBook;
exports.returnBook = returnBook;
exports.loansMember = loansMember;

