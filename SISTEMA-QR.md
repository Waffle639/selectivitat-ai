# Sistema de Corrección con QR - Selectivitat AI

## 📱 Cómo funciona

### Flujo de trabajo:

1. **Escritorio (`/corregir`)**
   - El usuario accede a la página de corrección desde su ordenador
   - Se genera automáticamente un código QR único con un Session ID
   - El QR contiene la URL: `/mobile-upload?session=ABC123`

2. **Móvil (`/mobile-upload`)**
   - El usuario escanea el QR con su móvil
   - Se abre una página optimizada para móvil
   - Puede hacer fotos directamente con la cámara del móvil
   - Las fotos se suben automáticamente

3. **Sincronización**
   - Las fotos aparecen en tiempo real en el ordenador
   - Cuando termina, el usuario procesa el examen
   - La IA analiza y muestra los resultados

## 🎨 Características implementadas

### Página de escritorio (`/corregir`)
- ✅ Barra de progreso visual con 3 pasos
- ✅ Generación de código QR único
- ✅ Session ID visible
- ✅ Estado de conexión en tiempo real
- ✅ Preview de fotos recibidas
- ✅ Opción alternativa de subida tradicional (drag & drop)
- ✅ Contador de fotos en tiempo real
- ✅ Simulación de procesamiento con IA
- ✅ Resultados detallados

### Página móvil (`/mobile-upload`)
- ✅ Diseño optimizado para móvil
- ✅ Botón grande de cámara
- ✅ Captura directa desde la cámara (`capture="environment"`)
- ✅ Estado de conexión visible
- ✅ Preview de fotos subidas
- ✅ Contador de fotos
- ✅ Instrucciones y consejos
- ✅ Notificaciones de éxito
- ✅ Botón de finalizar

## 🔧 Implementación real (siguiente fase)

Para que funcione en producción, necesitarás:

### 1. Backend WebSocket
```javascript
// Ejemplo con Socket.io
io.on('connection', (socket) => {
  socket.on('join-session', (sessionId) => {
    socket.join(sessionId);
  });
  
  socket.on('upload-photo', (sessionId, photoData) => {
    // Guardar foto
    io.to(sessionId).emit('new-photo', photoData);
  });
});
```

### 2. Librería de QR Code
```bash
npm install qrcode
```

```javascript
import QRCode from 'qrcode';

QRCode.toCanvas(canvas, url, {
  width: 256,
  margin: 2,
  color: {
    dark: '#000000',
    light: '#ffffff'
  }
});
```

### 3. Almacenamiento de fotos
- Subir a S3, Cloudinary o similar
- Guardar referencias en base de datos con sessionId
- Procesar con API de IA (OpenAI Vision, Google Cloud Vision, etc.)

### 4. Variables de entorno
```env
WEBSOCKET_URL=wss://your-domain.com
STORAGE_BUCKET=your-bucket
AI_API_KEY=your-api-key
```

## 📁 Estructura de archivos

```
src/
├── pages/
│   ├── corregir.astro         # Página principal (escritorio)
│   ├── mobile-upload.astro    # Página para móvil
│   ├── equip.astro            # Página "Qui som"
│   ├── contacte.astro         # Página de contacto
│   ├── resultats.astro        # Página de estadísticas
│   └── provar.astro           # Demo de corrección
├── layouts/
│   └── Layout.astro           # Layout base
└── components/
    ├── Header.astro
    └── Footer.astro
```

## 🎯 Características del diseño

### Colores
- **Azul principal**: `#3B82F6` (blue-600)
- **Verde éxito**: `#10B981` (green-600)
- **Amarillo destacado**: `#F59E0B` (yellow-500)

### Componentes
- Gradientes modernos
- Sombras suaves (`shadow-lg`, `shadow-xl`)
- Bordes redondeados (`rounded-2xl`)
- Animaciones suaves (spin, pulse, bounce)
- Backdrop blur para efectos de cristal

### Responsive
- Grid adaptativo con Tailwind
- Diseño mobile-first
- Breakpoints: `md:` para tablet/desktop

## 🚀 Próximos pasos

1. **Integrar WebSocket** para comunicación en tiempo real
2. **Implementar QR real** con librería qrcode
3. **Configurar almacenamiento** en la nube
4. **Integrar API de IA** para análisis real
5. **Añadir autenticación** (ya implementada con Clerk)
6. **Sistema de pagos** para suscripciones
7. **Dashboard de usuario** con historial

## 💡 Consejos de UX

- El QR debe ser grande y fácil de escanear
- Mostrar feedback visual inmediato en cada acción
- Mantener al usuario informado del estado de conexión
- Permitir múltiples métodos de subida (QR, drag & drop, click)
- Dar instrucciones claras con iconos

---

**Estado actual**: Plantilla funcional completa ✅  
**Siguiente fase**: Implementación de backend y WebSocket 🔄
