function generate(){
    var quotes = {
        "-Albert Einstein":'“Our task must be to free ourselves... by widening our circle of compassion to embrace all living creatures and the whole of nature and its beauty.”',
        "- C.S.Lewis" : '"I was not born to be free---I was born to adore and obey."',
        "-Aaron Lauritsen":'"The struggles we endure today will be the ‘good old days’ we laugh about tomorrow."'
    }
var authors = Object.keys(quotes);
//console.log(authors);
var author = authors[Math.floor(Math.random() * authors.length)];
var quote = quotes[author];
document.getElementById("quotes").innerHTML = quote;
document.getElementById("author").innerHTML = author;

}