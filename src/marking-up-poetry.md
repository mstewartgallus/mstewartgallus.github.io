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

{% capture markupa %}
```html
<p class="stanza">Roses are red<br>
Violets are blue,<br>
Sugar is sweet<br>
And so are you.</p>
```
{% endcapture %}

{% capture markupb %}
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

Common poetry <abbr title="HyperText Markup Language">HTML</abbr>
markup is inaccessible, unsemantic and doesn't display well.  I am not
skilled in accessiblity and I don't have good solutions.

## [Accessibility](#accessiblity)
{:#accessiblity}


{% capture markupb2 %}
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

{% capture markupb3 %}
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

{% capture markupa2 %}
```html
<p>Roses are red<span class="sr-only">; </span><br>
Violets are blue,<br>
Sugar is sweet<span class="sr-only">; </span><br>
And so are you.</p>
```
{% endcapture %}

{% capture markupa3 %}
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
and sounds. Consider [markup A](#markupa) and [markup B](#markupb).

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


[Markup B](#markupb) is hard to navigate as each line in an ordered
list must be manually tracked through.  As well <q>line <var>m</var>
of <var>n</var></q> is repeated for every line of [Markup
B](#markupb).  Use of the `presentation` <abbr title="Accessible Rich Internet Applications">ARIA</abbr>
role can ameliorate the problem.  Less or more use of the
`presentation` role as in [markup B'](#markupb2) and [markup
B''](#markupb3) works well enough.

<figure>
{{- markupb2 | markdownify -}}
<figcaption><a href="#markupb2">Markup B'</a></figcaption>
</figure>
{:#markupb2}

<figure>
{{- markupb3 | markdownify -}}
<figcaption><a href="#markupb3">Markup B''</a></figcaption>
</figure>
{:#markupb3}

A <i>nuclear</i> solution is to markup the text for graphical display
only using the `graphic` role as in [Markup N](#markupn).  I would
advise use of the `aria-labelledby` attribute instead of the
`aria-label` attribute here. `aria-labelledby` lets you use extra
markup as appropriate.

<figure>
{{- markupn | markdownify -}}
<figcaption><a href="#markupn">Markup N</a></figcaption>
</figure>
{:#markupn}

In some setups [Markup A](#markupa) *sounds* yucky.  Ending and
starting words in separate lines like <i>red</i> and <i>Violets</i>
run together.  One workaround is to include extra punctuation
annotated with a screen reader only class as with [Markup
A'](#markupa2) and [Markup A' CSS](#markupa3).  However, on Firefox
this hack breaks up lines into separate areas to track through.

<figure>
{{- markupa2 | markdownify -}}
<figcaption><a href="#markupa2">Markup A' <abbr>HTML</abbr></a></figcaption>
</figure>
{:#markupa2}

<figure>
{{- markupa3 | markdownify -}}
<figcaption><a href="#markupa3">Markup A' <abbr title="Cascading Style Sheets">CSS</abbr></a></figcaption>
</figure>
{:#markupa3}

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
readers completel ignore elements like `em` anyway because of heavy
unsemantic abuse of such elements in the wider internet for presenting
bold text.

## [Presentation](#presentation)
{:#presentation}

{% capture linecss %}
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
standard layout for overlong lines is to indent to the right.

For a hanging indent effect on the web every line block should should
be aligned to the left but the text *within* the line block should be
aligned to the right.  Something like [Line
<abbr>CSS</abbr>](#linecss) is often the most appropriate
<abbr>CSS</abbr> for a hanging indent. The negative `text-indent` hack
is not really necessary.

<figure>
{{- linecss | markdownify -}}
<figcaption><a href="#linecss">Line <abbr>CSS</abbr></a></figcaption>
</figure>
{:#linecss}

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

Probably the most appropriate <abbr>HTML</abbr> element for poetry is
the `audio` element.


## And one More Thing

As of this blog post the [<cite><abbr>CSS</abbr> Speech
Module</cite>](https://www.w3.org/TR/css-speech-1/) has never really
gone anywhere.  Perhaps in the future the `voice-stress`,
`voice-duration` (for long syllables), `voice-pitch` (for pitch
accent) and `pause` properties would solve these sort of accessiblity
problemss.
