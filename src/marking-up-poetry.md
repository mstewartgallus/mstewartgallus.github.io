---
title: Marking Up Poetry
date: 2022-11-24 17:13 0700
tags:
- 'Poetry'
- 'HTML'
- 'CSS'
- 'Accessiblity'
sitemap: false
permalink: /secret-preview/
---

Common poetry <abbr title="HyperText Markup Language">HTML</abbr>
markup is inaccessible, unsemantic and doesn't display well.  I am not
skilled in accessiblity and I don't have good solutions.  See [Try
It](#tryit) if you want to try out a screen reader yourself.

## [Accessibility](#accessiblity)
{:#accessiblity}


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
<ol class="poem" role="graphic" aria-labelledby="transcript">
<li>
    <ol>
        <li>Roses are red</li>
        <li>Violets are blue,</li>
        <li>Sugar is sweet</li>
        <li>And so are you.</li>
    </ol>
</li>
</ol>
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

Under common screen readers most poetry markup is awkward to navigate,
does not insert appropriate pauses for breath and mispronounces stress
and sounds.  Consider [markup A](#markupa) and [markup B](#markupb).
In [markup A](#markupa) a poem is an ordered list of stanzas and
stanzas are ordered lists of verses.  In [markup B](#markupb) poems
are sequences of stanzas, stanzas are paragraphs and lines in a
paragraph are separated with line break elements.

<figure>
{{ markupa | markdownify }}
<figcaption><a href="#markupa">Markup A</a></figcaption>
</figure>
{:#markupa}


<figure>
{{ markupb | markdownify }}
<figcaption><a href="#markupb">Markup B</a></figcaption>
</figure>
{:#markupb}

[Markup A](#markupa) is hard to navigate as each line in an ordered
list must be manually tracked through.  As well <q>line <var>m</var>
of <var>n</var></q> is repeated for every line of [Markup
A](#markupa).  Use of the `presentation` <abbr title="Accessible Rich
Internet Applications">ARIA</abbr> role can ameliorate the problem.
Less or more use of the `presentation` role as in [markup
A](#markupa2) and [markup A''](#markupa3) works well enough.  By the
spec use of the `presentation` role in a list item for a list already
marked with a `presentation` role shouldn't really do anything but it
can reduce cruft in the accessibility inspector in Firefox.

<figure>
{{- markupa2 | markdownify -}}
<figcaption><a href="#markupa2">Markup A'</a></figcaption>
</figure>
{:#markupa2}

<figure>
{{- markupa3 | markdownify -}}
<figcaption><a href="#markupa3">Markup A''</a></figcaption>
</figure>
{:#markupa3}

A <i>nuclear</i> solution is to markup the text for graphical display
only using the `graphic` role as in [Markup N](#markupn).  I would
advise use of the `aria-labelledby` attribute instead of the
`aria-label` attribute here. `aria-label` has a tendency to work
poorly with newlines in text, is not usually translated by automated
tools and doesn't let you embed more markup as appropriate.

<figure>
{{- markupn | markdownify -}}
<figcaption><a href="#markupn">Markup N</a></figcaption>
</figure>
{:#markupn}

In some setups [Markup B](#markupb) *sounds* yucky.  Ending and
starting words in separate lines like <i>red</i> and <i>Violets</i>
run together.  One workaround is to include extra punctuation
annotated with a screen-reader-only class as with [Markup
A'](#markupb2) and [Markup B' CSS](#markupb3).  However, on Firefox
this hack breaks up lines into separate areas to track through.

<figure>
{{- markupb2 | markdownify -}}
<figcaption><a href="#markupb2">Markup B' <abbr>HTML</abbr></a></figcaption>
</figure>
{:#markupb2}

<figure>
{{- markupb3 | markdownify -}}
<figcaption><a href="#markupb3">Markup B' <abbr title="Cascading Style Sheets">CSS</abbr></a></figcaption>
</figure>
{:#markupb3}

No revisions of [Markup A](#markupa) or [Markup B](#markupb) ensure
proper pronounciation of stress and sounds.  Only American English is
likely to be pronounced correctly. Setting the language attribute for
documents and poems as appropriate can help but is not a complete
solution.

As an anglophone Canadian author I would set the language attribute
for my documents and poems to `en-CA`. However, this use of the `lang`
attribute only helps with English words and not with imports from
other languages.  I am not sure how to help screen readers pronounce
names of mythical figures.  Markup of individual phrases like `<i
lang="non">Sleipnir</i>` (old Norse) and `<i lang="gem">Wotan</i>`
(Germanic languages group) doesn't help.

Semantically the `em` element should be appropriate for marking up
stress emphasis.  However, such markup is verbose and many screen
readers ignore elements like `em` because of the heavy unsemantic
abuse of such elements in the wider internet for presenting bold text.

## [Presentation](#presentation)
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

Laying out poetry on squashed formats is awkward.  In print the
standard layout for overlong lines is to align the first line ragged
right and all other lines ragged right.

The typical advice to approximate a poetry layout is a hanging indent
something like [Indent <abbr>CSS</abbr>](#indentcss).  However, a
hanging indent layout is not really correct.

<figure> {{- indentcss | markdownify -}} <figcaption><a
href="#indentcss">Indent <abbr>CSS</abbr></a></figcaption> </figure>

You can approximate a poetry layout on the web by aligning every line
block to the left but aligning the last line of the text *within* the
line block to the right.  Something like [Align Last
<abbr>CSS</abbr>](#alignlastcss) almost works for a poetry layout.
However, even this layout fails when you overflow multiple lines.

<figure>
{{- alignlastcss | markdownify -}}
<figcaption><a href="#alignlastcss">Align Last <abbr>CSS</abbr></a></figcaption>
</figure>
{:#alignlastcss}

## Conclusion

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


Here is an [example](#example) similar to the current compromise I use
on this site along with [code](#examplecode).

<figure>
{{ example }}
<figcaption><a href="#example">Final Example</a></figcaption>
</figure>
{:#example}

<figure>
{{ examplecode | markdownify }}
<figcaption><a href="#examplecode">Final Example Code</a></figcaption>
</figure>
{:#examplecode}

In summary the most appropriate markup for poetry is <i>the `audio`
element.</i>

## [Try It](#tryit)
{:#tryit}

Personally I found Android TalkBack to be the easiest screen reader to
get started with. <a href="https://a11yproject.com">The helpful
<cite>A11y Project</cite> blog</a> has a number of guides on getting
started with screen readeres but they might be a little old.

- <a href="https://a11project.com/posts/getting-started-with-orca"><cite>Getting Started with Orca screen reader on Gnome desktop environment on Ubuntu 20.04 LTS</cite></a>
- <a href="https://a11project.com/posts/getting-started-with-voiceover-ios"><cite>Getting Started with VoiceOver on iOS</cite></a>
- <a href="https://a11project.com/posts/getting-started-with-nvda"><cite>Getting Started with NVDA</cite></a>
- <a href="https://a11project.com/posts/getting-started-with-voiceover"><cite>Getting Started with MacOS VoiceOver</cite></a>

## [And One More Thing](#onemorething)
{:#onemorething}

As of this blog post the [<cite><abbr>CSS</abbr> Speech
Module</cite>](https://www.w3.org/TR/css-speech-1/) has never really
gone anywhere.  Perhaps in the future the `voice-stress`,
`voice-duration` (for long syllables), `voice-pitch` (for pitch
accent) and `pause` properties would solve these sort of accessiblity
problemss.
