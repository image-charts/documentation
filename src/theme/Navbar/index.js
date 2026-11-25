import React from 'react';
import Navbar from '@theme-original/Navbar';

// Docusaurus renders the top bar as a bare <nav>. Wrapping it in <header> gives the
// page its banner landmark, so screen readers and agents that read the accessibility
// tree find the site header (and its menu button) instead of the article's <header>.
export default function NavbarWrapper(props) {
  return (
    <header className="site-header">
      <Navbar {...props} />
    </header>
  );
}
