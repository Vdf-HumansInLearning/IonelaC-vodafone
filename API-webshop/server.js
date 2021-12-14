const express = require('express');
const app = express();
const path = require('path');
const PORT = 3001;

var usersRouter = require('./routes/users');
var shopRouter = require('./routes/shop');
// var userRouter = require('./routes/user');
var authRouter = require('./routes/auth');
// var cartRouter = require('./routes/cart');

app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '/public')));

app.use('/users', usersRouter);
app.use('/shop', shopRouter);
app.use('/auth', authRouter);
// app.use('/cart', cartRouter);
// app.use('/user', userRouter);


app.use(function(req, res, next) {
    next(createError(404));
});


// app.get('/', (req, res) => {
//         res.send('hello world!')
//     })


// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.send('error');
});


app.listen(
    PORT,
    () => console.log(`it's alive on http://localhost:${PORT}`)
)

module.exports = app;



// app.listen(
//     PORT,
//     () => console.log(`App is listening on port ${PORT}`)
// )