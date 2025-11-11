# Portfolio Personal

Portfolio web desarrollado con React + TypeScript + Vite, con formulario de contacto funcional mediante EmailJS y desplegado en GitHub Pages.

![React](https://img.shields.io/badge/React-18.2.0-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0.2-blue)
![Vite](https://img.shields.io/badge/Vite-4.4.0-purple)

---

## 📋 Tabla de Contenidos

- [Tecnologías](#-tecnologías)
- [Instalación](#-instalación)
- [Configuración de EmailJS](#-configuración-de-emailjs)
- [Variables de Entorno](#-variables-de-entorno)
- [Desarrollo](#-desarrollo)
- [Despliegue en GitHub Pages](#-despliegue-en-github-pages)
- [Solución de Problemas](#-solución-de-problemas)

---

## 🚀 Tecnologías

- **React 18.2.0** - Biblioteca de UI
- **TypeScript** - Tipado estático
- **Vite** - Build tool y dev server
- **EmailJS** - Servicio de envío de emails
- **SweetAlert2** - Alertas personalizadas
- **ScrollReveal** - Animaciones al scroll
- **React Scroll** - Navegación suave
- **Boxicons** - Iconografía

---

## 📦 Instalación

### 1. Clonar el repositorio

```bash
git clone https://github.com/dether/Portfolio.git
cd Portfolio
```

### 2. Instalar dependencias

```bash
npm install
```

**Nota:** Verás un warning sobre `emailjs-com` deprecado. El paquete nuevo es `@emailjs/browser`, pero ambos funcionan.

### 3. Iniciar servidor de desarrollo

```bash
npm run dev
```

La aplicación estará disponible en `http://localhost:5173/Portfolio/`

---

## 📧 Configuración de EmailJS

### Paso 1: Crear cuenta
1. Ir a [https://www.emailjs.com/](https://www.emailjs.com/)
2. Registrarse o iniciar sesión

### Paso 2: Configurar Email Service
1. Dashboard → **Email Services** → **Add new service**
2. Seleccionar **Gmail**
3. Conectar tu cuenta de Gmail
4. Guardar el **SERVICE ID** (lo necesitarás para el `.env`)

**⚠️ IMPORTANTE:** Si Google revoca el token de acceso, verás el error `Gmail_API: Invalid grant`. La solución es **ELIMINAR** el service y crear uno nuevo.

### Paso 3: Crear Email Template
1. Dashboard → **Email Templates** → **Create new template**
2. Configurar el template con estos campos:

| Campo en el formulario | Variable EmailJS |
|------------------------|------------------|
| `from_name` | `{{from_name}}` |
| `user_email` | `{{user_email}}` |
| `mobile_number` | `{{mobile_number}}` |
| `email_subject` | `{{email_subject}}` |
| `mensaje` | `{{message}}` |

3. Guardar el **TEMPLATE ID**

### Paso 4: Obtener Public Key
1. Dashboard → **Account** → **API Keys**
2. Copiar tu **PUBLIC KEY**

---

## 🔐 Variables de Entorno

### 1. Crear archivo `.env`

En la raíz del proyecto, crea un archivo `.env`:

```env
VITE_ID=tu_public_key_aqui
VITE_SERVICE=tu_service_id_aqui
VITE_TEMPLATE=tu_template_id_aqui
```

### 2. Crear archivo `.env.example`

Para que otros desarrolladores sepan qué variables necesitan (sin exponer tus credenciales):

```env
VITE_ID=your_emailjs_public_key
VITE_SERVICE=your_emailjs_service_id
VITE_TEMPLATE=your_emailjs_template_id
```

### 3. Agregar `.env` al `.gitignore`

Asegúrate de que tu `.gitignore` incluya:

```
.env
.env.local
```

**⚠️ NUNCA subas tu `.env` con credenciales reales al repositorio.**

---

## 💻 Desarrollo

### Scripts disponibles

```bash
# Desarrollo local
npm run dev

# Build de producción
npm run build

# Preview del build
npm run preview

# Linting
npm run lint

# Desplegar a GitHub Pages
npm run deploy
```

### Estructura del proyecto

```
Portfolio/
├── src/
│   ├── component/
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   ├── Footer.tsx
│   │   ├── Home.tsx
│   │   ├── Navbar.tsx
│   │   ├── Portfolio.tsx
│   │   ├── Services.tsx
│   │   └── Skills.tsx
│   ├── styles/
│   │   ├── about.css
│   │   ├── contact.css
│   │   └── ...
│   ├── assets/
│   ├── App.tsx
│   ├── main.tsx
│   └── script.ts
├── .env (no subir)
├── .env.example (subir este)
├── package.json
├── vite.config.ts
└── README.md
```

---

## 🌐 Despliegue en GitHub Pages

### Configuración inicial (solo una vez)

#### 1. Verificar `vite.config.ts`

Asegúrate de que tu archivo `vite.config.ts` tenga la configuración de base:

```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Portfolio/', // Nombre de tu repositorio
})
```

#### 2. Configurar GitHub Pages en tu repositorio

1. Ve a tu repositorio en GitHub
2. **Settings** → **Pages**
3. En **Source**, selecciona **Deploy from a branch**
4. En **Branch**, selecciona `gh-pages` y carpeta `/ (root)`
5. Guardar

### Flujo de trabajo para subir cambios

#### Opción A: Despliegue automático (recomendado)

```bash
# 1. Hacer tus cambios en el código
# 2. Verificar que todo funciona localmente
npm run dev

# 3. Guardar cambios en Git
git add .
git commit -m "Descripción de los cambios"

# 4. Subir a GitHub
git push origin main

# 5. Compilar y desplegar en GitHub Pages
npm run build
npm run deploy
```

#### Opción B: Comandos en un solo bloque

```bash
git add .
git commit -m "Actualización del portfolio"
git push origin main
npm run build && npm run deploy
```

### ¿Qué hace `npm run deploy`?

El comando `npm run deploy` ejecuta `gh-pages -d dist`, que:

1. Toma la carpeta `dist/` (tu build de producción)
2. La sube a la rama `gh-pages` de tu repositorio
3. GitHub Pages detecta el cambio automáticamente
4. Refresca tu sitio en minutos

### Verificar el despliegue

Después de ejecutar `npm run deploy`, tu sitio estará disponible en:

```
https://TU_USUARIO.github.io/Portfolio/
```

**Tiempo de actualización:** Entre 1-5 minutos después del deploy.

### Ver el estado del despliegue

1. Ve a tu repositorio en GitHub
2. Pestaña **Actions** (si tienes workflows configurados)
3. O verifica directamente en **Settings → Pages**

---

## 🐛 Solución de Problemas

### Error: `Gmail_API: Invalid grant`

**Causa:** Token OAuth de Google expirado o revocado.

**Solución:**
1. Ir a EmailJS Dashboard
2. Email Services → Eliminar el service actual
3. Crear un nuevo service
4. Reconectar con Gmail
5. Actualizar el `VITE_SERVICE` en tu `.env` con el nuevo ID

### Error: Formulario no envía emails

**Verificar:**
1. ✅ Archivo `.env` existe y tiene las 3 variables
2. ✅ Variables en `.env` no tienen espacios ni comillas
3. ✅ Service de EmailJS está activo (no suspendido)
4. ✅ Template tiene los campos configurados correctamente
5. ✅ Los `name` de los inputs coinciden con las variables del template

### Error: GitHub Pages muestra página en blanco

**Solución:**
1. Verificar que `base: '/Portfolio/'` en `vite.config.ts` coincida con el nombre del repo
2. Verificar que la rama `gh-pages` existe
3. Revisar que GitHub Pages esté configurado para usar la rama `gh-pages`

### Error: Cambios no se reflejan en el deploy

```bash
# Limpiar caché y rebuilder
rm -rf dist node_modules
npm install
npm run build
npm run deploy
```

## 👨‍💻 Autor
https://github.com/dether/Portfolio.git
**Tu Nombre**
- GitHub: [@dether](https://github.com/dether)
- Portfolio: [https://dether.github.io/Portfolio/](https://dether.github.io/Portfolio/)

---

## 📄 Licencia

Este proyecto está bajo la Licencia MIT.

---

**¿Preguntas o problemas?** Abre un issue en el repositorio.