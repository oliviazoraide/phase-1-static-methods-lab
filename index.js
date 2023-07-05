class Formatter {
  /*Write a method static capitalize that takes in a string and capitalizes the first letter.*/
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);

  }
  /*Write a method static sanitize that takes in a string and removes all non-alphanumeric
  characters except for dashes, single quotes and spaces.*/
  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9-'" "]+/g, "");
  }
  /*Write a method static titleize that takes in a string and capitalizes all words in a 
  sentence except the, a, an, but, of, and, for, at, by, and from; and always capitalizes the first word.*/
  static titleize(sentence) {
    const exceptions = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
    const words = sentence.toLowerCase().split(' ');

    // Capitalize the first word
    words[0] = Formatter.capitalize(words[0]);

    for (let i = 1; i < words.length; i++) {
      const word = words[i];
      if (!exceptions.includes(word)) {
        words[i] = Formatter.capitalize(word);
      }
    }

    return words.join(' ');
  }

  }
