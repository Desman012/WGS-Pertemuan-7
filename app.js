//memanggil local module 'function.js' dengan metode 'require' dan menamai-nya 'ques'
const ques = require('./function.js');

//membuat fungsi main asynchronous
const main = async () => {
    //memanggil fungsi question, dan membuat pertanyaan disimpan di variable 'name'
    const name = await ques.questionss('what is your name? ')
    //memanggil fungsi question, dan membuat pertanyaan disimpan di variable 'email'
    const email = await ques.questionss('what is your email? ')
    //memanggil fungsi question, dan membuat pertanyaan disimpan di variable 'tlp'
    const tlp = await ques.questionss('what is your number phone? ')

        //memanggil fungsi 'savedata' untuk menyimpan data ke json
        ques.savedata(name,email,tlp)
}


//memanggil fungsi main
main() 
