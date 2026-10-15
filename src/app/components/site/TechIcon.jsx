import Image from "next/image";
import { techIconSlug } from "@/content/icon-map.mjs";
import UiIcon from "./UiIcon";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function TechIcon({ label, size = 18, className = "" }) {
  const slug = techIconSlug(label);
  if (!slug) return <UiIcon name={label.toLowerCase().includes("llm") ? "brain" : label.toLowerCase().includes("database") || label === "SQL" ? "database" : "code"} size={size} className={className} />;
  return <Image className={className} src={basePath + "/icons/tech/" + slug + ".svg"} width={size} height={size} alt="" unoptimized aria-hidden="true" />;
}
