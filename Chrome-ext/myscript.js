document.addEventListener('DOMContentLoaded', function() {

    var keyword = "videos";
    var title = document.title;
  
  
    if(title.toLowerCase().includes(keyword)){
            redirectToGoogle();
    }
  
    var metas = document.getElementsByTagName('meta');
    for (let i = 0; i < metas.length; i++) {
      if(metas[i].getAttribute('name')!=null){
                  if (metas[i].getAttribute('name').toLowerCase() === 'description') {
                     if(metas[i].getAttribute('content').toLowerCase().includes(keyword)){
                             console.log('reached destination');
                             alert('From Extension -- reached destination');
                             redirectToGoogle();
                     }
                  }
          }
    }
  
  }, false);
  
  function redirectToGoogle(){
          chrome.tabs.update({url: "https://www.google.com"});
  }
  
  function documentRedirectToGoogle(){
          document.location.href='https://www.google.com';
  }