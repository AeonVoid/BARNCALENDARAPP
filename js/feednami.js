function formatDate(date){
  var year = date.getYear()
  if(year < 1900){
    year += 1900
  }
  var month = date.getMonth()+1
  var day = date.getDate()
  var hour = date.getHours()
  var minutes = date.getMinutes()
  return year + '/' + month + '/' + day + ' ' + hour + ':' +minutes
}

function loadEntries(url,id){
  var blogDiv = document.getElementById(id)
  feednami.load(url,function(res){
    blogDiv.removeChild(blogDiv.querySelector('.loading'))
    var entries = res.feed.entries
    var added = 0;
    for(var i = 0; i < entries.length && added < 5; i++){
      var entry = entries[i]
      if(entry.title.indexOf('PR:') == -1){
        added++
        var div = document.createElement('div')
        div.setAttribute('class','entry')
        div.innerHTML = '<p class="title"><a href="'+entry.link+'" target="_blank">'+entry.title+'</a></p><p class="date">'+
        formatDate(new Date(entry.pubdate_ms))+'</p>'
        blogDiv.appendChild(div)
      }
    }
  })
}

function loadEpisodes(url,id){
  var podDiv = document.getElementById(id)
  feednami.load(url,function(res){
    podDiv.removeChild(podDiv.querySelector('.loading'))
    var entries = res.feed.entries
    for(var i = 0; i < entries.length && i < 3; i++){
      var entry = entries[i]
      var div = document.createElement('div')
      div.setAttribute('class','entry')
      div.innerHTML =
        '<p class="title"><a href="'
          + entry.link
          + '" target="_blank">'
          + entry.title
          + '</a></p><p class="date">'
          + formatDate(new Date(entry.pubdate_ms))
          + '</p><p class="audio-container"><audio preload="none" controls><source src="'
          + entry.enclosures[0].url
          + '"></audio></p>'
      podDiv.appendChild(div)
    }
  })
}

window.onload = function(){
  loadEntries('https://bainbridgebarn.wildapricot.org/Kitchen-Arts-events/RSS','kitchen')
  loadEntries('https://bainbridgebarn.wildapricot.org/eta-upcoming/RSS','ETA')
  loadEntries('https://bainbridgebarn.wildapricot.org/Fiber-Arts/RSS','fiber arts')
  loadEntries('https://bainbridgebarn.wildapricot.org/jfm-upcoming/RSS','jewelry')
  loadEntries('https://bainbridgebarn.wildapricot.org/print-events/RSS','printmaking')
  loadEntries('https://bainbridgebarn.wildapricot.org/Upcoming-Metal-Machining-Events/RSS','metalm')
  loadEntries('https://bainbridgebarn.wildapricot.org/Book-Arts/RSS','book')
  loadEntries('https://bainbridgebarn.wildapricot.org/Upcoming-glass-events/RSS','glass')
  loadEntries('https://bainbridgebarn.wildapricot.org/Woodworking/RSS','woodworking')
  loadEntries('https://bainbridgebarn.wildapricot.org/Upcoming-writing-events/RSS','writing')
}
