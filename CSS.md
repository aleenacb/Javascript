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