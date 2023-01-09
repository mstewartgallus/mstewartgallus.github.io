<xsl:stylesheet
    version="1.0"
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    xmlns:tei="http://www.tei-c.org/ns/1.0"
    exclude-result-prefixes="tei"
    >
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>

  <xsl:template match="/">
    <html xmlns="http://www.w3.org/1999/xhtml">
      <head>
        <meta charset="utf-8"/>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <title><xsl:value-of select="//tei:body/tei:head"/></title>
        <meta name="color-scheme" content="light dark"/>
        <meta name="theme-color" content="#6000A0"/>
        <link rel="stylesheet" href="/assets/main.css"/>
        <link rel="icon" href="/assets/favicon.svg"/>
      </head>
      <body>
        <xsl:apply-templates />
      </body>
    </html>
  </xsl:template>

  <xsl:template match="tei:body">
    <main>
      <header>
        <hgroup>
          <h1><xsl:value-of select="tei:head"/></h1>
        </hgroup>
      </header>
      <ol role="presentation">
        <xsl:apply-templates select="tei:lg" />
      </ol>
    </main>
  </xsl:template>

  <xsl:template match="tei:lg">
    <li role="presentation">
      <p class="stanza">
        <xsl:apply-templates select="tei:l" />
      </p>
    </li>
  </xsl:template>

  <xsl:template match="tei:l">
    <span class="line" role="presentation">
      <xsl:apply-templates />
    </span>
    <xsl:choose>
      <xsl:when test="position()!=last()">
            <br />
      </xsl:when>
    </xsl:choose>
  </xsl:template>

  <xsl:template match="tei:caesura">&#x2009;&#x2014;&#x2009;</xsl:template>
</xsl:stylesheet>
