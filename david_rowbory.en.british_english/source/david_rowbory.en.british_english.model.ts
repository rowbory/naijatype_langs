/*
  British English 1.1 generated from template.
  
  This is a minimal lexical model source that uses a tab delimited wordlist.
  See documentation online at https://help.keyman.com/developer/ for
  additional parameters.

  1.1 Added a conversion to ignore apostrophes, whether straight or curly.
*/

const source: LexicalModelSource = {
  format: 'trie-1.0',
  wordBreaker: 'default',
  sources: ['written.num.o5_mod.tsv'],
  searchTermToKey: function (wordform: string): string {
    // Your searchTermToKey function goes here!
  // Use this pattern to remove common diacritical marks (accents).
  // See: https://www.compart.com/en/unicode/block/U+0300
  const COMBINING_DIACRITICAL_MARKS = /[\u0300-\u036f]/g;

    let key = wordform.toLowerCase();
    key = key.normalize('NFKD');
    key = key.replace("'","");
    key = key.replace("’","");
    key = key.replace("-","");
    key = key.replace("_"," ");
    key = key.replace(COMBINING_DIACRITICAL_MARKS, '');

    return key;
  }
};
export default source;
