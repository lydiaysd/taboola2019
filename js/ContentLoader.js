var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    const row = document.getElementById('row');

    const response = JSON.parse(this.responseText);
    response.list.forEach(item => {
      const widgetNode = document.createElement('div');
      widgetNode.classList.add('widget');

      const linkNode = document.createElement('a');
      linkNode.href = item.url;
      widgetNode.appendChild(linkNode);

      const imageNode = document.createElement('img');
      imageNode.src = item.thumbnail[0].url;
      imageNode.width = item.thumbnail[0].width;
      imageNode.height = item.thumbnail[0].height;
      imageNode.alt = item.name;
      linkNode.appendChild(imageNode);

      const itemTitleNode = document.createElement('h3');
      itemTitleNode.textContent = item.name;
      linkNode.appendChild(itemTitleNode);

      const brandingNode = document.createElement('p');
      brandingNode.classList.add('branding');
      brandingNode.textContent = item.branding;
      linkNode.appendChild(brandingNode);

      const loadingNode = document.getElementById('loading');
      loadingNode.style.display = 'none';
      row.appendChild(widgetNode);
    });
  }
};
xhttp.open("GET", "https://api.taboola.com/1.2/json/apitestaccount/recommendations.get?app.type=web&app.apikey=7be65fc78e52c11727793f68b06d782cff9ede3c&source.id=%2Fdigiday-publishing-summit%2F&source.url=https%3A%2F%2Fblog.taboola.com%2Fdigiday-publishing-summit%2F&source.type=text&placement.organic-type=mix&placement.visible=true&placement.available=true&placement.rec-count=6&placement.name=Below%20Article%20Thumbnails&placement.thumbnail.width=640&placement.thumbnail.height=480&user.session=init", true);
xhttp.send();