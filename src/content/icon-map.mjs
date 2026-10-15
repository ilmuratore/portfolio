export const techIconMap = {
  "Python": "python",
  "Java": "openjdk",
  "Java 21": "openjdk",
  "JavaScript": "javascript",
  "TypeScript": "typescript",
  "React": "react",
  "Angular": "angular",
  "Spring Boot": "springboot",
  "FastAPI": "fastapi",
  "PostgreSQL": "postgresql",
  "SQL": "postgresql",
  "SQLite": "sqlite",
  "Pandas": "pandas",
  "Git / GitHub": "git",
  "GitHub": "github",
  "Node.js": "nodedotjs",
  "JPA": "hibernate",
  "JPA / Hibernate": "hibernate",
  "HTML / CSS": "html5",
  "SQLAlchemy": "sqlalchemy",
  "Pydantic": "pydantic",
  "Google": "google",
  "Coursera": "coursera",
  "Rust": "rust"
};

export const techIconSlug = (label) => techIconMap[label] ?? null;
