//import library readline
const func = require('./function.js');

//membuat fungsi main asynchronous
const main = async () => {
    //memanggil fungsi question, dan membuat pertanyaan
    const name = await ques.questionss('what is your name? ')
    //memanggil 
    const email = await ques.questionss('what is your email? ')
    //memanggil fungsi qu
    const tlp = await ques.questionss('what is your number phone? ')

        //memanggil fungsi untuk menyimpan data ke json
        ques.savedata(name,email,tlp)
}

//memanggil fungsi main
main() 