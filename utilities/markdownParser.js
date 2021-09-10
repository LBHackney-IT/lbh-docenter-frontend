/*
This feature is LOW PRIORITY! Leaving it as a TODO: for the future Pull Request.
*/

var md = require("markdown-it")();
const dedent = require("dedent-js");
const featuresMD = require("./spaceAllMarkup");
const emphasisOverload = dedent`_**Qualities** of a globe, a round earth in which all the directions **eventually** meet_, in which __there is no__ center because every
point, or none, is center — an equal earth which all men occupy as equals.
It will be **possible to account for this unless,
you do** something like this.
**Can there be??? Can there?
Can there be something?**

*May we try __something like
this?__ without any truth
to it? Or should I justfinish this up already?*

So **If I** have sentence **like** this?

**If you start with 2 stars, and you then make _this_ hidden**

*Why be so something __and why delay__?*

_* Something*_

* asd
* something
  * ewr
  * qop

__asdf__

**asdf**

_asdf_

*asdf*

_asdfg **ewr** asdf_`;

// for now let's focus on the paragraph text
function splitOutTopLevelEmphasis(text) {
  // wrapped the whole pattern in capture group to keep the delimiter
  const topLevelEmphasisPattern = /((?<![_*])([_*]{2}|[_*])[^\s](?:(?!\2)[^\n])+(?:\n(?:(?!\2)[^\n])+)*\2(?![_*]))/gm;
  // filter removes empty strings & backreferenced capture group results
  const textPieces = text
    .split(topLevelEmphasisPattern)
    .filter((piece) => Boolean(piece) && !/^[_*]{1,2}$/.test(piece));

  textPieces.forEach((p) => console.log(!/^[\s\r\n\t ]*$/.test(p) ? p : "newline"));
}

splitOutTopLevelEmphasis(emphasisOverload);

// function markdownToTree() {
//   // extract links
//   // extract emphasis
//   // extract strikthrough
//   // extract images
//   // extract inline quotes
//   // extract nested headers
//   // extract unordered list
//   // extract tables
//   // extract ordered list
//   // extract blockquotes
//   // extract task lists
// }

// The question is... should I remove the newlines first?
// Answer is yes, because of runaway regular expressions: (?<![_*])(_|\*)[^ \n]([^\n]+)(\n?[^_*\n]+?)+\1(?![_*])
// It's already inefficient as hell to do this in regex, but with all the back-tracking it just becomes ridiculous
// Maybe... not sure yet - I found a way around the catastrophic backtracking.

// const [status, setStatus] = useState();

// Change of approach, but this might still be useful
// const getNodeKey = (level, title, markdown) => `${level}-${title}-${markdown ? markdown.length : 0}`;
// // I want to keep the name docTree for descriptiveness
// function markUpDocTree(docTree, level = 1) {
//   const { title, markdown, sections } = docTree;
//   const nodeJSX = (
//     <div key={getNodeKey(level, title, markdown)} className="layeredSection">
//       <HeadingN n={level}>{title}</HeadingN>
//       {markdown && <p>{markdown}</p>}
//       {sections && sections.map((node) => markUpDocTree(node, level + 1))}
//     </div>
//   );
//   return nodeJSX;
// }
//markUpDocTree(tempObject)

// const parseAPIDataIntoReact = () => {

// };
