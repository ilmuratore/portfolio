# Usa l'immagine Node.js ufficiale come base
FROM node:latest

# Imposta la directory di lavoro
WORKDIR /app

# Copia package.json e package-lock.json
COPY package*.json ./

# Installa le dipendenze
RUN npm install

# Copia il resto del codice dell'applicazione
COPY . .

# Costruisci il progetto per la produzione
RUN npm run build

# Espone la porta 3000
EXPOSE 3000

# Comando per avviare il server in modalità produzione
CMD ["npm", "start"]
