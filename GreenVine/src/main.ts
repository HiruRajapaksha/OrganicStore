import './style.css';
const appDiv = document.querySelector<HTMLDivElement>('#app')!;

const navbar = `
<nav
  id="navbar"
  class="flex flex-wrap items-center p-4 gap-8 bg-white text-gray-700 font-sans shadow-md dark:bg-black dark:text-yellow-400 transition-colors duration-300 relative z-10"
>
  <div
    class="flex items-center cursor-pointer select-none font-bold text-2xl tracking-wide flex-shrink-0 space-x-2"
  >
    <span class="text-green-600 dark:text-green-400 text-3xl select-none">🌱</span>
    <span>
      <span class="text-green-700 dark:text-green-400">Green</span
      ><span class="text-yellow-500 dark:text-yellow-400">Vine Market</span>
    </span>
  </div>

  <div
    id="nav-links"
    class="hidden md:flex gap-6 ml-auto flex-nowrap"
  >
    <a
      href="#"
      class="text-gray-600 dark:text-gray-300 font-semibold text-base px-2 py-1 rounded-md transition-colors duration-300 hover:bg-gray-200 hover:text-green-700 dark:hover:bg-gray-700 dark:hover:text-yellow-400 select-none"
      >Home</a
    >
    <a
      href="#"
      class="text-gray-600 dark:text-gray-300 font-semibold text-base px-2 py-1 rounded-md transition-colors duration-300 hover:bg-gray-200 hover:text-green-700 dark:hover:bg-gray-700 dark:hover:text-yellow-400 select-none"
      >Products</a
    >
    <a
      href="#"
      class="text-gray-600 dark:text-gray-300 font-semibold text-base px-2 py-1 rounded-md transition-colors duration-300 hover:bg-gray-200 hover:text-green-700 dark:hover:bg-gray-700 dark:hover:text-yellow-400 select-none"
      >Subscription</a
    >
    <a
      href="#"
      class="text-gray-600 dark:text-gray-300 font-semibold text-base px-2 py-1 rounded-md transition-colors duration-300 hover:bg-gray-200 hover:text-green-700 dark:hover:bg-gray-700 dark:hover:text-yellow-400 select-none"
      >About Us</a
    >
    <a
      href="#"
      class="text-gray-600 dark:text-gray-300 font-semibold text-base px-2 py-1 rounded-md transition-colors duration-300 hover:bg-gray-200 hover:text-green-700 dark:hover:bg-gray-700 dark:hover:text-yellow-400 select-none"
      >Contact</a
    >
  </div>

  <button
    id="menu-toggle"
    aria-label="Toggle Menu"
    class="block md:hidden text-2xl bg-transparent border-none cursor-pointer text-gray-700 dark:text-yellow-400 ml-4 select-none transition-colors duration-300"
  >
    ☰
  </button>

  <button
    id="theme-toggle"
    aria-label="Toggle Light/Dark Mode"
    title="Toggle Light/Dark Mode"
    class="text-xl cursor-pointer bg-transparent border-none text-gray-700 dark:text-yellow-400 ml-4 select-none transition-colors duration-300"
  >
    ☀️
  </button>
</nav>
`;


export const footer = `
<footer class="w-full bg-gray-50 dark:bg-gray-900 text-gray-700 dark:text-gray-300 transition-colors duration-500 mt-20 px-8 py-16 font-sans shadow-inner">
  <div class="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-16">
    <!-- Branding & Description -->
    <div class="flex-1 min-w-[220px]">
      <div class="flex items-center space-x-4 text-green-600 dark:text-green-400 text-4xl font-extrabold select-none mb-6">
        <span>🌱</span>
        <span>GreenVine Market</span>
      </div>
      <p class="leading-relaxed text-base md:text-lg max-w-sm">
        Your trusted source for fresh, organic produce and eco-friendly groceries in Bath. Supporting local farmers and sustainable practices since 2020.
      </p>
    </div>

    <!-- Contact Info -->
    <div class="flex-1 min-w-[220px]">
      <h3 class="text-2xl font-semibold mb-6 border-b border-green-600 dark:border-green-400 pb-2">
        Contact Us
      </h3>
      <div class="space-y-5 text-base md:text-lg max-w-xs">
        <div class="flex items-center space-x-4 hover:text-green-600 dark:hover:text-green-400 transition-colors cursor-pointer">
          <span class="text-xl">📧</span>
          <a href="mailto:info@greenvinemarket.com" class="hover:underline truncate">info@greenvinemarket.com</a>
        </div>
        <div class="flex items-center space-x-4 hover:text-green-600 dark:hover:text-green-400 transition-colors cursor-default">
          <span class="text-xl">📱</span>
          <span>+44 123 456 7890</span>
        </div>
        <div class="flex items-center space-x-4 hover:text-green-600 dark:hover:text-green-400 transition-colors cursor-pointer">
          <span class="text-xl">🌐</span>
          <a href="https://www.greenvinemarket.com" target="_blank" rel="noopener noreferrer" class="hover:underline truncate">
            www.greenvinemarket.com
          </a>
        </div>
      </div>
    </div>

    <!-- Visit Info -->
    <div class="flex-1 min-w-[220px]">
      <h3 class="text-2xl font-semibold mb-6 border-b border-green-600 dark:border-green-400 pb-2">
        Visit Us
      </h3>
      <address class="not-italic text-base md:text-lg space-y-2 max-w-xs">
        <div>123 Green Street</div>
        <div>Bath, BA1 2AB</div>
        <div>United Kingdom</div>
        <div class="mt-4 font-semibold">Hours:</div>
        <div>Mon-Sat: 8AM-8PM</div>
        <div>Sunday: 10AM-6PM</div>
      </address>
    </div>
  </div>

  <div class="mt-16 border-t border-green-300 dark:border-green-700 pt-6 text-center text-sm md:text-base text-gray-600 dark:text-gray-400 select-none tracking-wide">
    © 2024 GreenVine Market. All rights reserved. | Made with <span class="text-green-500">💚</span> for a sustainable future
  </div>
</footer>
`;



appDiv.innerHTML = navbar ;

// Create a container div and append footer HTML string to it
const footerContainer = document.createElement('div');
footerContainer.innerHTML = footer;
document.body.appendChild(footerContainer);


const themeToggleBtn = document.getElementById('theme-toggle')!;
const menuToggleBtn = document.getElementById('menu-toggle')!;
const linksContainer = document.getElementById('nav-links')!;
const navbarEl = document.getElementById('navbar')!;
let isLightTheme = !document.documentElement.classList.contains('dark');
let menuVisible = false;

function toggleMenu() {
  menuVisible = !menuVisible;
  if (menuVisible) {
    linksContainer.classList.remove('hidden');
    linksContainer.classList.add('flex', 'flex-col', 'w-full', 'mt-2');
  } else {
    linksContainer.classList.add('hidden');
    linksContainer.classList.remove('flex', 'flex-col', 'w-full', 'mt-2');
  }
}

// On window resize: reset menu for desktop view
function checkScreen() {
  if (window.innerWidth >= 768) {
    // Desktop: always show nav links inline, hide hamburger menu
    menuToggleBtn.classList.add('hidden');
    linksContainer.classList.remove('hidden', 'flex-col', 'w-full', 'mt-2');
    linksContainer.classList.add('flex');
  } else {
    // Mobile: show hamburger menu
    menuToggleBtn.classList.remove('hidden');
    if (!menuVisible) {
      // Hide links initially on mobile
      linksContainer.classList.add('hidden');
      linksContainer.classList.remove('flex', 'flex-col', 'w-full', 'mt-2');
    }
  }
}

function toggleTheme() {
  if (document.documentElement.classList.contains('dark')) {
    document.documentElement.classList.remove('dark');
    isLightTheme = true;
    themeToggleBtn.textContent = '☀️';
  } else {
    document.documentElement.classList.add('dark');
    isLightTheme = false;
    themeToggleBtn.textContent = '🌙';
  }
}

menuToggleBtn.addEventListener('click', toggleMenu);
themeToggleBtn.addEventListener('click', toggleTheme);
window.addEventListener('resize', checkScreen);

// Initialize
checkScreen();
if (document.documentElement.classList.contains('dark')) {
  themeToggleBtn.textContent = '🌙';
  isLightTheme = false;
} else {
  themeToggleBtn.textContent = '☀️';
  isLightTheme = true;
}
