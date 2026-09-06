// The app's five tabs, in the app's words and order, as a top bar. Every page
// includes this so the menu is written once. APP is where the app lives on the
// web; change it here when app.umimarket.app is live.
const APP = 'https://skaistegulbinaite.github.io/marketplace-preview';
const items = [
  ['Pradžia', APP + '/'],
  ['Paieška', APP + '/search'],
  ['Parduoti', APP + '/sell', 'plus'],
  ['Žinutės', APP + '/inbox'],
  ['Profilis', APP + '/profile'],
];
const here = location.pathname;
const bar = document.createElement('header');
bar.className = 'bar';
bar.innerHTML = '<div class="in"><a class="logo" href="/"><img src="/umi-logo.png" alt="UMI"></a><nav class="menu">' +
  items.map(([t, h, c]) => `<a href="${h}" class="${c || ''}">${t}</a>`).join('') +
  `<a href="/pro" class="${here.startsWith('/pro') ? 'on' : ''}">PRO</a>` +
  '</nav></div>';
document.body.prepend(bar);
