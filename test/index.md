# Markdown

Visual Studio Code supports the CommonMark spec using the [markdown-it](https://github.com/markdown-it/markdown-it) library (which supports the `tables` and `strikethrough` GFM extensions).

Location of VS Code's markdown stylesheet: `/Applications/Visual Studio Code.app/Contents/Resources/app/extensions/markdown-language-features/media/markdown.css`

See VS Code preview source: <kbd>cmd</kbd> + <kbd>shift</kbd> + <kbd>P</kbd> then `Developer: Open WebView Developer Tools`

## Components styled by Field Agent

- Leaf blocks
  - Thematic breaks
  - Headings
  - Fenced code blocks
  - HTML blocks
  - Paragraphs
  - Tables (supported GFM extension)
- Container blocks
  - Block quotes
  - Lists
  - Task lists (unsupported GFM extension)
- Inlines
  - Backslash escapes
  - Code spans
  - Emphasis
  - Strong emphasis
  - Strikethroughs (supported GFM extension)
  - Links
  - Images
  - Autolinks

---

### Leaf blocks

#### Thematic breaks

---

#### Headings

# Heading 1

## Heading 2

### Heading 3

#### Heading 4

##### Heading 5

###### Heading 6

---

#### Headings with paragraphs

# Heading 1

Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit assumenda minima minus, placeat fuga harum doloremque saepe cupiditate nulla? Blanditiis optio facere beatae velit aut quasi amet distinctio exercitationem, dicta iste expedita.

## Heading 2

Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit assumenda minima minus, placeat fuga harum doloremque saepe cupiditate nulla? Blanditiis optio facere beatae velit aut quasi amet distinctio exercitationem, dicta iste expedita.

### Heading 3

Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit assumenda minima minus, placeat fuga harum doloremque saepe cupiditate nulla? Blanditiis optio facere beatae velit aut quasi amet distinctio exercitationem, dicta iste expedita.

#### Heading 4

Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit assumenda minima minus, placeat fuga harum doloremque saepe cupiditate nulla? Blanditiis optio facere beatae velit aut quasi amet distinctio exercitationem, dicta iste expedita.

##### Heading 5

Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit assumenda minima minus, placeat fuga harum doloremque saepe cupiditate nulla? Blanditiis optio facere beatae velit aut quasi amet distinctio exercitationem, dicta iste expedita.

###### Heading 6

Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit assumenda minima minus, placeat fuga harum doloremque saepe cupiditate nulla? Blanditiis optio facere beatae velit aut quasi amet distinctio exercitationem, dicta iste expedita.

---

#### Fenced code blocks

```html
<p>Lorem ipsum dolor sit amet.</p>
  <p>Tab</p>
  <p>Two spaces</p>
```

Lorem ipsum dolor sit amet.

```css
p {
  margin-top: 1.5rem;
}
```

#### HTML blocks

<p>Lorem ipsum dolor sit amet <u>consectetur adipisicing elit</u></p>

#### Paragraphs

Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit assumenda minima minus, placeat fuga harum doloremque saepe cupiditate nulla? Blanditiis optio facere beatae velit aut quasi amet distinctio exercitationem, dicta iste expedita.

Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit assumenda minima minus, placeat fuga harum doloremque saepe cupiditate nulla? Blanditiis optio facere beatae velit aut quasi amet distinctio exercitationem, dicta iste expedita.

#### Tables (GitHub Flavored Markdown extensions)

| Lorem | Ipsum |
| ----- | ----- |
| Dolor | Sit   |
| Amet  |       |

### Container blocks

#### Block quotes

> Any fool can write code that a computer can understand. Good programmers write code that humans can understand. <footer>— Martin Fowler</footer>

Lorem ipsum dolor sit amet

> Fix the cause, not the symptom. <footer>— Steve Maguire</footer>

#### Lists

- Unordered list
  1. Nested ordered list
  1. Nested ordered list
- Unordered list
  - Nested unordered list
  - Nested unordered list
- Unordered list

1. Ordered list
   1. Nested ordered list
   1. Nested ordered list
1. Ordered list
   - Nested unordered list
   - Nested unordered list
1. Ordered list

#### Task lists

- [ ] foo
- [x] bar

### Inlines

#### Backslash escapes

Lorem ipsum \*dolor sit amet\*.

#### Code spans

Lorem ipsum `dolor sit amet`.

#### Emphasis

Lorem ipsum _dolor sit amet_.

#### Strong emphasis

Lorem ipsum **dolor sit amet**.

#### Strikethrough (GitHub Flavored Markdown extension)

This is ~~strikethrough~~

#### Links

Lorem ipsum [dolor sit amet](https://github.com/charsboo).

#### Images

![Lorem ipsum dolor sit amet](https://source.unsplash.com/300x200)

#### Autolinks

Lorem ipsum dolor sit amet <https://github.com/charsboo>

## References

- [CommonMark Spec](https://spec.commonmark.org/0.29/)
- [GitHub Flavored Markdown Spec](https://github.github.com/gfm/)
- [Visual Studio Code Docs](https://code.visualstudio.com/docs/languages/markdown)

# Markdown

<small>From [Wikipedia](https://en.wikipedia.org/wiki/Markdown), the free encyclopedia</small>

Markdown is a [lightweight markup language](https://en.wikipedia.org/wiki/Lightweight_markup_language) for creating formatted text using a plain-text editor. [John Gruber](https://en.wikipedia.org/wiki/John_Gruber) and [Aaron Swartz](https://en.wikipedia.org/wiki/Aaron_Swartz) created Markdown in 2004 as a markup language that is appealing to human readers in its source code form.<sup>[9]</sup> Markdown is widely used in blogging, instant messaging, online forums, collaborative software, documentation pages, and readme files.

Since the initial description of Markdown<sup>[10]</sup> contained ambiguities and unanswered questions, the implementations that appeared over the years have subtle differences and many come with syntax extensions.

## History

In 2002 Aaron Swartz created [atx](http://www.aaronsw.com/2002/atx/intro), "the true structured text format". Swartz and John Gruber then worked together to create the Markdown language in 2004,<sup>[2][3]</sup> with the goal of enabling people "to write using an easy-to-read and easy-to-write plain text format, optionally convert it to structurally valid [XHTML](https://en.wikipedia.org/wiki/XHTML) (or [HTML](https://en.wikipedia.org/wiki/HTML))".<sup>[4]</sup>

Its key design goal is readability – that the language be readable as-is, without looking like it has been marked up with tags or formatting instructions,<sup>[9]</sup> unlike text formatted with a markup language, such as [Rich Text Format](https://en.wikipedia.org/wiki/Rich_Text_Format) (RTF) or HTML, which have obvious tags and formatting instructions. To this end, its main inspiration is the existing conventions for marking up plain text in email, though it also draws from earlier markup languages, notably setext, Textile, and reStructuredText.<sup>[9]</sup>

Gruber wrote a Perl script, `Markdown.pl`, which converts marked-up text input to valid, well-formed XHTML or HTML and replaces angle brackets '`<`' '`>`' and ampersands '`&`' with their corresponding character entity references. It can take the role of a standalone script, a plugin for [Blosxom](https://en.wikipedia.org/wiki/Blosxom) or a [Movable Type](https://en.wikipedia.org/wiki/Movable_Type), or of a text filter for [BBEdit](https://en.wikipedia.org/wiki/BBEdit).<sup>[4]</sup>

## Standardization

Markdown has been characterised by an informal specification<sup>[11]</sup> and a reference implementation for conversion to HTML. Over time, many Markdown implementations have appeared. People developed these mostly driven by the need for additional features on top of the base syntax—such as tables, footnotes, definition lists (technically HTML description lists), and Markdown inside HTML blocks. The behavior of some of these diverges from the reference implementation. At the same time, a number of ambiguities in the informal specification have attracted attention.<sup>[12]</sup> These issues spurred the creation of tools such as Babelmark<sup>[13][14]</sup> to compare the output of various implementations,<sup>[15]</sup> and an effort by some developers of Markdown parsers for standardisation. However, Gruber has argued that complete standardization would be mistaken: "Different sites (and people) have different needs. No one syntax would make all happy."<sup>[16]</sup>

In March 2016 two relevant informational Internet [RFCs](https://en.wikipedia.org/wiki/Request_for_Comments) were published:

- RFC 7763 introduced [MIME](https://en.wikipedia.org/wiki/MIME) type text/markdown with the original variant.
- RFC 7764 discussed and registered the variants [MultiMarkdown](https://en.wikipedia.org/wiki/MultiMarkdown), GitHub Flavored Markdown (GFM), [Pandoc](https://en.wikipedia.org/wiki/Pandoc), [CommonMark](https://en.wikipedia.org/wiki/Markdown#CommonMark), and Markdown Extra among others.<sup>[17]</sup>

### CommonMark

From 2012, a group of people, including [Jeff Atwood](https://en.wikipedia.org/wiki/Jeff_Atwood) and [John MacFarlane](https://en.wikipedia.org/wiki/John_MacFarlane_(philosopher)), launched what Atwood characterized as a standardization effort.<sup>[20]</sup> A community website now aims to "document various tools and resources available to document authors and developers, as well as implementors of the various Markdown implementations".<sup>[21]</sup> In September 2014, Gruber objected to the usage of "Markdown" in the name of this effort and it was rebranded as a new dialect named CommonMark.<sup>[22][23]</sup> CommonMark.org published several versions of a specification, reference implementation, and test suite, and "[plans] to announce a finalized 1.0 spec and test suite in 2019."<sup>[24]</sup> No 1.0 spec has since been released as major issues still remain unsolved.<sup>[25]</sup> Nonetheless, the following sites and projects have adopted CommonMark: Discourse, GitHub, GitLab, Reddit, Qt, Stack Exchange (Stack Overflow), and Swift.
