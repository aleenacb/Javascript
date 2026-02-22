let area = document.getElementById('area');
let char = document.getElementById('char');
let word = document.getElementById('word');

area.addEventListener('input',function() {
    //Count character
    let content = this.value;
    char.textContent = content.length;
    //Remove empty spaces from start to end
    console.trim();
    console.log(content);
    let wordList = content.split(/\s/);
    //Remove spaces from between words
    let words = wordList.filter(function(element) {
        return element != "";
    });
    //Count words
    word.textContent = words.length;
});