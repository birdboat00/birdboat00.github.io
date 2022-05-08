# Template
<p class="author">Author Name <br> MONTH dd, YYYY</p>

<div class="abstract">
  <h2>Abstract</h2>
  <p>This is the template for essays. It is styled using the
      essay styling css rules.</p>
</div>

## Contents
1. [Getting Started](#getting-started)
1. [Class-based Elements](#class-based-elements)
  - [Author and Abstract](#author-and-abstract)
1. [Markdown Elements](#markdown-elements)
  - [Text Formatting](#text-formatting)
    - [Headings](#headings)
    - [Paragraphs](#paragraphs)
  - [Lists](#lists)
    - [Ordered List](#ordered-list)
    - [Unordered List](#unordered-list)
  - [Blockquotes](#blockquotes)
  - [Horizontal rules](#horizontal-rules)
  - [Tables](#tables)
  - [Code](#code)

## Getting Started
1. Copy the `template.html` file and rename it to the essay name.
1. Create a new markdown file with the name of the essay.
1. Create a new JSON metafile. The `"name"` property holds the name of the essay. The `"file"` property holds the path to the essay markdown file. Optionally a `"theme"` property can be added so the essay uses a specific css theme.
1. Change the `meta` with the name `essay` to point to your JSON metafile.
1. Done.

## Class-based Elements
### Author and Abstract
Use the following HTML to add an author and abstract to the essay.
```html
<p class="author">John Doe <br> May 8, 2022</p>
<div class="abstract">
  <h2>Abstract</h2>
  <p>...</p>
</div>
```

## Markdown Elements

### Text Formatting

#### Headings
# Heading 1
## Heading 2
### Heading 3
#### Heading 4
##### Heading 5
###### Heading 6

#### Paragraphs
A paragraph (from the Greek *paragraphos*, "to write beside" or "written beside") is a self-contained unit of a discourse in writing dealing with a particular point or idea. A paragraph conists of one or more sentences. Though not required by the syntax of any language, paragraphs are usually expected part of formal writing, used to organize longer prose.

Text can have different styles: *italic* **bold** ~~strikehtrough~~ <mark>marked</mark> `code`

### Lists
#### Ordered List
1. List Item 1
1. List Item 2
1. List Item 3

#### Unordered List
- List Item 1
- List Item 2
- List Item 3

### Blockquotes
> Give me six hours to chop down a tree and I will spend the first four sharpening the axe. <cite>— Abraham Lincoln</cite>

### Horizontal rules
<hr>

### Tables
|Table Header 1|Table Header 2|Table Header 3|
|---|---|---|
|Table Cell 1|Table Cell 2|Table Cell 3|
|Table Cell 1|Table Cell 2|Table Cell 3|
|Table Cell 1|Table Cell 2|Table Cell 3|

### Code
Keyboard input: <kbd>Ctrl + C</kbd><kbd>Ctrl + V</kbd>

Inline code: `<div>code</div>`

Sample output: <samp>This is sample output from a computer program.</samp>

Bigger Code Blocks (pre):
```
This is some pre-formatted
code 
  text
      that keeps its
    formatting
```