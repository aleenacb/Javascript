CSS (Cascading style sheet) is a styling language used to control the presentation of the documents written in HTML, XML and similar markup languages.

1.External CSS: contains separate CSS file with a .css extension which contains only style property with the help of tag attributes.

selector {
    property1: value1;
    property2: value2;
}

Include external file: The external CSS file is linked to the HTML document using a link tag.
<link rel="stylesheet" type="text/css" href="./style.css"/>

2. Internal CSS or Embedded: Internal CSS is embedded within the HTML file using style HTML tag.
<style type="text/css">
    div {
        color: #444;
    }
</style>

3. Inline CSS: contains CSS properties in the body section specified within HTML tags.
<tag style="property: value"></tag>

clearfix: It clears floats to select or control margins and padding.
.clearfix::after {
    content: "";
    clear: both;
    display: block;
}

* Universal selector: Applies a common style to every element on a page when universal selector targets all elements.
* Type selector: styles all elements of a specific HTML tag because type selector matches by element type.
* ID selector: Targets a single unique element since ID selector matches an element with specific id.
* class selector: styles multiple elements with shared design as class selector selects elements using common class.
* Attribute selector: Enables precise styling because attribute selector matches elements based on attribute presence or value.
* Combinator selectors: Create advanced element targetting since combinator selectors define relationships like parent-child or sibling.
Pseudo Selectors: Allow dynamic styling as Pseudo selectors apply styles based on element states or conditions like hover or first-child.




1. Content - The actual thing inside
<p>Hello</p> Hello is the content

2. Padding - Space inside the element, between the content and the border.
button {
    padding: 10px;
}

without padding:
______________
|             |
| Click Me |
|_____________|

With padding:
_______________
|           |  |
|   Click Me|
|           |
|___________|__|

why use padding?
To make less cramped


3. Border - The line around the element
button {
    border: 1px solid black;
}
why? - to visually separate an element or create boundaries.

4. Margin - space outside the element
.card {
    margin: 20px;
}
why? 
to create space between the elements

2. Box-sizing - Normally CSS calculates width in a way where padding and border can add to the declared width.
for ex: 
.card {
    width: 300px;
    padding: 20px;
}
The rendered width can become larger than 300px under the default content-box model.
That's why developers commonly use:
* {
    box-sizing: border-box;
}

why - it makes sizing much easier to predict.

3. flexbox: flexbox is used to arrange elements in one direction. horizontally or vertically.

Suppose you have:
<div class="container">
    <div>One</div>
    <div>Two</div>
    <div>Three</div>
</div>

By default elements may appear vertically.
one 
two
three

now use: 
.container {
    display: flex;
}
now: One two three

why use flexbox?
    Because it makes it much easier to:
    * align elements.
    * distribute space.
    * create naviagation bars
    * create rows/columns
    * build reponsive layouts

4. flex-direction - controls the direction.

.container {
    display: flex;
    flex-direction: row; // gives A B C
    flex-direction: column;// gives A
                                    B
                                    C
}
5. justify-content - controls how items are distributed along the main axis.
Ex:
.container {
    display: flex;
    justify-content: center;
}
            A B C

flex-start
center
flex-end
space-between
space-around
space-evenly

ex: Navbar
Logo                    Home About Contact
you might use:
justify-content: space-between;

why?
To control horizontal/vertical distribution depending on your flex direction.

6. align-items: controls alignment on the cross axis.
Ex:
.container {
    display: flex;
    align-items: center;
}

This is extremely useful for vertically centering things.
for ex:
________________________________
|                       |       |
|       Logo Menu       |
|                       |
|_______________________|_______|

why? To align items nearly across the cross axis.

***
 if flex-direction: row
then generally:
justify-content -> horizontal
align-items -> vertical

if flex-direction: column;
the axes switch.

7.gap - it creates space between flex items
.container {
    display: flex;
    gap: 20px;
}

A   B   C
why? 
Instead of manually giving every child a margin.
this is cleaner.

8. flex-wrap
Imagine you have 10 product cards.
 on desktop:
 card card card card card
 card card card card card

 But on mobile they won't fit
 use: 
 .container {
    display: flex;
    flex-wrap: wrap;
 }
 Now items can move to another line.

 why? 
 to prevent content from being squeezed into one line.

 9. flex-grow- Suppose one item should take up additional available space.
 .item {
    flex-grow: 1;
 }

 why?
  to tell a flex item: 
  if there is extra space, you can expand.
  Useful for layouts such as flexible naviagation/search areas.

  10. flex-shrink: Controls whether an item can become smaller when there isn't enough space.
  .item {
    flex-shrink: 1;
  }
  why?
  To prevent overflow when the container become smaller.

  11. flex-basis: Defines the item's initial size along the main axis.
  .item {
    flex-basis: 200px;
  }

  Think: Start this item at approximately 200px before growing/shrinking is considered.

  12. CSS grid
  Flexbox is mainly one dimensional.
  Grid is designed for two dimensional layouts.
  Grid is perfect for this.
  .products {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
  }
  why? 
  Because you can control rows and columns together.

  13. grid-template-columns
  defines the columns
  grid-template-columns: 1fr 1 fr 1fr;

  means: 
  | 1 part | 1 part | 1 part | 
  So you get 3 equal columns

  fr means fraction of available space.