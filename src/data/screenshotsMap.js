import imgLogin      from '../assets/screenshots/login.png'
import imgDashboard  from '../assets/screenshots/dashboard.png'
import imgProdTable  from '../assets/screenshots/products-table.png'
import imgProdCatalog from '../assets/screenshots/products-catalog.png'
import imgProdModal  from '../assets/screenshots/product-modal.png'
import imgMovements  from '../assets/screenshots/movements.png'
import imgSuppliers  from '../assets/screenshots/suppliers.png'
import imgWarehouses from '../assets/screenshots/warehouses.png'
import imgSetCat     from '../assets/screenshots/settings-category.png'
import imgSetUnit    from '../assets/screenshots/settings-unit.png'
import imgUsers      from '../assets/screenshots/users.png'

import imgAiChat    from '../assets/screenshots/ai-chat.png'
import imgReportsUi from '../assets/screenshots/reports-ui.png'
import imgBot       from '../assets/screenshots/telegram-bot.png'

export const screenshotsMap = {
  "inventory-system": [
    { src: imgLogin,       alt: "Login" },
    { src: imgDashboard,   alt: "Dashboard with AI Insights" },
    { src: imgProdTable,   alt: "Products — Table View" },
    { src: imgProdCatalog, alt: "Products — Catalog View" },
    { src: imgProdModal,   alt: "Product Detail Modal" },
    { src: imgMovements,   alt: "Inventory Movements" },
    { src: imgSuppliers,   alt: "Suppliers" },
    { src: imgWarehouses,  alt: "Warehouses" },
    { src: imgSetCat,      alt: "Settings — Categories" },
    { src: imgSetUnit,     alt: "Settings — Units" },
    { src: imgUsers,       alt: "Users" },
  ],

  "ai-agent-ecosystem": [
    { src: imgAiChat,    alt: "Chat UI con streaming SSE en tiempo real" },
    { src: imgReportsUi, alt: "UI de reportes ejecutivos con consultas en lenguaje natural" },
    { src: imgBot,       alt: "Telegram bot con historial por chat" },
  ],
}
