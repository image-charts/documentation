/* Progressive enhancement - Chart Editor */
Array.from(document.querySelectorAll('a'))
  .filter(a => (a.href || '').includes('editor.image-charts.com/?') || (a.href || '').includes('editor.image-charts.com/chart?'))
  .forEach(a => {
    a.classList.add('editor_switcher');
    a.addEventListener("click", openEditor);
  });

function openEditor(e) {

  try{
    // remove sidebar
    var sidebar=document.querySelector('.md-sidebar--secondary');
    sidebar.parentElement.removeChild(sidebar);
    document.querySelector('.md-content').style.marginRight='auto';
  }catch(err){/* silent */}

  var a = e.currentTarget;
  e.preventDefault();
  var iframe = document.createElement('iframe');
  iframe.src = a.href;
  var dim = a.getBoundingClientRect();
  iframe.width = '100%';
  iframe.height = Math.max((dim.height * 2), 500) + 'px';
  iframe.border = '0px';
  iframe.style.border = '0px';
  a.replaceWith(iframe);
  return false;
}
