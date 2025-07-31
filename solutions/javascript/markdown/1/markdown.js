function wrap(text, tag) {
  return `<${tag}>${text}</${tag}>`;
}

function isTag(text, tag) {
  return text.startsWith(`<${tag}>`);
}

function parser(markdown, delimiter, tag) {
  const pattern = new RegExp(`${delimiter}(.+)${delimiter}`);
  const replacement = `<${tag}>$1</${tag}>`;
  return markdown.replace(pattern, replacement);
}

function parse__(markdown) {
  return parser(markdown, '__', 'strong');
}

function parse_(markdown) {
  return parser(markdown, '_', 'em');
}

function parseText(markdown) {
  return parse_(parse__(markdown));
}

//return 0 if is not header else return header level between 1 and 6
function isHeader(markdown){
  let level = markdown.split(/[^#]/)[0].length;
  return (level>0 && level<7) ? level : 0
}

function parseHeader(markdown, count) {
  const headerTag = `h${count}`;
  return wrap(markdown.substring(count + 1), headerTag);
}

function parseLineItem(markdown) {
  return wrap(parseText(markdown.substring(2)), 'li');
}

function isListItem(markdown) {
  return markdown.startsWith('*')
}

function parseParagraph(markdown) {
    return wrap(parseText(markdown), 'p');
}

function parseLine(markdown, list) {
  let inListAfter = false;
  let result = null;
  let headerLevel = isHeader(markdown);
  let ulTag = list ? '</ul>' : ''; //if list is open close ul tag
  
  if(headerLevel>0){
    result = ulTag + parseHeader(markdown, headerLevel);
  }
  
  if(isListItem(markdown)){
    ulTag = list ? '' : '<ul>'; //if list open ul tag
    result = ulTag + parseLineItem(markdown);

    inListAfter = true;
  }
  
  if (result === null) {
    result = ulTag + parseParagraph(markdown);
  }
  
  if (result === null) {
    throw new Error('Invalid markdown');
  }
  return [result, inListAfter];
}

export function parse(markdown) {

  const lines = markdown.split('\n');
  let result = '';
  let list = false;
  for (let i = 0; i < lines.length; i++) {
    let [lineResult, newList] = parseLine(lines[i], list);
    result += lineResult;
    list = newList;
  }
  return `${result}${list ? '</ul>' : ''}`
}
