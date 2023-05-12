

import React from 'react';
import { NavLink } from 'react-router-dom';
import './GalleryNavigation.css';

const GalleryNavigation = ({ galleries }) => {
  return (
    <nav>
      {galleries.map((gallery) => (
        <NavLink
          key={gallery.id}
          to={`/gallery/${gallery.id}`}
          activeClassName="active"
        >
          {gallery.name}
        </NavLink>
      ))}
    </nav>
  );
};

export default GalleryNavigation;

