# Stage 1: Installazione delle dipendenze e build
FROM node:16-alpine AS builder
WORKDIR /app

# Copia i file di configurazione
COPY package.json package-lock.json* ./

# Installa le dipendenze
RUN npm ci

# Copia il resto del codice sorgente
COPY . .

# Costruisci l'app Next.js (crea la cartella .next)
RUN npm run build

# Stage 2: Creazione dell'immagine di produzione
FROM node:16-alpine AS runner
WORKDIR /app

# Imposta la variabile di ambiente per la produzione
ENV NODE_ENV production

# Copia solo i file necessari dalla fase di build
COPY --from=builder /app/package.json ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/next.config.js ./

# Espone la porta 3000 (default per Next.js)
EXPOSE 3000

# Comando per avviare il server in modalità produzione
CMD ["npm", "start"]
