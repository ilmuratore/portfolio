export function HeroSoftwareVisual() {
  return (
    <div className="hero-art" role="img" aria-label="Composizione dimostrativa di un editor di codice e una dashboard software">
      <div className="hero-art-caption"><span>DEVELOP</span><span>BUILD</span><span>REFINE</span><span>REPEAT</span></div>
      <div className="editor-panel" aria-hidden="true">
        <div className="window-toolbar"><span className="window-dots"><i /><i /><i /></span><span>workspace / example.js</span><span>↗</span></div>
        <div className="editor-content">
          <div className="editor-line"><span>01</span><code><b>const</b> project = &#123;</code></div>
          <div className="editor-line"><span>02</span><code>&nbsp; name: <em>&quot;Project title&quot;</em>,</code></div>
          <div className="editor-line"><span>03</span><code>&nbsp; status: <em>&quot;in progress&quot;</em>,</code></div>
          <div className="editor-line"><span>04</span><code>&nbsp; approach: <em>&quot;thoughtful&quot;</em></code></div>
          <div className="editor-line"><span>05</span><code>&#125;;</code></div>
          <div className="editor-line"><span>06</span><code /></div>
          <div className="editor-line"><span>07</span><code><b>export default</b> project;</code></div>
        </div>
        <div className="editor-footer"><span>● ready</span><span>JavaScript</span></div>
      </div>
      <div className="dashboard-panel" aria-hidden="true">
        <div className="dashboard-top"><span>Project overview</span><span className="dashboard-ellipsis">•••</span></div>
        <div className="dashboard-small-label">PREVIEW / PLACEHOLDER</div>
        <div className="dashboard-numbers"><span><b>00</b><small>Items</small></span><span><b>00%</b><small>Progress</small></span><span><b>00</b><small>Updates</small></span></div>
        <div className="chart" aria-hidden="true"><span style={{ height: "30%" }} /><span style={{ height: "52%" }} /><span style={{ height: "41%" }} /><span style={{ height: "72%" }} /><span style={{ height: "59%" }} /><span style={{ height: "87%" }} /><span style={{ height: "70%" }} /><span style={{ height: "93%" }} /><span style={{ height: "78%" }} /></div>
        <div className="dashboard-bottom"><span>Overview</span><span>Illustrative data</span></div>
      </div>
      <span className="hero-art-index" aria-hidden="true">01 — 06</span>
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
    <div className="mini-terminal"><div className="mini-terminal-top"><span className="window-dots"><i /><i /><i /></span><span>project / terminal</span></div><div className="mini-terminal-lines"><p><span>~ $</span> npm run build</p><p className="terminal-muted">Compiling application...</p><p><span>✓</span> Build complete</p><p className="terminal-muted">Ready for preview_</p></div><div className="mini-terminal-accent" /></div>
  );
}

export function ProjectSoftwareVisual({ variant }) {
  return (
    <div className={"project-visual project-visual-" + variant} role="img" aria-label="Anteprima illustrativa segnaposto di un progetto software">
      {variant === "dashboard" && <DashboardPreview />}
      {variant === "board" && <BoardPreview />}
      {variant === "terminal" && <TerminalPreview />}
      <span className="project-visual-label" aria-hidden="true">DEMO / PLACEHOLDER</span>
    </div>
  );
}
