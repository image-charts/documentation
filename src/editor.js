/**
 * Image-Charts Editor Integration
 *
 * Docusaurus client module that transforms chart image links pointing to
 * editor.image-charts.com into inline iframe editors when clicked.
 *
 * Features:
 * - Hover overlay with "Open in Editor" text (CSS-only, no DOM mutation)
 * - Smooth iframe embedding on click
 * - Close button to return to image view
 * - Responsive iframe sizing
 */

const DEBUG = false;
const log = (...args) => DEBUG && console.log('[ImageCharts Editor]', ...args);

/**
 * Initialize chart editor links on the current page.
 * Adds click handlers to all links pointing to editor.image-charts.com
 */
function initChartEditor() {
  log('initChartEditor called');

  // Find all links that point to the Image-Charts editor
  const allLinks = Array.from(document.querySelectorAll('a'));
  log('Total links found:', allLinks.length);

  const editorLinks = allLinks.filter((a) => {
    if (a.classList.contains('editor-initialized')) {
      return false;
    }
    const href = a.href || '';
    const isEditorLink =
      href.includes('editor.image-charts.com/?') ||
      href.includes('editor.image-charts.com/chart?');
    // Only apply to links that contain an image (chart preview)
    const hasImage = a.querySelector('img') !== null;
    return isEditorLink && hasImage;
  });

  log('Editor links found:', editorLinks.length);

  editorLinks.forEach((link) => {
    log('Initializing link:', link.href.substring(0, 60) + '...');

    // Add class for CSS styling (hover overlay via pseudo-elements)
    link.classList.add('editor-switcher', 'editor-initialized');
    link.setAttribute('data-editor-link', 'true');

    // Prevent default navigation and handle click
    link.addEventListener('click', openEditor, { capture: true });
  });

  if (editorLinks.length > 0) {
    log('Initialization complete, added click handlers to', editorLinks.length, 'links');
  }
}

/**
 * Handle click on editor link - replace with iframe
 */
function openEditor(e) {
  log('openEditor called');

  const link = e.currentTarget;
  e.preventDefault();
  e.stopPropagation();

  // Store original link info for restoration
  const originalHref = link.href;
  const originalImg = link.querySelector('img');
  const originalImgSrc = originalImg ? originalImg.src : null;
  const originalImgAlt = originalImg ? originalImg.alt : 'Chart';

  // Calculate appropriate height based on the image dimensions
  const rect = link.getBoundingClientRect();
  const height = Math.max(rect.height * 2, 550);

  // Create container for iframe and controls
  const container = document.createElement('div');
  container.className = 'editor-container';

  // Create header with close button
  const header = document.createElement('div');
  header.className = 'editor-header';
  header.innerHTML = `
    <span class="editor-header__title">
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
      Chart Editor
    </span>
    <button class="editor-header__close" title="Close editor and return to image">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
      <span>Close</span>
    </button>
  `;

  // Create iframe
  const iframe = document.createElement('iframe');
  iframe.src = originalHref;
  iframe.className = 'editor-iframe';
  iframe.width = '100%';
  iframe.height = height + 'px';
  iframe.setAttribute('loading', 'lazy');
  iframe.setAttribute('title', 'Image-Charts Editor');
  iframe.setAttribute('allow', 'clipboard-write');

  container.appendChild(header);
  container.appendChild(iframe);

  // Replace the link with the container
  link.replaceWith(container);

  // Scroll container into view
  container.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

  // Handle close button click - restore original image
  header.querySelector('.editor-header__close').addEventListener('click', () => {
    const newLink = document.createElement('a');
    newLink.href = originalHref;
    newLink.className = 'editor-switcher';

    if (originalImgSrc) {
      const newImg = document.createElement('img');
      newImg.src = originalImgSrc;
      newImg.alt = originalImgAlt;
      newLink.appendChild(newImg);
    }

    container.replaceWith(newLink);

    // Re-initialize this link after a small delay
    setTimeout(() => initChartEditor(), 100);
  });

  return false;
}

/**
 * Safely schedule initialization after React hydration completes.
 * Uses multiple triggers to ensure initialization happens.
 */
function scheduleInit(delay = 500) {
  log('Scheduling init with delay:', delay);
  setTimeout(() => {
    initChartEditor();
  }, delay);
}

/**
 * Docusaurus Client Module Lifecycle Hooks
 * @see https://docusaurus.io/docs/advanced/client#client-module-lifecycles
 */

// Called when a route update is triggered (navigation)
export function onRouteDidUpdate({ location, previousLocation }) {
  log('onRouteDidUpdate:', location?.pathname, 'previous:', previousLocation?.pathname);
  // Always run on route change (including initial load when previousLocation is null)
  scheduleInit(300);
}

// Called when the app renders the first time (initial client render)
export function onInitialClientRender() {
  log('onInitialClientRender');
  // This fires after React hydration is complete
  scheduleInit(200);
}

// Fallback: Initialize on module load
// This handles cases where lifecycle hooks don't fire as expected
if (typeof window !== 'undefined' && typeof document !== 'undefined') {
  log('Module loaded, setting up fallback initialization');

  // Check if document is already loaded
  if (document.readyState === 'complete') {
    log('Document already complete');
    scheduleInit(100);
  } else if (document.readyState === 'interactive') {
    log('Document interactive');
    scheduleInit(300);
  } else {
    log('Document loading, waiting for DOMContentLoaded');
    document.addEventListener('DOMContentLoaded', () => {
      log('DOMContentLoaded fired');
      scheduleInit(500);
    });
  }

  // Also listen for load event as a final fallback
  window.addEventListener('load', () => {
    log('Window load fired');
    // Only init if not already done
    const uninitializedLinks = document.querySelectorAll('a[href*="editor.image-charts.com"]:not(.editor-initialized)');
    if (uninitializedLinks.length > 0) {
      log('Found uninitialized links after window load:', uninitializedLinks.length);
      scheduleInit(100);
    }
  });
}
