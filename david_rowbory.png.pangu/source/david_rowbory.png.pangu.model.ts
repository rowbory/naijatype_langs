/*
  Pangu 1.1 generated from template.
  
  This is a minimal lexical model source that uses a tab delimited wordlist.
  See documentation online at https://help.keyman.com/developer/ for
  additional parameters.

Added some overrides for hooked letters and glottal appearing as */

const source: LexicalModelSource = {
  format: 'trie-1.0',
  wordBreaker: 'default',
  sources: ['wordlist.tsv'],
  searchTermToKey: function (wordform: string): string {
    // Your searchTermToKey function goes here!
  // Use this pattern to remove common diacritical marks (accents).
  // See: https://www.compart.com/en/unicode/block/U+0300
  const COMBINING_DIACRITICAL_MARKS = /[\u0300-\u036f]/g;

    let key = wordform.toLowerCase();
    key = key.normalize('NFKD');
    key = key.replace("ƙ","k");
    key = key.replace("ɓ","b");
    key = key.replace("ɗ","d");
    key = key.replace("ƴ","y");
    key = key.replace("a̱","a");
    key = key.replace("i̱","i");
    key = key.replace("o̱","o");
    key = key.replace("e̱","e");
    key = key.replace("\ua78c","");
    key = key.replace("\'","");
    key = key.replace(COMBINING_DIACRITICAL_MARKS, '');

    return key;
  }
  // other customizations go here:
};
export default source;
