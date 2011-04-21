(function() {
  var sanitizer = null
  var createSanitizer = function() {
    var s = html.makeHtmlSanitizer(function(tagName, attribs) {
      for (var i = 0; i < attribs.length; i += 2) {
        var attribName = attribs[i];
        var value = attribs[i + 1];
        var atype = null, attribKey;
        if ((attribKey = tagName + '::' + attribName,
             html4.ATTRIBS.hasOwnProperty(attribKey))
            || (attribKey = '*::' + attribName,
                html4.ATTRIBS.hasOwnProperty(attribKey))) {
          atype = html4.ATTRIBS[attribKey];
        }
        if (atype !== null) {
          switch (atype) {
            case html4.atype.NONE:
              break;
            case html4.atype.SCRIPT:
            case html4.atype.STYLE:
              value = null;
              break;
            case html4.atype.ID:
            case html4.atype.IDREF:
            case html4.atype.IDREFS:
            case html4.atype.GLOBAL_NAME:
            case html4.atype.LOCAL_NAME:
            case html4.atype.CLASSES:
              value = opt_nmTokenPolicy ? opt_nmTokenPolicy(value) : value;
              break;
            case html4.atype.URI:
              value = opt_uriPolicy && opt_uriPolicy(value);
              break;
            case html4.atype.URI_FRAGMENT:
              if (value && '#' === value.charAt(0)) {
                value = opt_nmTokenPolicy ? opt_nmTokenPolicy(value) : value;
                if (value) { value = '#' + value; }
              } else {
                value = null;
              }
              break;
            default:
              value = null;
              break;
          }
        } else {
          value = null;
        }
        attribs[i + 1] = value;
      }
      return attribs;
    })
    
    console.log(s);
    return s;
  };
  
  this.phases = this.phases || {}
  this.phases.sanitize = function(html) {
    if(!sanitizer) sanitizer = createSanitizer()
    var result = []
    sanitizer(html,result)
    return result.join('')
  };
}).call(this)



