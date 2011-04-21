/* Copyright Google Inc.
 * Licensed under the Apache Licence Version 2.0
 * Autogenerated at Wed Apr 20 12:56:54 PDT 2011
 * @provides css
 */
var css = {
  'properties': (function () {
      var s = [ '|left|center|right', '|top|center|bottom',
        '#(?:[\\da-f]{3}){1,2}|aqua|black|blue|fuchsia|gray|green|lime|maroon|navy|olive|orange|purple|red|silver|teal|white|yellow|rgb\\(\\s*(?:-?\\d+|0|[+\\-]?\\d+(?:\\.\\d+)?%)\\s*,\\s*(?:-?\\d+|0|[+\\-]?\\d+(?:\\.\\d+)?%)\\s*,\\s*(?:-?\\d+|0|[+\\-]?\\d+(?:\\.\\d+)?%)\\)',
        '[+\\-]?\\d+(?:\\.\\d+)?(?:[cem]m|ex|in|p[ctx])',
        '\\d+(?:\\.\\d+)?(?:[cem]m|ex|in|p[ctx])',
        'none|hidden|dotted|dashed|solid|double|groove|ridge|inset|outset',
        '[+\\-]?\\d+(?:\\.\\d+)?%', '\\d+(?:\\.\\d+)?%',
        'url\\(\"[^()\\\\\"\\r\\n]+\"\\)',
        'repeat-x|repeat-y|(?:repeat|space|round|no-repeat)(?:\\s+(?:repeat|space|round|no-repeat)){0,2}'
      ], c = [ RegExp('^\\s*(?:\\s*(?:0|' + s[ 3 ] + '|' + s[ 6 ] +
          ')){1,2}\\s*$', 'i'), RegExp('^\\s*(?:\\s*(?:0|' + s[ 3 ] + '|' + s[
            6 ] + ')){1,4}(?:\\s*\\/(?:\\s*(?:0|' + s[ 3 ] + '|' + s[ 6 ] +
          ')){1,4})?\\s*$', 'i'), RegExp('^\\s*(?:\\s*none|(?:(?:\\s*(?:' + s[
            2 ] + ')\\s+(?:0|' + s[ 3 ] + ')(?:\\s*(?:0|' + s[ 3 ] +
          ')){1,4}(?:\\s*inset)?|(?:\\s*inset)?\\s+(?:0|' + s[ 3 ] +
          ')(?:\\s*(?:0|' + s[ 3 ] + ')){1,4}(?:\\s*(?:' + s[ 2 ] +
          '))?)\\s*,)*(?:\\s*(?:' + s[ 2 ] + ')\\s+(?:0|' + s[ 3 ] +
          ')(?:\\s*(?:0|' + s[ 3 ] +
          ')){1,4}(?:\\s*inset)?|(?:\\s*inset)?\\s+(?:0|' + s[ 3 ] +
          ')(?:\\s*(?:0|' + s[ 3 ] + ')){1,4}(?:\\s*(?:' + s[ 2 ] +
          '))?))\\s*$', 'i'), RegExp('^\\s*(?:' + s[ 2 ] +
          '|transparent|inherit)\\s*$', 'i'), RegExp('^\\s*(?:' + s[ 5 ] +
          '|inherit)\\s*$', 'i'), RegExp('^\\s*(?:thin|medium|thick|0|' + s[ 3
          ] + '|inherit)\\s*$', 'i'), RegExp('^\\s*(?:(?:thin|medium|thick|0|'
          + s[ 3 ] + '|' + s[ 5 ] + '|' + s[ 2 ] +
          '|transparent|inherit)(?:\\s+(?:thin|medium|thick|0|' + s[ 3 ] +
          ')|\\s+(?:' + s[ 5 ] +
          ')|\\s*#(?:[\\da-f]{3}){1,2}|\\s+aqua|\\s+black|\\s+blue|\\s+fuchsia|\\s+gray|\\s+green|\\s+lime|\\s+maroon|\\s+navy|\\s+olive|\\s+orange|\\s+purple|\\s+red|\\s+silver|\\s+teal|\\s+white|\\s+yellow|\\s+rgb\\(\\s*(?:-?\\d+|0|'
          + s[ 6 ] + ')\\s*,\\s*(?:-?\\d+|0|' + s[ 6 ] +
          ')\\s*,\\s*(?:-?\\d+|0|' + s[ 6 ] +
          ')\\)|\\s+transparent|\\s+inherit){0,2}|inherit)\\s*$', 'i'),
        /^\s*(?:none|inherit)\s*$/i, RegExp('^\\s*(?:' + s[ 8 ] +
          '|none|inherit)\\s*$', 'i'), RegExp('^\\s*(?:0|' + s[ 3 ] + '|' + s[
            6 ] + '|auto|inherit)\\s*$', 'i'), RegExp('^\\s*(?:0|' + s[ 4 ] +
          '|' + s[ 7 ] + '|none|inherit|auto)\\s*$', 'i'), RegExp('^\\s*(?:0|'
          + s[ 4 ] + '|' + s[ 7 ] + '|inherit|auto)\\s*$', 'i'),
        /^\s*(?:0(?:\.\d+)?|\.\d+|1(?:\.0+)?|inherit)\s*$/i,
        RegExp('^\\s*(?:(?:' + s[ 2 ] + '|invert|inherit|' + s[ 5 ] +
          '|thin|medium|thick|0|' + s[ 3 ] +
          ')(?:\\s*#(?:[\\da-f]{3}){1,2}|\\s+aqua|\\s+black|\\s+blue|\\s+fuchsia|\\s+gray|\\s+green|\\s+lime|\\s+maroon|\\s+navy|\\s+olive|\\s+orange|\\s+purple|\\s+red|\\s+silver|\\s+teal|\\s+white|\\s+yellow|\\s+rgb\\(\\s*(?:-?\\d+|0|'
          + s[ 6 ] + ')\\s*,\\s*(?:-?\\d+|0|' + s[ 6 ] +
          ')\\s*,\\s*(?:-?\\d+|0|' + s[ 6 ] +
          ')\\)|\\s+invert|\\s+inherit|\\s+(?:' + s[ 5 ] +
          '|inherit)|\\s+(?:thin|medium|thick|0|' + s[ 3 ] +
          '|inherit)){0,2}|inherit)\\s*$', 'i'), RegExp('^\\s*(?:' + s[ 2 ] +
          '|invert|inherit)\\s*$', 'i'),
        /^\s*(?:visible|hidden|scroll|auto|no-display|no-content)\s*$/i,
        RegExp('^\\s*(?:0|' + s[ 4 ] + '|' + s[ 7 ] + '|inherit)\\s*$', 'i'),
        /^\s*(?:auto|always|avoid|left|right|inherit)\s*$/i,
        RegExp('^\\s*(?:0|[+\\-]?\\d+(?:\\.\\d+)?m?s|' + s[ 6 ] +
          '|inherit)\\s*$', 'i'), /^\s*(?:0|[+\-]?\d+(?:\.\d+)?|inherit)\s*$/i,
        /^\s*(?:clip|ellipsis)\s*$/i, RegExp('^\\s*(?:normal|0|' + s[ 3 ] +
          '|inherit)\\s*$', 'i') ];
      return {
        '-moz-border-radius': c[ 1 ],
        '-moz-border-radius-bottomleft': c[ 0 ],
        '-moz-border-radius-bottomright': c[ 0 ],
        '-moz-border-radius-topleft': c[ 0 ],
        '-moz-border-radius-topright': c[ 0 ],
        '-moz-box-shadow': c[ 2 ],
        '-moz-opacity': c[ 12 ],
        '-moz-outline': c[ 13 ],
        '-moz-outline-color': c[ 14 ],
        '-moz-outline-style': c[ 4 ],
        '-moz-outline-width': c[ 5 ],
        '-o-text-overflow': c[ 20 ],
        '-webkit-border-bottom-left-radius': c[ 0 ],
        '-webkit-border-bottom-right-radius': c[ 0 ],
        '-webkit-border-radius': c[ 1 ],
        '-webkit-border-radius-bottom-left': c[ 0 ],
        '-webkit-border-radius-bottom-right': c[ 0 ],
        '-webkit-border-radius-top-left': c[ 0 ],
        '-webkit-border-radius-top-right': c[ 0 ],
        '-webkit-border-top-left-radius': c[ 0 ],
        '-webkit-border-top-right-radius': c[ 0 ],
        '-webkit-box-shadow': c[ 2 ],
        'azimuth':
        /^\s*(?:0|[+\-]?\d+(?:\.\d+)?(?:g?rad|deg)|(?:left-side|far-left|left|center-left|center|center-right|right|far-right|right-side|behind)(?:\s+(?:left-side|far-left|left|center-left|center|center-right|right|far-right|right-side|behind))?|leftwards|rightwards|inherit)\s*$/i,
        'background': RegExp('^\\s*(?:\\s*(?:' + s[ 8 ] + '|none|(?:(?:0|' + s[
            6 ] + '|' + s[ 3 ] + s[ 0 ] + ')(?:\\s+(?:0|' + s[ 6 ] + '|' + s[ 3
          ] + s[ 1 ] + '))?|(?:center|(?:lef|righ)t(?:\\s+(?:0|' + s[ 6 ] + '|'
          + s[ 3 ] + '))?|(?:top|bottom)(?:\\s+(?:0|' + s[ 6 ] + '|' + s[ 3 ] +
          '))?)(?:\\s+(?:center|(?:lef|righ)t(?:\\s+(?:0|' + s[ 6 ] + '|' + s[
            3 ] + '))?|(?:top|bottom)(?:\\s+(?:0|' + s[ 6 ] + '|' + s[ 3 ] +
          '))?))?)(?:\\s*\\/\\s*(?:(?:0|' + s[ 4 ] + '|' + s[ 6 ] +
          '|auto)(?:\\s+(?:0|' + s[ 4 ] + '|' + s[ 6 ] +
          '|auto)){0,2}|cover|contain))?|\\/\\s*(?:(?:0|' + s[ 4 ] + '|' + s[ 6
          ] + '|auto)(?:\\s+(?:0|' + s[ 4 ] + '|' + s[ 6 ] +
          '|auto)){0,2}|cover|contain)|' + s[ 9 ] +
          '|scroll|fixed|local|(?:border|padding|content)-box)(?:\\s*' + s[ 8 ]
          + '|\\s+none|(?:\\s+(?:0|' + s[ 6 ] + '|' + s[ 3 ] + s[ 0 ] +
          ')(?:\\s+(?:0|' + s[ 6 ] + '|' + s[ 3 ] + s[ 1 ] +
          '))?|(?:\\s+(?:center|(?:lef|righ)t(?:\\s+(?:0|' + s[ 6 ] + '|' + s[
            3 ] + '))?|(?:top|bottom)(?:\\s+(?:0|' + s[ 6 ] + '|' + s[ 3 ] +
          '))?)){1,2})(?:\\s*\\/\\s*(?:(?:0|' + s[ 4 ] + '|' + s[ 6 ] +
          '|auto)(?:\\s+(?:0|' + s[ 4 ] + '|' + s[ 6 ] +
          '|auto)){0,2}|cover|contain))?|\\s*\\/\\s*(?:(?:0|' + s[ 4 ] + '|' +
          s[ 6 ] + '|auto)(?:\\s+(?:0|' + s[ 4 ] + '|' + s[ 6 ] +
          '|auto)){0,2}|cover|contain)|\\s+repeat-x|\\s+repeat-y|(?:\\s+(?:repeat|space|round|no-repeat)){1,2}|\\s+(?:scroll|fixed|local)|\\s+(?:border|padding|content)-box){0,4}\\s*,)*\\s*(?:'
          + s[ 2 ] + '|transparent|inherit|' + s[ 8 ] + '|none|(?:(?:0|' + s[ 6
          ] + '|' + s[ 3 ] + s[ 0 ] + ')(?:\\s+(?:0|' + s[ 6 ] + '|' + s[ 3 ] +
          s[ 1 ] + '))?|(?:center|(?:lef|righ)t(?:\\s+(?:0|' + s[ 6 ] + '|' +
          s[ 3 ] + '))?|(?:top|bottom)(?:\\s+(?:0|' + s[ 6 ] + '|' + s[ 3 ] +
          '))?)(?:\\s+(?:center|(?:lef|righ)t(?:\\s+(?:0|' + s[ 6 ] + '|' + s[
            3 ] + '))?|(?:top|bottom)(?:\\s+(?:0|' + s[ 6 ] + '|' + s[ 3 ] +
          '))?))?)(?:\\s*\\/\\s*(?:(?:0|' + s[ 4 ] + '|' + s[ 6 ] +
          '|auto)(?:\\s+(?:0|' + s[ 4 ] + '|' + s[ 6 ] +
          '|auto)){0,2}|cover|contain))?|\\/\\s*(?:(?:0|' + s[ 4 ] + '|' + s[ 6
          ] + '|auto)(?:\\s+(?:0|' + s[ 4 ] + '|' + s[ 6 ] +
          '|auto)){0,2}|cover|contain)|' + s[ 9 ] +
          '|scroll|fixed|local|(?:border|padding|content)-box)(?:\\s*#(?:[\\da-f]{3}){1,2}|\\s+aqua|\\s+black|\\s+blue|\\s+fuchsia|\\s+gray|\\s+green|\\s+lime|\\s+maroon|\\s+navy|\\s+olive|\\s+orange|\\s+purple|\\s+red|\\s+silver|\\s+teal|\\s+white|\\s+yellow|\\s+rgb\\(\\s*(?:-?\\d+|0|'
          + s[ 6 ] + ')\\s*,\\s*(?:-?\\d+|0|' + s[ 6 ] +
          ')\\s*,\\s*(?:-?\\d+|0|' + s[ 6 ] +
          ')\\)|\\s+transparent|\\s+inherit|\\s*' + s[ 8 ] +
          '|\\s+none|(?:\\s+(?:0|' + s[ 6 ] + '|' + s[ 3 ] + s[ 0 ] +
          ')(?:\\s+(?:0|' + s[ 6 ] + '|' + s[ 3 ] + s[ 1 ] +
          '))?|(?:\\s+(?:center|(?:lef|righ)t(?:\\s+(?:0|' + s[ 6 ] + '|' + s[
            3 ] + '))?|(?:top|bottom)(?:\\s+(?:0|' + s[ 6 ] + '|' + s[ 3 ] +
          '))?)){1,2})(?:\\s*\\/\\s*(?:(?:0|' + s[ 4 ] + '|' + s[ 6 ] +
          '|auto)(?:\\s+(?:0|' + s[ 4 ] + '|' + s[ 6 ] +
          '|auto)){0,2}|cover|contain))?|\\s*\\/\\s*(?:(?:0|' + s[ 4 ] + '|' +
          s[ 6 ] + '|auto)(?:\\s+(?:0|' + s[ 4 ] + '|' + s[ 6 ] +
          '|auto)){0,2}|cover|contain)|\\s+repeat-x|\\s+repeat-y|(?:\\s+(?:repeat|space|round|no-repeat)){1,2}|\\s+(?:scroll|fixed|local)|\\s+(?:border|padding|content)-box){0,5}\\s*$',
          'i'),
        'background-attachment':
        /^\s*(?:scroll|fixed|local)(?:\s*,\s*(?:scroll|fixed|local))*\s*$/i,
        'background-color': c[ 3 ],
        'background-image': RegExp('^\\s*(?:' + s[ 8 ] +
          '|none)(?:\\s*,\\s*(?:' + s[ 8 ] + '|none))*\\s*$', 'i'),
        'background-position': RegExp('^\\s*(?:(?:0|' + s[ 6 ] + '|' + s[ 3 ] +
          s[ 0 ] + ')(?:\\s+(?:0|' + s[ 6 ] + '|' + s[ 3 ] + s[ 1 ] +
          '))?|(?:center|(?:lef|righ)t(?:\\s+(?:0|' + s[ 6 ] + '|' + s[ 3 ] +
          '))?|(?:top|bottom)(?:\\s+(?:0|' + s[ 6 ] + '|' + s[ 3 ] +
          '))?)(?:\\s+(?:center|(?:lef|righ)t(?:\\s+(?:0|' + s[ 6 ] + '|' + s[
            3 ] + '))?|(?:top|bottom)(?:\\s+(?:0|' + s[ 6 ] + '|' + s[ 3 ] +
          '))?))?)(?:\\s*,\\s*(?:(?:0|' + s[ 6 ] + '|' + s[ 3 ] + s[ 0 ] +
          ')(?:\\s+(?:0|' + s[ 6 ] + '|' + s[ 3 ] + s[ 1 ] +
          '))?|(?:center|(?:lef|righ)t(?:\\s+(?:0|' + s[ 6 ] + '|' + s[ 3 ] +
          '))?|(?:top|bottom)(?:\\s+(?:0|' + s[ 6 ] + '|' + s[ 3 ] +
          '))?)(?:\\s+(?:center|(?:lef|righ)t(?:\\s+(?:0|' + s[ 6 ] + '|' + s[
            3 ] + '))?|(?:top|bottom)(?:\\s+(?:0|' + s[ 6 ] + '|' + s[ 3 ] +
          '))?))?))*\\s*$', 'i'),
        'background-repeat': RegExp('^\\s*(?:' + s[ 9 ] + ')(?:\\s*,\\s*(?:' +
          s[ 9 ] + '))*\\s*$', 'i'),
        'border': RegExp('^\\s*(?:(?:thin|medium|thick|0|' + s[ 3 ] + '|' + s[
            5 ] + '|' + s[ 2 ] + '|transparent)(?:\\s+(?:thin|medium|thick|0|'
          + s[ 3 ] + ')|\\s+(?:' + s[ 5 ] +
          ')|\\s*#(?:[\\da-f]{3}){1,2}|\\s+aqua|\\s+black|\\s+blue|\\s+fuchsia|\\s+gray|\\s+green|\\s+lime|\\s+maroon|\\s+navy|\\s+olive|\\s+orange|\\s+purple|\\s+red|\\s+silver|\\s+teal|\\s+white|\\s+yellow|\\s+rgb\\(\\s*(?:-?\\d+|0|'
          + s[ 6 ] + ')\\s*,\\s*(?:-?\\d+|0|' + s[ 6 ] +
          ')\\s*,\\s*(?:-?\\d+|0|' + s[ 6 ] +
          ')\\)|\\s+transparent){0,2}|inherit)\\s*$', 'i'),
        'border-bottom': c[ 6 ],
        'border-bottom-color': c[ 3 ],
        'border-bottom-left-radius': c[ 0 ],
        'border-bottom-right-radius': c[ 0 ],
        'border-bottom-style': c[ 4 ],
        'border-bottom-width': c[ 5 ],
        'border-collapse': /^\s*(?:collapse|separate|inherit)\s*$/i,
        'border-color': RegExp('^\\s*(?:(?:' + s[ 2 ] +
          '|transparent)(?:\\s*#(?:[\\da-f]{3}){1,2}|\\s+aqua|\\s+black|\\s+blue|\\s+fuchsia|\\s+gray|\\s+green|\\s+lime|\\s+maroon|\\s+navy|\\s+olive|\\s+orange|\\s+purple|\\s+red|\\s+silver|\\s+teal|\\s+white|\\s+yellow|\\s+rgb\\(\\s*(?:-?\\d+|0|'
          + s[ 6 ] + ')\\s*,\\s*(?:-?\\d+|0|' + s[ 6 ] +
          ')\\s*,\\s*(?:-?\\d+|0|' + s[ 6 ] +
          ')\\)|\\s+transparent){0,4}|inherit)\\s*$', 'i'),
        'border-left': c[ 6 ],
        'border-left-color': c[ 3 ],
        'border-left-style': c[ 4 ],
        'border-left-width': c[ 5 ],
        'border-radius': c[ 1 ],
        'border-right': c[ 6 ],
        'border-right-color': c[ 3 ],
        'border-right-style': c[ 4 ],
        'border-right-width': c[ 5 ],
        'border-spacing': RegExp('^\\s*(?:(?:\\s*(?:0|' + s[ 3 ] +
          ')){1,2}|\\s*inherit)\\s*$', 'i'),
        'border-style': RegExp('^\\s*(?:(?:' + s[ 5 ] + ')(?:\\s+(?:' + s[ 5 ]
          + ')){0,4}|inherit)\\s*$', 'i'),
        'border-top': c[ 6 ],
        'border-top-color': c[ 3 ],
        'border-top-left-radius': c[ 0 ],
        'border-top-right-radius': c[ 0 ],
        'border-top-style': c[ 4 ],
        'border-top-width': c[ 5 ],
        'border-width': RegExp('^\\s*(?:(?:thin|medium|thick|0|' + s[ 3 ] +
          ')(?:\\s+(?:thin|medium|thick|0|' + s[ 3 ] + ')){0,4}|inherit)\\s*$',
          'i'),
        'bottom': c[ 9 ],
        'box-shadow': c[ 2 ],
        'caption-side': /^\s*(?:top|bottom|inherit)\s*$/i,
        'clear': /^\s*(?:none|left|right|both|inherit)\s*$/i,
        'clip': RegExp('^\\s*(?:rect\\(\\s*(?:0|' + s[ 3 ] +
          '|auto)\\s*,\\s*(?:0|' + s[ 3 ] + '|auto)\\s*,\\s*(?:0|' + s[ 3 ] +
          '|auto)\\s*,\\s*(?:0|' + s[ 3 ] + '|auto)\\)|auto|inherit)\\s*$',
          'i'),
        'color': RegExp('^\\s*(?:' + s[ 2 ] + '|inherit)\\s*$', 'i'),
        'counter-increment': c[ 7 ],
        'counter-reset': c[ 7 ],
        'cue': RegExp('^\\s*(?:(?:' + s[ 8 ] + '|none|inherit)(?:\\s*' + s[ 8 ]
          + '|\\s+none|\\s+inherit)?|inherit)\\s*$', 'i'),
        'cue-after': c[ 8 ],
        'cue-before': c[ 8 ],
        'cursor': RegExp('^\\s*(?:(?:\\s*' + s[ 8 ] +
          '\\s*,)*\\s*(?:auto|crosshair|default|pointer|move|e-resize|ne-resize|nw-resize|n-resize|se-resize|sw-resize|s-resize|w-resize|text|wait|help|progress|all-scroll|col-resize|hand|no-drop|not-allowed|row-resize|vertical-text)|\\s*inherit)\\s*$',
          'i'),
        'direction': /^\s*(?:ltr|rtl|inherit)\s*$/i,
        'display':
        /^\s*(?:inline|block|list-item|run-in|inline-block|table|inline-table|table-row-group|table-header-group|table-footer-group|table-row|table-column-group|table-column|table-cell|table-caption|none|inherit|-moz-inline-box|-moz-inline-stack)\s*$/i,
        'elevation':
        /^\s*(?:0|[+\-]?\d+(?:\.\d+)?(?:g?rad|deg)|below|level|above|higher|lower|inherit)\s*$/i,
        'empty-cells': /^\s*(?:show|hide|inherit)\s*$/i,
        'filter': RegExp('^\\s*(?:\\s*alpha\\(\\s*opacity\\s*=\\s*(?:0|' + s[ 6
          ] + '|[+\\-]?\\d+(?:\\.\\d+)?)\\))+\\s*$', 'i'),
        'float': /^\s*(?:left|right|none|inherit)\s*$/i,
        'font':
        RegExp('^\\s*(?:(?:normal|italic|oblique|inherit|small-caps|bold|bolder|lighter|100|200|300|400|500|600|700|800|900)(?:\\s+(?:normal|italic|oblique|inherit|small-caps|bold|bolder|lighter|100|200|300|400|500|600|700|800|900)){0,2}\\s+(?:xx-small|x-small|small|medium|large|x-large|xx-large|(?:small|larg)er|0|'
          + s[ 4 ] + '|' + s[ 7 ] +
          '|inherit)(?:\\s*\\/\\s*(?:normal|0|\\d+(?:\\.\\d+)?|' + s[ 4 ] + '|'
          + s[ 7 ] +
          '|inherit))?(?:(?:\\s*\"\\w(?:[\\w-]*\\w)(?:\\s+\\w([\\w-]*\\w))*\"|\\s+(?:serif|sans-serif|cursive|fantasy|monospace))(?:\\s*,\\s*(?:\"\\w(?:[\\w-]*\\w)(?:\\s+\\w([\\w-]*\\w))*\"|serif|sans-serif|cursive|fantasy|monospace))*|\\s+inherit)|caption|icon|menu|message-box|small-caption|status-bar|inherit)\\s*$',
          'i'),
        'font-family':
        /^\s*(?:(?:"\w(?:[\w-]*\w)(?:\s+\w([\w-]*\w))*"|serif|sans-serif|cursive|fantasy|monospace)(?:\s*,\s*(?:"\w(?:[\w-]*\w)(?:\s+\w([\w-]*\w))*"|serif|sans-serif|cursive|fantasy|monospace))*|inherit)\s*$/i,
        'font-size':
        RegExp('^\\s*(?:xx-small|x-small|small|medium|large|x-large|xx-large|(?:small|larg)er|0|'
          + s[ 4 ] + '|' + s[ 7 ] + '|inherit)\\s*$', 'i'),
        'font-stretch':
        /^\s*(?:normal|wider|narrower|ultra-condensed|extra-condensed|condensed|semi-condensed|semi-expanded|expanded|extra-expanded|ultra-expanded)\s*$/i,
        'font-style': /^\s*(?:normal|italic|oblique|inherit)\s*$/i,
        'font-variant': /^\s*(?:normal|small-caps|inherit)\s*$/i,
        'font-weight':
        /^\s*(?:normal|bold|bolder|lighter|100|200|300|400|500|600|700|800|900|inherit)\s*$/i,
        'height': c[ 9 ],
        'left': c[ 9 ],
        'letter-spacing': c[ 21 ],
        'line-height': RegExp('^\\s*(?:normal|0|\\d+(?:\\.\\d+)?|' + s[ 4 ] +
          '|' + s[ 7 ] + '|inherit)\\s*$', 'i'),
        'list-style':
        RegExp('^\\s*(?:(?:disc|circle|square|decimal|decimal-leading-zero|lower-roman|upper-roman|lower-greek|lower-latin|upper-latin|armenian|georgian|lower-alpha|upper-alpha|none|inherit|inside|outside|'
          + s[ 8 ] +
          ')(?:\\s+(?:disc|circle|square|decimal|decimal-leading-zero|lower-roman|upper-roman|lower-greek|lower-latin|upper-latin|armenian|georgian|lower-alpha|upper-alpha|none|inherit)|\\s+(?:inside|outside|inherit)|\\s*'
          + s[ 8 ] + '|\\s+none|\\s+inherit){0,2}|inherit)\\s*$', 'i'),
        'list-style-image': c[ 8 ],
        'list-style-position': /^\s*(?:inside|outside|inherit)\s*$/i,
        'list-style-type':
        /^\s*(?:disc|circle|square|decimal|decimal-leading-zero|lower-roman|upper-roman|lower-greek|lower-latin|upper-latin|armenian|georgian|lower-alpha|upper-alpha|none|inherit)\s*$/i,
        'margin': RegExp('^\\s*(?:(?:0|' + s[ 3 ] + '|' + s[ 6 ] +
          '|auto)(?:\\s+(?:0|' + s[ 3 ] + '|' + s[ 6 ] +
          '|auto)){0,4}|inherit)\\s*$', 'i'),
        'margin-bottom': c[ 9 ],
        'margin-left': c[ 9 ],
        'margin-right': c[ 9 ],
        'margin-top': c[ 9 ],
        'max-height': c[ 10 ],
        'max-width': c[ 10 ],
        'min-height': c[ 11 ],
        'min-width': c[ 11 ],
        'opacity': c[ 12 ],
        'outline': c[ 13 ],
        'outline-color': c[ 14 ],
        'outline-style': c[ 4 ],
        'outline-width': c[ 5 ],
        'overflow': /^\s*(?:visible|hidden|scroll|auto|inherit)\s*$/i,
        'overflow-x': c[ 15 ],
        'overflow-y': c[ 15 ],
        'padding': RegExp('^\\s*(?:(?:\\s*(?:0|' + s[ 4 ] + '|' + s[ 7 ] +
          ')){1,4}|\\s*inherit)\\s*$', 'i'),
        'padding-bottom': c[ 16 ],
        'padding-left': c[ 16 ],
        'padding-right': c[ 16 ],
        'padding-top': c[ 16 ],
        'page-break-after': c[ 17 ],
        'page-break-before': c[ 17 ],
        'page-break-inside': /^\s*(?:avoid|auto|inherit)\s*$/i,
        'pause': RegExp('^\\s*(?:(?:\\s*(?:0|[+\\-]?\\d+(?:\\.\\d+)?m?s|' + s[
            6 ] + ')){1,2}|\\s*inherit)\\s*$', 'i'),
        'pause-after': c[ 18 ],
        'pause-before': c[ 18 ],
        'pitch':
        /^\s*(?:0|\d+(?:\.\d+)?k?Hz|x-low|low|medium|high|x-high|inherit)\s*$/i,
        'pitch-range': c[ 19 ],
        'play-during': RegExp('^\\s*(?:' + s[ 8 ] +
          '\\s*(?:mix|repeat)(?:\\s+(?:mix|repeat))?|auto|none|inherit)\\s*$',
          'i'),
        'position': /^\s*(?:static|relative|absolute|inherit)\s*$/i,
        'quotes': c[ 7 ],
        'richness': c[ 19 ],
        'right': c[ 9 ],
        'speak': /^\s*(?:normal|none|spell-out|inherit)\s*$/i,
        'speak-header': /^\s*(?:once|always|inherit)\s*$/i,
        'speak-numeral': /^\s*(?:digits|continuous|inherit)\s*$/i,
        'speak-punctuation': /^\s*(?:code|none|inherit)\s*$/i,
        'speech-rate':
        /^\s*(?:0|[+\-]?\d+(?:\.\d+)?|x-slow|slow|medium|fast|x-fast|faster|slower|inherit)\s*$/i,
        'stress': c[ 19 ],
        'table-layout': /^\s*(?:auto|fixed|inherit)\s*$/i,
        'text-align': /^\s*(?:left|right|center|justify|inherit)\s*$/i,
        'text-decoration':
        /^\s*(?:none|(?:underline|overline|line-through|blink)(?:\s+(?:underline|overline|line-through|blink)){0,3}|inherit)\s*$/i,
        'text-indent': RegExp('^\\s*(?:0|' + s[ 3 ] + '|' + s[ 6 ] +
          '|inherit)\\s*$', 'i'),
        'text-overflow': c[ 20 ],
        'text-shadow': c[ 2 ],
        'text-transform':
        /^\s*(?:capitalize|uppercase|lowercase|none|inherit)\s*$/i,
        'text-wrap': /^\s*(?:normal|unrestricted|none|suppress)\s*$/i,
        'top': c[ 9 ],
        'unicode-bidi': /^\s*(?:normal|embed|bidi-override|inherit)\s*$/i,
        'vertical-align':
        RegExp('^\\s*(?:baseline|sub|super|top|text-top|middle|bottom|text-bottom|0|'
          + s[ 6 ] + '|' + s[ 3 ] + '|inherit)\\s*$', 'i'),
        'visibility': /^\s*(?:visible|hidden|collapse|inherit)\s*$/i,
        'voice-family':
        /^\s*(?:(?:\s*(?:"\w(?:[\w-]*\w)(?:\s+\w([\w-]*\w))*"|male|female|child)\s*,)*\s*(?:"\w(?:[\w-]*\w)(?:\s+\w([\w-]*\w))*"|male|female|child)|\s*inherit)\s*$/i,
        'volume': RegExp('^\\s*(?:0|\\d+(?:\\.\\d+)?|' + s[ 7 ] +
          '|silent|x-soft|soft|medium|loud|x-loud|inherit)\\s*$', 'i'),
        'white-space':
        /^\s*(?:normal|pre|nowrap|pre-wrap|pre-line|inherit|-o-pre-wrap|-moz-pre-wrap|-pre-wrap)\s*$/i,
        'width': RegExp('^\\s*(?:0|' + s[ 4 ] + '|' + s[ 7 ] +
          '|auto|inherit)\\s*$', 'i'),
        'word-spacing': c[ 21 ],
        'word-wrap': /^\s*(?:normal|break-word)\s*$/i,
        'z-index': /^\s*(?:auto|-?\d+|inherit)\s*$/i,
        'zoom': RegExp('^\\s*(?:normal|0|\\d+(?:\\.\\d+)?|' + s[ 7 ] +
          ')\\s*$', 'i')
      };
    })(),
  'alternates': {
    'MozBoxShadow': [ 'boxShadow' ],
    'WebkitBoxShadow': [ 'boxShadow' ],
    'float': [ 'cssFloat', 'styleFloat' ]
  },
  'HISTORY_INSENSITIVE_STYLE_WHITELIST': {
    'display': true,
    'filter': true,
    'float': true,
    'height': true,
    'left': true,
    'opacity': true,
    'overflow': true,
    'position': true,
    'right': true,
    'top': true,
    'visibility': true,
    'width': true,
    'padding-left': true,
    'padding-right': true,
    'padding-top': true,
    'padding-bottom': true
  }
}
