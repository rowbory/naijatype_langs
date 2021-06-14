(function() {
'use strict';
var definitions = {
  defaults: {
    version: "undefined"
  },  model: {
    searchTermToKey: function (wordform) {
        // Your searchTermToKey function goes here!
        // Use this pattern to remove common diacritical marks (accents).
        // See: https://www.compart.com/en/unicode/block/U+0300
        const COMBINING_DIACRITICAL_MARKS = /[\u0300-\u036f]/g;
        let key = wordform.toLowerCase();
        key = key.normalize('NFKD');
        key = key.replace("ƙ", "k");
        key = key.replace("ɓ", "b");
        key = key.replace("ɗ", "d");
        key = key.replace("ƴ", "y");
        key = key.replace(COMBINING_DIACRITICAL_MARKS, '');
        return key;
    }
  },
  searchTermToKey: function(text) {
      return definitions.model.searchTermToKey(text, definitions.applyCasing);
    }
};
LMLayerWorker.loadModel(new models.TrieModel({"totalWeight":160261,"root":{"type":"internal","weight":35478,"values":["e","o","b","d","n","k","t","j","m","i","a"],"children":{"e":{"type":"internal","weight":35478,"values":["﷐","n"],"children":{"﷐":{"type":"leaf","weight":35478,"entries":[{"key":"e","weight":35478,"content":"e"}]},"n":{"type":"leaf","weight":8536,"entries":[{"key":"en","weight":8536,"content":"en"}]}}},"o":{"type":"internal","weight":15155,"values":["﷐","n"],"children":{"﷐":{"type":"leaf","weight":15155,"entries":[{"key":"o","weight":15155,"content":"o"}]},"n":{"type":"leaf","weight":8931,"entries":[{"key":"on","weight":8931,"content":"on"}]}}},"b":{"type":"leaf","weight":13433,"entries":[{"key":"be","weight":13433,"content":"ɓe"}]},"d":{"type":"internal","weight":10615,"values":["u","o"],"children":{"u":{"type":"leaf","weight":10615,"entries":[{"key":"dum","weight":10615,"content":"ɗum"}]},"o":{"type":"leaf","weight":6220,"entries":[{"key":"dow","weight":6220,"content":"dow"}]}}},"n":{"type":"internal","weight":9498,"values":["d","g"],"children":{"d":{"type":"leaf","weight":9498,"entries":[{"key":"nder","weight":9498,"content":"nder"}]},"g":{"type":"leaf","weight":8322,"entries":[{"key":"ngam","weight":8322,"content":"ngam"}]}}},"k":{"type":"leaf","weight":8440,"entries":[{"key":"ko","weight":8440,"content":"ko"}]},"t":{"type":"leaf","weight":7880,"entries":[{"key":"to","weight":7880,"content":"to"}]},"j":{"type":"leaf","weight":7699,"entries":[{"key":"joomiraawo","weight":7699,"content":"Joomiraawo"}]},"m":{"type":"leaf","weight":7656,"entries":[{"key":"mi","weight":7656,"content":"mi"}]},"i":{"type":"leaf","weight":6530,"entries":[{"key":"i","weight":6530,"content":"i"}]},"a":{"type":"leaf","weight":5868,"entries":[{"key":"allah","weight":5868,"content":"Allah"}]}}}}, {
  wordBreaker: wordBreakers['default'],
  searchTermToKey: definitions.searchTermToKey,
}));
})();