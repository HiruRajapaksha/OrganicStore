import './style.css';

const appDiv = document.querySelector<HTMLDivElement>('#app')!;

const navbar = `
  <nav id="navbar" style="
    display: flex; 
    align-items: center; 
    padding: 1rem 2rem; 
    gap: 2rem; 
    background-color: #e6f2d9; 
    color: #2e7d32; 
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    flex-wrap: wrap;
    box-shadow: 0 2px 8px rgba(46, 125, 50, 0.15);
    transition: background-color 0.4s ease, color 0.4s ease;
    position: relative;
    z-index: 10;
  ">
    <div style="font-weight: 700; font-size: 1.7rem; cursor: pointer; user-select: none; letter-spacing: 1px;">
      GreenVine
    </div>

    <div id="nav-links" style="
      display: flex; 
      gap: 1.5rem;
      margin-left: auto;
      flex-wrap: nowrap;
      transition: all 0.3s ease;
    ">
      <a href="#" style="
        color: #2e7d32; 
        text-decoration: none; 
        font-weight: 600;
        font-size: 1rem;
        padding: 0.3rem 0.5rem;
        border-radius: 6px;
        transition: background-color 0.3s ease, color 0.3s ease;
        user-select: none;
      " 
        onmouseover="this.style.backgroundColor='#c5d6b7'; this.style.color='#1b4d1b';" 
        onmouseout="this.style.backgroundColor='transparent'; this.style.color='#2e7d32';"
      >Home</a>
      <a href="#" style="
        color: #2e7d32; 
        text-decoration: none; 
        font-weight: 600;
        font-size: 1rem;
        padding: 0.3rem 0.5rem;
        border-radius: 6px;
        transition: background-color 0.3s ease, color 0.3s ease;
        user-select: none;
      " 
        onmouseover="this.style.backgroundColor='#c5d6b7'; this.style.color='#1b4d1b';" 
        onmouseout="this.style.backgroundColor='transparent'; this.style.color='#2e7d32';"
      >Products</a>
      <a href="#" style="
        color: #2e7d32; 
        text-decoration: none; 
        font-weight: 600;
        font-size: 1rem;
        padding: 0.3rem 0.5rem;
        border-radius: 6px;
        transition: background-color 0.3s ease, color 0.3s ease;
        user-select: none;
      " 
        onmouseover="this.style.backgroundColor='#c5d6b7'; this.style.color='#1b4d1b';" 
        onmouseout="this.style.backgroundColor='transparent'; this.style.color='#2e7d32';"
      >Subscription</a>
      <a href="#" style="
        color: #2e7d32; 
        text-decoration: none; 
        font-weight: 600;
        font-size: 1rem;
        padding: 0.3rem 0.5rem;
        border-radius: 6px;
        transition: background-color 0.3s ease, color 0.3s ease;
        user-select: none;
      " 
        onmouseover="this.style.backgroundColor='#c5d6b7'; this.style.color='#1b4d1b';" 
        onmouseout="this.style.backgroundColor='transparent'; this.style.color='#2e7d32';"
      >About Us</a>
      <a href="#" style="
        color: #2e7d32; 
        text-decoration: none; 
        font-weight: 600;
        font-size: 1rem;
        padding: 0.3rem 0.5rem;
        border-radius: 6px;
        transition: background-color 0.3s ease, color 0.3s ease;
        user-select: none;
      " 
        onmouseover="this.style.backgroundColor='#c5d6b7'; this.style.color='#1b4d1b';" 
        onmouseout="this.style.backgroundColor='transparent'; this.style.color='#2e7d32';"
      >Contact</a>
    </div>

    <button id="menu-toggle" aria-label="Toggle Menu" style="
      display: none; 
      font-size: 1.8rem; 
      background: none; 
      border: none; 
      cursor: pointer; 
      color: #2e7d32;
      margin-left: 1rem;
      user-select: none;
      transition: color 0.4s ease;
    ">☰</button>
    
    <button id="theme-toggle" aria-label="Toggle Light/Dark Mode" title="Toggle Light/Dark Mode" style="
      font-size: 1.5rem; 
      cursor: pointer; 
      background: none; 
      border: none; 
      color: #2e7d32; 
      margin-left: 1rem;
      user-select: none;
      transition: color 0.4s ease;
    ">☀️</button>
  </nav>
`;

appDiv.innerHTML = navbar;

const themeToggleBtn = document.getElementById('theme-toggle')!;
const navbarEl = document.getElementById('navbar')!;
const linksContainer = document.getElementById('nav-links')!;
const menuToggleBtn = document.getElementById('menu-toggle')!;
const links = linksContainer.querySelectorAll('a');

let isLightTheme = true;
let menuVisible = false;

// Media query for mobile (<= 768px)
function checkScreen() {
  if (window.innerWidth <= 768) {
    menuToggleBtn.style.display = 'block';
    if (!menuVisible) {
      linksContainer.style.display = 'none';
      linksContainer.style.flexDirection = 'column';
      linksContainer.style.width = '100%';
      linksContainer.style.marginTop = '0.5rem';
      linksContainer.style.marginLeft = '0';  // Reset margin-left on mobile
    }
  } else {
    menuToggleBtn.style.display = 'none';
    linksContainer.style.display = 'flex';
    linksContainer.style.flexDirection = 'row';
    linksContainer.style.width = 'auto';
    linksContainer.style.marginTop = '0';
    linksContainer.style.marginLeft = 'auto'; // Keep pushed right on desktop
  }
}

menuToggleBtn.addEventListener('mouseenter', () => {
  menuToggleBtn.style.color = isLightTheme ? '#1b4d1b' : '#d4af37';
});
menuToggleBtn.addEventListener('mouseleave', () => {
  menuToggleBtn.style.color = isLightTheme ? '#2e7d32' : '#d4af37';
});

themeToggleBtn.addEventListener('mouseenter', () => {
  themeToggleBtn.style.color = isLightTheme ? '#1b4d1b' : '#d4af37';
});
themeToggleBtn.addEventListener('mouseleave', () => {
  themeToggleBtn.style.color = isLightTheme ? '#2e7d32' : '#d4af37';
});

menuToggleBtn.addEventListener('click', () => {
  menuVisible = !menuVisible;
  if (menuVisible) {
    linksContainer.style.display = 'flex';
  } else {
    linksContainer.style.display = 'none';
  }
});

function applyLightTheme() {
  navbarEl.style.backgroundColor = '#e6f2d9';   // light green background
  navbarEl.style.color = '#2e7d32';             // dark green text
  themeToggleBtn.textContent = '☀️';
  themeToggleBtn.style.color = '#2e7d32';
  menuToggleBtn.style.color = '#2e7d32';
  links.forEach(link => {
    (link as HTMLElement).style.color = '#2e7d32';
  });
  document.body.style.backgroundColor = 'white';
  document.body.style.color = '#2e7d32';
}

function applyDarkTheme() {
  navbarEl.style.backgroundColor = '#2e7d32';   // dark green background
  navbarEl.style.color = '#d4af37';             // golden text
  themeToggleBtn.textContent = '🌙';
  themeToggleBtn.style.color = '#d4af37';
  menuToggleBtn.style.color = '#d4af37';
  links.forEach(link => {
    (link as HTMLElement).style.color = '#d4af37';
  });
  document.body.style.backgroundColor = '#121212';
  document.body.style.color = '#d4af37';
}

themeToggleBtn.addEventListener('click', () => {
  if (isLightTheme) {
    applyDarkTheme();
  } else {
    applyLightTheme();
  }
  isLightTheme = !isLightTheme;
});

window.addEventListener('resize', checkScreen);

// Initial setups
applyLightTheme();
checkScreen();
