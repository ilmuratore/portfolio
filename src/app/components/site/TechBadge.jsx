import TechIcon from "./TechIcon";

export default function TechBadge({ label, className = "" }) {
  return <span className={"tech-badge " + className}><TechIcon label={label} size={16} /><span>{label}</span></span>;
}
