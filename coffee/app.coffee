handlePageSize = ->
  console.log( 'Resizing' )

  container = document.getElementById('container')

#  width = window.innerWidth
  height = window.innerHeight

#  container.style.minWidth = "#{width}px"
  container.style.minHeight = "#{height}px"

  container

window.onload = ->
  handlePageSize()

  window.onresize = ->
    handlePageSize()

  true