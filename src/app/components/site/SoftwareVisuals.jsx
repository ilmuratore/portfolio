import TechIcon from "./TechIcon";
import { projects, privateProjects } from "@/content/projects.mjs";
import { skillAreas } from "@/content/profile.mjs";
export function HeroSoftwareVisual() {
  return (
    <div className="hero-art" role="img" aria-label="Composizione dimostrativa di un editor di codice e una dashboard software">
      <div className="hero-art-caption"><span>DEVELOP</span><span>BUILD</span><span>REFINE</span><span>REPEAT</span></div>
      <div className="editor-panel" aria-hidden="true">
        <div className="window-toolbar"><span className="window-dots"><i /><i /><i /></span><span>profile / developer.js</span><span>↗</span></div>
        <div className="editor-content">
          <div className="editor-line"><span>01</span><code><b>const</b> developer = &#123;</code></div>
          <div className="editor-line"><span>02</span><code>&nbsp; name: <em>&quot;Simone Iengo&quot;</em>,</code></div>
          <div className="editor-line"><span>03</span><code>&nbsp; role: <em>&quot;Software Developer&quot;</em>,</code></div>
          <div className="editor-line"><span>04</span><code>&nbsp; focus: <em>&quot;Backend &amp; AI&quot;</em></code></div>
          <div className="editor-line"><span>05</span><code>&#125;;</code></div>
          <div className="editor-line"><span>06</span><code /></div>
          <div className="editor-line"><span>07</span><code><b>export default</b> developer;</code></div>
        </div>
        <div className="editor-footer"><span>● ready</span><span>JavaScript</span></div>
      </div>
      <div className="dashboard-panel" aria-hidden="true">
        <div className="dashboard-top"><span>Selected work</span><span className="dashboard-ellipsis">•••</span></div>
        <div className="dashboard-small-label">ANTEPRIMA ILLUSTRATIVA</div>
        <div className="dashboard-numbers">
          <span><b>{String(projects.length).padStart(2, "0")}</b><small>Case study</small></span>
          <span><b>{String(privateProjects.length).padStart(2, "0")}</b><small>R&D</small></span>
          <span><b>{String(skillAreas.length).padStart(2, "0")}</b><small>Skill areas</small></span>
        </div>
        <div className="chart" aria-hidden="true"><span style={{ height: "30%" }} /><span style={{ height: "52%" }} /><span style={{ height: "41%" }} /><span style={{ height: "72%" }} /><span style={{ height: "59%" }} /><span style={{ height: "87%" }} /><span style={{ height: "70%" }} /><span style={{ height: "93%" }} /><span style={{ height: "78%" }} /></div>
        <div className="dashboard-bottom"><span>Software / Engineering</span><span>Visualizzazione illustrativa</span></div>
      </div>
      <span className="hero-art-index" aria-hidden="true">01 — {String(projects.length).padStart(2, "0")}</span>
    </div>
  );
}

function DashboardPreview() {
  return (
    <div className="mini-dashboard">
      <div className="mini-sidebar"><span className="mini-logo">P.</span><span className="mini-side-line" /><span className="mini-side-line shorter" /><span className="mini-side-line" /></div>
      <div className="mini-body"><div className="mini-overline">OVERVIEW</div><div className="mini-heading">Analytics</div><div className="mini-stats"><span /><span /><span /></div><div className="mini-bars"><i style={{ height: "38%" }} /><i style={{ height: "67%" }} /><i style={{ height: "54%" }} /><i style={{ height: "80%" }} /><i style={{ height: "62%" }} /><i style={{ height: "89%" }} /><i style={{ height: "73%" }} /></div></div>
    </div>
  );
}

function BoardPreview() {
  return (
    <div className="mini-board"><div className="mini-board-top"><span>Workspace</span><span>•••</span></div><div className="mini-board-heading">Project board</div><div className="mini-board-columns"><div><b>TO DO</b><span /><span className="wide" /><span /></div><div><b>IN PROGRESS</b><span className="wide" /><span /><span /></div><div><b>DONE</b><span /><span /></div></div></div>
  );
}

function TerminalPreview() {
  return (
    <div className="mini-terminal"><div className="mini-terminal-top"><span className="window-dots"><i /><i /><i /></span><span>project / terminal</span></div><div className="mini-terminal-lines"><p><span>~ $</span> python</p><p className="terminal-muted">Python · FastAPI · SQLite</p><p><span>✓</span> Backend services</p><p className="terminal-muted">Local model integration_</p></div><div className="mini-terminal-accent" /></div>
  );
}

function GamePreview() {
  return (
    <div className="mini-game" aria-hidden="true">
      <div className="mini-game-heading"><span>VALDORIA / RPG 2D</span><span>UNITY · C#</span></div>
      <div className="mini-game-world">
        <span className="mini-game-path" />
        <span className="mini-game-water" />
        <span className="mini-game-tree mini-game-tree-one" />
        <span className="mini-game-tree mini-game-tree-two" />
        <span className="mini-game-tree mini-game-tree-three" />
        <span className="mini-game-player" />
        <span className="mini-game-npc" />
      </div>
      <div className="mini-game-hud">
        <span>HP</span><span className="mini-game-health"><i /></span>
        <span>LVL 01</span>
      </div>
    </div>
  );
}

function RpgPreview() {
  return (
    <div className="mini-terminal">
      <div className="mini-terminal-top"><span className="window-dots"><i /><i /><i /></span><span>LE CRONACHE DEL SIGILLO / C#</span></div>
      <div className="mini-terminal-lines">
        <p><span>›</span> AVVENTURA / RPG</p>
        <p className="terminal-muted">Missioni · Personaggi · Inventario</p>
        <p><span>✓</span> Combattimento a turni</p>
        <p className="terminal-muted">Dati e salvataggi JSON_</p>
      </div>
      <div className="mini-terminal-accent" />
    </div>
  );
}

function ApiPreview() {
  return (
    <div className="mini-terminal">
      <div className="mini-terminal-top"><span className="window-dots"><i /><i /><i /></span><span>EXPRESS / API BIBLIOTECA</span></div>
      <div className="mini-terminal-lines">
        <p><span>GET</span> /api/libri</p>
        <p className="terminal-muted">POST /api/prestiti</p>
        <p><span>✓</span> JWT · PostgreSQL</p>
        <p className="terminal-muted">Routes → Services → Models</p>
      </div>
      <div className="mini-terminal-accent" />
    </div>
  );
}

export function ProjectSoftwareVisual({ variant, primaryTech }) {
  return (
    <div className={"project-visual project-visual-" + variant} role="img" aria-label="Rappresentazione grafica illustrativa di un progetto software">
      {variant === "dashboard" && <DashboardPreview />}
      {variant === "board" && <BoardPreview />}
      {variant === "terminal" && <TerminalPreview />}
      {variant === "game" && <GamePreview />}
      {variant === "rpg" && <RpgPreview />}
      {variant === "api" && <ApiPreview />}
      <span className="project-visual-label" aria-hidden="true">ANTEPRIMA ILLUSTRATIVA</span>
      {primaryTech && <span className="project-preview-tech" aria-hidden="true"><TechIcon label={primaryTech} size={24}/></span>}
    </div>
  );
}
