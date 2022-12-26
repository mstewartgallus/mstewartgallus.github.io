---
title: Marking Up Poetry
date: 2022-11-25 13:26 0800
tags:
- 'Poetry'
- 'HTML'
- 'CSS'
- 'Accessibility'
---

Common poetry markup is inaccessible, unsemantic and doesn't display
well. I am not skilled in accessibility and I don't have good
solutions.  See [<cite>Try It</cite>](#tryit) if you want to try out a screen
reader yourself.

<b>Special thanks to the kind people who helped edit this post.</b>

## Accessibility
{:#accessibility}

{% capture markupb %}
```html
<p class="stanza">Roses are red<br>
Violets are blue,<br>
Sugar is sweet<br>
And so are you.</p>
```
{% endcapture %}

{% capture markupa %}
```html
<ol class="poem">
<li>
    <ol>
        <li>Roses are red</li>
        <li>Violets are blue,</li>
        <li>Sugar is sweet</li>
        <li>And so are you.</li>
    </ol>
</li>
</ol>
```
{% endcapture %}

{% capture markupa2 %}
```html
<ol class="poem">
<li>
    <ol role="presentation">
        <li role="presentation">Roses are red</li>
        <li role="presentation">Violets are blue,</li>
        <li role="presentation">Sugar is sweet</li>
        <li role="presentation">And so are you.</li>
    </ol>
</li>
</ol>
```
{% endcapture %}

{% capture markupa3 %}
```html
<ol class="poem" role="presentation">
<li>
    <ol role="presentation">
        <li role="presentation">Roses are red</li>
        <li role="presentation">Violets are blue,</li>
        <li role="presentation">Sugar is sweet</li>
        <li role="presentation">And so are you.</li>
    </ol>
</li>
</ol>
```
{% endcapture %}

{% capture markupn %}
```html
<figure>
<div role="img" aria-details="transcript">
<ol class="poem">
<li>
    <ol>
        <li>Roses are red</li>
        <li>Violets are blue,</li>
        <li>Sugar is sweet</li>
        <li>And so are you.</li>
    </ol>
</li>
</ol>
</div>
<figcaption id="transcript">
<p>Transcript for text to speech:</p>
<p>Roses are red ;
   Violets are blue,
   Sugar is sweet ;
   And so are you.</p>
</figcaption>
</figure>
```
{% endcapture %}

{% capture markupb2 %}
```html
<p>Roses are red<span class="sr-only">; </span><br>
Violets are blue,<br>
Sugar is sweet<span class="sr-only">; </span><br>
And so are you.</p>
```
{% endcapture %}

{% capture markupb3 %}
```css
.sr-only {
   display: inline-block ;
   user-select: none ;
   font-size: 1px ;
   line-height: 1px ;
   color: transparent ;
}
```
{% endcapture %}

The art of the spoken word is not accessible to the visually impaired.
Most markup navigates awkwardly, does not insert appropriate pauses
for breath, and mispronounces stress and sounds.  Consider
[<cite>Markup A</cite>](#markupa) and [<cite>Markup
B</cite>](#markupb).  In [<cite>Markup A</cite>](#markupa) a poem is
an ordered list of stanzas and stanzas are ordered lists of verses.
In [<cite>Markup B</cite>](#markupb) poems are sequences of stanzas,
stanzas are paragraphs and lines in a paragraph are separated by line
break elements.

<figure>
<figcaption>Markup A</figcaption>
{{ markupa | markdownify }}
</figure>
{:#markupa}


<figure>
<figcaption>Markup B</figcaption>
{{ markupb | markdownify }}
</figure>
{:#markupb}

[<cite>Markup A</cite>](#markupa) is hard to navigate as each line in
an ordered list must be manually tracked through.  As well <q>line
<var>m</var> of <var>n</var></q> is repeated for every line of
[<cite>Markup A</cite>](#markupa).  You can use the `presentation`
ARIA role as in [<cite>Markup A</cite>](#markupa2) and [<cite>Markup
A''</cite>](#markupa3) to ameliorate the problem.  By the spec using
the `presentation` role in a list item for a list already marked with
a `presentation` role doesn't do much, but such markup can reduce
cruft in Firefox's accessibility inspector.

<figure>
<figcaption>Markup A'</figcaption>
{{ markupa2 | markdownify }}
</figure>
{:#markupa2}

<figure>
<figcaption>Markup A''</figcaption>
{{ markupa3 | markdownify }}
</figure>
{:#markupa3}

As a <i>nuclear</i> solution you can markup the text for graphical
display using the `graphic` role as in [<cite>Markup
N</cite>](#markupn).  I advise use of the <s><code
class="language-plaintext
highlighter-rouge">aria-labelledby</code></s> `aria-details`
(2022-11-28) attribute instead of the `aria-label` attribute
here. `aria-label` has a tendency to work poorly with newlines in
text, is not usually translated by automated tools and doesn't let you
embed more markup as appropriate.

<figure>
<figcaption>Markup N</figcaption>
{{ markupn | markdownify }}
</figure>
{:#markupn}

In some setups [<cite>Markup B</cite>](#markupb) sounds yucky.  Ending
and starting words in separate lines like <i>red</i> and
<i>Violets</i> run together.  You might include extra punctuation
annotated with a screen-reader-only class as with [<cite>Markup
A'</cite>](#markupb2) and [<cite>Markup B' CSS</cite>](#markupb3) to work around this issue.
However, on Firefox this hack breaks up lines into separate areas to
track through.

<figure>
<figcaption markdown="span">Markup B' HTML</figcaption>
{{ markupb2 | markdownify }}
</figure>
{:#markupb2}

<figure>
<figcaption markdown="span">Markup B' CSS</figcaption>
{{ markupb3 | markdownify }}
</figure>
{:#markupb3}

No revisions of [<cite>Markup A</cite>](#markupa) or [<cite>Markup B</cite>](#markupb) ensure
proper pronunciation of stress and sounds.  Only American English is
likely to be pronounced correctly. To help, you can set the language
attribute for documents and poems as appropriate.  However, this is
not a complete solution.

As an anglophone Canadian author I set the language attribute for my
documents and poems to `en-CA`. However, this only helps with English
words and not with imports from other languages.  I don't know how to
help screen readers pronounce names of mythical figures.  You could
markup individual phrases like `<i lang="non">Sleipnir</i>` (old
Norse) and `<i lang="gem">Wotan</i>` (Germanic languages group) but
this particular markup doesn't help.

Semantically you might markup stress with emphasis with the `em`
element.  However, such markup is verbose and many screen readers
ignore elements like `em` because of the heavy unsemantic abuse of
such elements in the wider internet for presenting bold text.

Perhaps there might be some obscure Unicode diacritics for better
marking up the prosody but I have not explored this option.  I worry
that such glyphs might be pronounced in common screen readers as
something like <q>Unicode character 591</q>.


## Presentation
{:#presentation}

{% capture indentcss %}
```css
.line {
   text-indent: -4ch ;
   margin-left: 4ch ;
}
```
{% endcapture %}


{% capture alignlastcss %}
```css
.stanza {
   display: flex ;
   flex-direction: column ;
   align-items: start ;
}
.line {
   display: block ;
   text-align-last: end ;
}
```
{% endcapture %}

Laying out poetry on small formats is awkward.  In print the standard
layout for overlong lines is to align the first line ragged right and
all other lines ragged left.

You can approximate a poetry layout with a hanging indent layout
something like [<cite>Indent CSS</cite>](#indentcss).  However, a
hanging indent layout is not really correct.

<figure>
<figcaption markdown="span">Indent CSS</figcaption>
{{ indentcss | markdownify }}
</figure>
{:#indentcss}

You can approximate a poetry layout on the web by aligning every line
block to the left but aligning the last line of the text *within* the
line block to the right.  Something like [<cite>Align Last
CSS</cite>](#alignlastcss) almost works for a poetry layout.  However,
even this layout fails when you overflow multiple lines.

<figure>
<figcaption markdown="span">Align Last CSS</figcaption>
{{ alignlastcss | markdownify }}
</figure>
{:#alignlastcss}

{% capture example %}
<style>
#scope p {
   text-indent: 0 ;
   padding: 0 ;
}
#scope p > span {
   display: inline-block ;
   text-align-last: end ;
   pause: medium medium ;
}
</style>
<div id="scope" lang="en-CA">
<p>
  <span>Roses are red</span><br>
  <span>Violets are blue</span><br>
  <span>Sugar is sweet</span><br>
  <span>aaaaaaaaaaaaaaaa.</span>
</p>
</div>
{% endcapture %}

{% capture examplecode %}
```html
<style>
#scope p {
   text-indent: 0 ;
   padding: 0 ;
}
#scope p > span {
   display: inline-block ;
   text-align-last: end ;
}
</style>
<div id="scope" lang="en-CA">
<p>
  <span>Roses are red</span><br>
  <span>Violets are blue</span><br>
  <span>Sugar is sweet</span><br>
  <span>aaaaaaaaaaaaaaaa.</span>
</p>
</div>
```
{% endcapture %}


[<cite>Example</cite>](#example) and [<cite>Example Code</cite>](#examplecode) are similar to
the current compromise I use on this site.

<figure>
<figcaption>Example</figcaption>
{{ example }}
</figure>
{:#example}

<figure>
<figcaption>Example Code</figcaption>
{{ examplecode | markdownify }}
</figure>
{:#examplecode}


## Conclusion
{:#conclusion}

You should use the `audio` element to markup poetry.

## Try It
{:#tryit}

Personally I found Android TalkBack to be the easiest screen reader to
get started with. <a href="https://www.a11yproject.com">The helpful
<cite>A11y Project</cite> blog</a> has a number of guides on getting
started with screen readers but they might be a little old.

- <a href="https://www.a11yproject.com/posts/getting-started-with-orca"><cite>Getting Started with Orca screen reader on Gnome desktop environment on Ubuntu 20.04 LTS</cite></a>
- <a href="https://www.a11yproject.com/posts/getting-started-with-voiceover-ios"><cite>Getting Started with VoiceOver on iOS</cite></a>
- <a href="https://www.a11yproject.com/posts/getting-started-with-nvda"><cite>Getting Started with NVDA</cite></a>
- <a href="https://www.a11yproject.com/posts/getting-started-with-voiceover"><cite>Getting Started with MacOS VoiceOver</cite></a>

## And One More Thing
{:#onemorething}

As of this blog post, the [<cite>CSS Speech
Module</cite>](https://www.w3.org/TR/css-speech-1/) has never really
gone anywhere.  Perhaps in the future the `voice-stress`,
`voice-duration` (for long syllables), `voice-pitch` (for pitch
accent) and `pause` properties would solve these sort of accessibility
problems.

*[HTML]: HyperText Markup Language

*[CSS]: Cascading Style Sheets

*[ARIA]: Accessible Rich Internet Applications


