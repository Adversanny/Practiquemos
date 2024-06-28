function removeChars(str1, str2) {
        let out1 = '', out2 = '';
        for (let char of str1) {
            if (!str2.includes(char)) out1 += char;
        }
        for (let char of str2) {
            if (!str1.includes(char)) out2 += char;
        }
        return [out1, out2];
    };
const removingCharacters = new RemovingCharacters();
console.log(removeChars('abcd', 'bcdf')); // Output: ["a", "f"]
console.log(removeChars('hello', 'world')); // Output: ["he","wrld"]