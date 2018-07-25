=====================================
header-container        id  header
header                  css #header .wrapper
header-logo             css #header a img
header-caption          css #header span.header-text
header-twitter-button   id  twitter-header-button
=====================================


@ Header |
-----------------------------------

header-container
    inside: screen 0px top
    width: 90 to 100% of screen/width
    height: ~ 103px

header
    inside: header-container 20px top
    centered horizontally inside: header-container
    width: < 1001 px

header-logo
    inside: header 0 px top left
    width: 68px
    height: 68px

header-caption
    near: header-logo 10 to 15 px right
    inside: header 0 px top


header-twitter-button
    width: 200 to 210 px
    height: ~32px
    inside: header-container 40 px top, 20 px right