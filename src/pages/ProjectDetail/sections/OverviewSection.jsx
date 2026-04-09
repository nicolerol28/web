import React from 'react';

import imgLogin from '../../../assets/screenshots/login.png';
import imgDashboard from '../../../assets/screenshots/dashboard.png';
import imgProdTable from '../../../assets/screenshots/products-table.png';
import imgProdCatalog from '../../../assets/screenshots/products-catalog.png';
import imgProdModal from '../../../assets/screenshots/product-modal.png';
import imgMovements from '../../../assets/screenshots/movements.png';
import imgSuppliers from '../../../assets/screenshots/suppliers.png';
import imgWarehouses from '../../../assets/screenshots/warehouses.png';
import imgSetCat from '../../../assets/screenshots/settings-category.png';
import imgSetUnit from '../../../assets/screenshots/settings-unit.png';
import imgUsers from '../../../assets/screenshots/users.png';

const TAG_COLORS = {
  backend:  "docs-overview-tag--blue",
  frontend: "docs-overview-tag--sky",
  infra:    "docs-overview-tag--amber",
};

const CATEGORY_LABELS = {
  backend:  "Backend",
  frontend: "Frontend",
  infra:    "Infra",
};

export default function OverviewSection({ project }) {
  const { docs } = project;

  const screenshots = [
    { src: imgLogin, alt: "Login" },
    { src: imgDashboard, alt: "Dashboard with AI Insights" },
    { src: imgProdTable, alt: "Products — Table View" },
    { src: imgProdCatalog, alt: "Products — Catalog View" },
    { src: imgProdModal, alt: "Product Detail Modal" },
    { src: imgMovements, alt: "Inventory Movements" },
    { src: imgSuppliers, alt: "Suppliers" },
    { src: imgWarehouses, alt: "Warehouses" },
    { src: imgSetCat, alt: "Settings — Categories" },
    { src: imgSetUnit, alt: "Settings — Units" },
    { src: imgUsers, alt: "Users" },
  ];

  return (
    <div className="docs-overview">

      {/* 1. HERO */}
      <div className="docs-overview-hero">
        <h1 className="docs-overview-title">{project.title}</h1>
        <p className="docs-overview-desc">{project.description}</p>

        <div className="docs-overview-links">
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noopener noreferrer" className="plink plink-demo">
              Demo →
            </a>
          )}
          {project.backend && (
            <a href={project.backend} target="_blank" rel="noopener noreferrer" className="plink plink-gh">
              Backend
            </a>
          )}
          {project.frontend && (
            <a href={project.frontend} target="_blank" rel="noopener noreferrer" className="plink plink-gh">
              Frontend
            </a>
          )}
        </div>
      </div>

      {/* 2. STATS */}
      <div className="docs-overview-stats">
        {docs.stats.map((stat) => (
          <div key={stat.label} className="docs-overview-stat-card">
            <span className="docs-overview-stat-label">{stat.label}</span>
            <span className="docs-overview-stat-value">{stat.value}</span>
          </div>
        ))}
      </div>

      {/* 3. TECH TAGS */}
      <div className="docs-overview-tech">
        <h2 className="docs-overview-section-title">Stack</h2>

        <div className="docs-overview-tag-rows">
          {Object.entries(docs.tags).map(([category, tags]) => (
            <div key={category} className="docs-overview-tag-row">
              <span className="docs-overview-tag-category">
                {CATEGORY_LABELS[category]}
              </span>

              <div className="docs-overview-tag-list">
                {tags.map((tag) => (
                  <span key={tag} className={`docs-overview-tag ${TAG_COLORS[category]}`}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 4. SCREENSHOTS */}
      <div className="docs-overview-screenshots">
        <h2 className="docs-overview-section-title">Screenshots</h2>

        <div className="docs-screenshots-grid">
          {screenshots.map((img, index) => (
            <div key={index} className="docs-screenshot-item">
              
              <p className="screenshot-caption">
                {img.alt}
              </p>

              <div className="screenshot-wrapper">
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                />
              </div>

            </div>
          ))}
        </div>
      </div>

    </div>
  );
}