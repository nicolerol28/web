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

import imgDigitalLogin    from '../assets/screenshots/login-digital.png'
import imgDigitalDashboard from '../assets/screenshots/dashboard-digital.png'
import imgProductList     from '../assets/screenshots/produc.png'
import imgProductListPhotos from '../assets/screenshots/produc2.png'
import imgProductInfo     from '../assets/screenshots/producinfo.png'
import imgCart            from '../assets/screenshots/carrito.png'
import imgReceipt         from '../assets/screenshots/comprobante.png'
import imgReceiptPdf      from '../assets/screenshots/pdf-carrito.png'
import imgServicesList    from '../assets/screenshots/servicios.png'
import imgOrders          from '../assets/screenshots/ordenes.png'
import imgOrderPdf        from '../assets/screenshots/pdf-servicio.png'
import imgLogbook         from '../assets/screenshots/bitacora.png'
import imgTechnicians     from '../assets/screenshots/tecnicos.png'
import imgAssignment      from '../assets/screenshots/asignacion.png'
import imgFinancialSummary from '../assets/screenshots/resumen.png'
import imgInventory       from '../assets/screenshots/inventario.png'
import imgTransfer        from '../assets/screenshots/transferencia.png'
import imgReports         from '../assets/screenshots/informes.png'
import imgStats           from '../assets/screenshots/estadisticas.png'
import imgDigitalUsers    from '../assets/screenshots/usuarios.png'

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

  "digital-repair": [
    { src: imgDigitalLogin,        alt: "Login" },
    { src: imgDigitalDashboard,    alt: "Dashboard administrativo" },
    { src: imgProductList,         alt: "Lista de productos" },
    { src: imgProductListPhotos,   alt: "Lista de productos con imágenes" },
    { src: imgProductInfo,         alt: "Detalle de producto con variantes" },
    { src: imgCart,                alt: "Carrito de compra" },
    { src: imgReceipt,             alt: "Comprobante de finalización de compra" },
    { src: imgReceiptPdf,          alt: "PDF del comprobante de pago" },
    { src: imgServicesList,        alt: "Lista de servicios" },
    { src: imgOrders,              alt: "Órdenes de servicio técnico" },
    { src: imgOrderPdf,            alt: "PDF de avance o entrega de una orden" },
    { src: imgLogbook,             alt: "Bitácora de una orden: Registro que llenan los técnicos a medida que trabajan sobre un dispositivo" },
    { src: imgTechnicians,         alt: "Lista de técnicos" },
    { src: imgAssignment,          alt: "Asignación de técnicos entre locales" },
    { src: imgFinancialSummary,    alt: "Resumen financiero" },
    { src: imgInventory,           alt: "Inventario" },
    { src: imgTransfer,            alt: "Transferencia de productos entre locales" },
    { src: imgReports,             alt: "Informes: Historial de ventas y servicios" },
    { src: imgStats,               alt: "Estadísticas de ventas y servicios: dinero entrante por cada motivo" },
    { src: imgDigitalUsers,        alt: "Gestión de cuentas y contraseñas por local" },
  ],
}
