const Loan = require("../models/Loans");
const Book = require("../models/Book");
const Member = require("../models/Members");

const loanBook = async (req, res) => {
    const memberId = req.body.memberId;
    const bookId = req.body.bookId;

    const foundBook =  await Book.findByPk(bookId);
    if (!foundBook){
        res.status(404).send("Book doesnt exist");
        return;
    }

    const foundMember =  await Member.findByPk(memberId);
    if (!foundMember){
        res.status(404).send("Member doesnt exist");
        return;
    }

    const currentDate = new Date();
    const calculatedDeadline = new Date (currentDate.getDate() + 30 * 24 * 60 * 60 * 1000);

    res.send(calculatedDeadline);

    // const createdLoan = await Loan.create({
    //     loan_date: currentDate,
    //     deadline: calculatedDeadline,
    //     BookId: bookId,
    //     MemberId: memberId
    // });

    // res.status(201).send({deadline: createdLoan.deadline});
}

const returnBook = async (req, res) => {
    const bookId = req.body.bookId;

    const modifyLoan = Loan.update(
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

exports.loanBook = loanBook;
exports.returnBook = returnBook;

