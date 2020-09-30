export const animationKeyframes = `
  @keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
  }

  /* Firefox < 16 */
  @-moz-keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
  }

  /* Safari, Chrome and Opera > 12.1 */
  @-webkit-keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
  }

  /* Internet Explorer */
  @-ms-keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
  }

  /* Opera < 12.1 */
  @-o-keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
  }

  @keyframes fadeout {
    from { opacity: 1; }
    to   { opacity: 0; }
  }

  /* Firefox < 16 */
  @-moz-keyframes fadeout {
    from { opacity: 1; }
    to   { opacity: 0; }
  }

  /* Safari, Chrome and Opera > 12.1 */
  @-webkit-keyframes fadeout {
    from { opacity: 1; }
    to   { opacity: 0; }
  }

  /* Internet Explorer */
  @-ms-keyframes fadeout {
    from { opacity: 1; }
    to   { opacity: 0; }
  }

  /* Opera < 12.1 */
  @-o-keyframes fadeout {
    from { opacity: 1; }
    to   { opacity: 0; }
  }
`
