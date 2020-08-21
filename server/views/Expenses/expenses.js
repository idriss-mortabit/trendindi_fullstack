const mongoose = require('mongoose');

const uri = "mongodb+srv://idriss:Va2lG0RNx3nOeCbd@cluster0.l8uax.mongodb.net/trendindi?retryWrites=true&w=majority";
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then(()=> console.log('Connected to DB ....'))
  .catch((error)=> console.error(error));

  const Expenses = mongoose.model('Expense', 
  new mongoose.Schema({
    Payer: {
        type: String,
        required:true
    },
    Description:{
      type: String,
      required:true
  },
  Amount:{
    type: Number,
    required: true
  },
  Date:{
      type: Date,
      required:true
  }
  })
  );

 async function createExpense(Payer, Description, Amount, Date) {
      const Expense = Expenses({
        Payer, Description, Amount, Date
      })
      const result = await Expense.save();
      console.log(result);
  }


async function getExpenses() {
    const expenses = await Expenses.find()
    .select('Payer Description Amount Date -_id')
    return expenses
}

// createExpense("idriss", "adsen fb", "100", new Date)
// createExpense("ahmed", "adsence", "150", new Date)
// createExpense("faztiha", "adsen fb", "1050", new Date)
// createExpense("aicha", "domain", "10", new Date)
// createExpense("zakaruia", "adsen fb", "1300", new Date)
exports.getExpenses = getExpenses;
exports.createExpense = createExpense;
