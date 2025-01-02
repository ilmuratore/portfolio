# Usa l'immagine Node.js come base
FROM node:18

# Imposta la directory di lavoro nell'immagine
WORKDIR /app

# Copia i file del progetto
COPY package*.json ./

# Installa le dipendenze
RUN npm install

# Copia il resto del codice
COPY . .

# Esponi la porta su cui gira il server Next.js
EXPOSE 3000

# Comando di avvio
CMD ["npm", "run", "dev"]
