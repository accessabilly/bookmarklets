(function markupPollutionChecker() {
  // A JavaScript bookmarklet to extract findings of
  // JavaScript primitives (null, undefined, NaN)
  // that may pollute the DOM as stings
  // to make find errors easier

  // create containing element
  const listContainer = document.createElement('div');
  listContainer.id = 'markupPollutionChecker';
  document.getElementsByTagName('body')[0].appendChild(listContainer);

  // get the DOM
  const html = document.documentElement.outerHTML;
  // regex to find undefined, NaN and null in the DOM
  const regex = /(.|[\r\n]){30}(?:undefined|NaN|null)(.|[\r\n]){30}/gm;

  const matches = html.match(regex);
  const numberOfListItems = (html.match(regex) || []).length;

  // create headline
  const text = ' findings of undefined | NaN | null in this document';
  const headline = document.createElement('h1');
  const headlineText = document.createTextNode(`${numberOfListItems} ${text}`);
  headline.appendChild(headlineText);
  listContainer.appendChild(headline);

  const mapObj = {
    undefined: '<mark>undefined</mark>',
    NaN: '<mark>NaN</mark>',
    null: '<mark>null</mark>',
  };

  if (numberOfListItems > 0) {
    // create ordered list
    const listElement = document.createElement('ol');
    listContainer.appendChild(listElement);

    // transform array to list of HTML encoded machtes
    for (let i = 0; i < numberOfListItems; i += 1) {
      const listItem = document.createElement('li');
      let htmlEncodedMatch = matches[i].replace(/[\u00A0-\u9999<>]/gim, i => `&#${i.charCodeAt(0)};`);
      htmlEncodedMatch = htmlEncodedMatch.replace(/undefined|NaN|null/gi, matched => mapObj[matched]);

      listItem.innerHTML = htmlEncodedMatch;
      listElement.appendChild(listItem);
    }
  }

  // add styles to the document
  function addStyles(css) {
    const head = document.getElementsByTagName('head')[0];
    const s = document.createElement('style');
    s.setAttribute('type', 'text/css');
    if (s.styleSheet) { // IE
      s.styleSheet.cssText = css;
    } else {
      s.appendChild(document.createTextNode(css));
    }
    head.appendChild(s);
  }

  const css = `
          #markupPollutionChecker {
            font-family: 'Trebuchet MS', Helvetica, sans-serif;
            font-size: 1rem;
            line-height: 1.3;
            position: fixed;
            top: 50%;
            transform: translateY(-50%);
            left: 0;
            right: 0;
            width: 80vw;
            max-width: 40rem;
            margin: 0 auto;
            padding: 1rem;
            z-index: 2147483647;
            color: #000000;
            border: 2px solid #000000;
            background-color: #1ea0d6; 
          }
          #markupPollutionChecker h1 {
            font-size: 1.5rem;
            line-height: 1.3;
            margin: 0 0 1rem 0;
          }
          #markupPollutionChecker ol {
            padding-top: 0.5rem;
            padding-right: 0.5rem;
            padding-bottom: 0.5rem;
            background-color: #ffffff;
          }
          #markupPollutionChecker li {
            overflow-wrap: break-word;
            word-wrap: break-word;
            margin-bottom: 0.5rem;
          }
          #markupPollutionChecker li:last-of-type {
            margin-bottom: 0;
          }  
          #markupPollutionChecker mark {
            background-color: #ffcc33; 
          }
        `;

  addStyles(css);
}());
