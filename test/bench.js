'use strict';
var stevesLooping = require('../');
var oldLooping = require('./old-looping');

bench('stevesLooping', function() {
  stevesLooping('{', '}', 'pre{in{nest}}post');
  stevesLooping('{', '}', '{{{{{{{{{in}post');
  stevesLooping('{', '}', 'pre{body{in}post');
  stevesLooping('{', '}', 'pre}{in{nest}}post');
  stevesLooping('{', '}', 'pre{body}between{body2}post');
  stevesLooping('{', '}', 'nope');
  stevesLooping('<b>', '</b>', 'pre<b>in<b>nest</b></b>post');
  stevesLooping('<b>', '</b>', 'pre</b><b>in<b>nest</b></b>post');
  stevesLooping('{{', '}}', 'pre{{{in}}}post');
  stevesLooping('{{{', '}}', 'pre{{{in}}}post');
  stevesLooping('{', '}', 'pre{{first}in{second}post');
  stevesLooping('<?', '?>', 'pre<?>post');
  // stevesLooping(/\{/, /\}/, 'nope');
  // stevesLooping(/\s+\{\s+/, /\s+\}\s+/, 'pre  {   in{nest}   }  post');
});

bench('oldLooping', function() {
  oldLooping('{', '}', 'pre{in{nest}}post');
  oldLooping('{', '}', '{{{{{{{{{in}post');
  oldLooping('{', '}', 'pre{body{in}post');
  oldLooping('{', '}', 'pre}{in{nest}}post');
  oldLooping('{', '}', 'pre{body}between{body2}post');
  oldLooping('{', '}', 'nope');
  oldLooping('<b>', '</b>', 'pre<b>in<b>nest</b></b>post');
  oldLooping('<b>', '</b>', 'pre</b><b>in<b>nest</b></b>post');
  oldLooping('{{', '}}', 'pre{{{in}}}post');
  oldLooping('{{{', '}}', 'pre{{{in}}}post');
  oldLooping('{', '}', 'pre{{first}in{second}post');
  oldLooping('<?', '?>', 'pre<?>post');
  // oldLooping(/\{/, /\}/, 'nope');
  // oldLooping(/\s+\{\s+/, /\s+\}\s+/, 'pre  {   in{nest}   }  post');
});
