/*From a book of stories and Luke's gospel, pre-print.

  This is a minimal lexical model source that uses a tab delimited wordlist.
  See documentation online at https://help.keyman.com/developer/ for
  additional parameters.
*/

const source: LexicalModelSource = {
  format: 'trie-1.0',
  wordBreaker: 'default',
  sources: ['iluka.tsv', 'stories.tsv'],
  searchTermToKey: function (wordform: string): string {
    // Your searchTermToKey function goes here!
  // Use this pattern to remove common diacritical marks (accents).
  // See: https://www.compart.com/en/unicode/block/U+0300
  const COMBINING_DIACRITICAL_MARKS = /[\u0300-\u036f]/g;

    let key = wordform.toLowerCase();
    key = key.normalize('NFKD');
    key = key.replace("ɔ","o");
    key = key.replace("ŋ","ng");
    key = key.replace("ɛ","e");
    key = key.replace(COMBINING_DIACRITICAL_MARKS, '');

    return key;
  }
  // other customizations go here:
};
export default source;
