---
---
<xsl:stylesheet
    version="1.0"
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    xmlns:atom="http://www.w3.org/2005/Atom"
    exclude-result-prefixes="atom"
    >
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>

  <xsl:template match="/">
    <html xmlns="http://www.w3.org/1999/xhtml">
      <head>
        <meta charset="utf-8"/>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <title><xsl:value-of select="atom:feed/atom:title"/></title>
        <meta name="color-scheme" content="light dark"/>
        <meta name="theme-color" content="#6000A0"/>
        <link rel="stylesheet" href="{% link assets/main.scss %}"/>
        <link rel="icon" href="{% link assets/favicon.svg %}"/>
      </head>
      <body>
        <xsl:apply-templates select="atom:feed" />
      </body>
    </html>
  </xsl:template>

  <xsl:template match="atom:feed">
    <main>
      <header>
        <hgroup>
          <h1>
            <a>
              <xsl:attribute name="href">
                <xsl:value-of select="atom:link[@rel='alternate']/@href"/>
              </xsl:attribute>
              Posts
            </a>
          </h1>
        </hgroup>
      </header>
      <ol reversed="reversed">
        <xsl:apply-templates select="atom:entry" />
      </ol>
    </main>
  </xsl:template>

  <xsl:template match="atom:entry">
    <li>
      <a rel="bookmark">
        <xsl:attribute name="href">
          <xsl:value-of select="atom:id"/>
        </xsl:attribute>

        <xsl:value-of select="atom:title"/>
      </a>
    </li>
  </xsl:template>
</xsl:stylesheet>
