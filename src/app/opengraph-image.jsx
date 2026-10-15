import { ImageResponse } from "next/og";

export const alt = "Simone Iengo — Software Developer, Java & Python, verso AI engineering";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const dynamic = "force-static";

const sans = { fontFamily: "sans-serif" };

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ display:"flex", width:"100%", height:"100%", background:"#F8F4ED", color:"#241D19", position:"relative", padding:"66px 72px", flexDirection:"column", justifyContent:"space-between" }}>
      <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", width:"100%" }}>
        <div style={{ display:"flex", alignItems:"center", gap:18 }}>
          <div style={{ display:"flex", alignItems:"center", justifyContent:"center", width:59, height:59, borderRadius:10, background:"#241D19", color:"#FFF8F0", fontSize:29, fontWeight:800, letterSpacing:-2 }}>SI<span style={{color:"#D78967"}}>.</span></div>
          <span style={{fontSize:18, fontWeight:650, letterSpacing:0.2, ...sans}}>PORTFOLIO / 2026</span>
        </div>
        <span style={{ fontSize:15, color:"#856F60", letterSpacing:3, ...sans }}>DEVELOP · BUILD · REFINE</span>
      </div>
      <div style={{display:"flex", position:"relative", gap:32, alignItems:"center", justifyContent:"space-between", width:"100%"}}>
        <div style={{display:"flex", flexDirection:"column", width:700, gap:20}}>
          <div style={{display:"flex", alignItems:"center", gap:12, color:"#99553F", fontSize:18, fontWeight:700, letterSpacing:2, ...sans}}>
            <span style={{width:9, height:9, borderRadius:5, background:"#A34F34"}} />
            SOFTWARE DEVELOPER
          </div>
          <div style={{display:"flex", flexDirection:"column", fontSize:84, fontWeight:750, letterSpacing:-4, lineHeight:1.02, ...sans}}>
            <span>Simone Iengo<span style={{color:"#A34F34"}}>.</span></span>
          </div>
          <div style={{display:"flex", flexDirection:"column", fontSize:29, lineHeight:1.35, color:"#66594E", ...sans}}>
            <span>Java · Python · Backend</span>
            <span>Verso AI Engineering</span>
          </div>
        </div>
        <div style={{display:"flex", flexDirection:"column", width:260, height:300, borderRadius:14, background:"#EADAC9", border:"1px solid #D5BFA9", padding:24, transform:"rotate(5deg)", justifyContent:"center", gap:14}}>
          <div style={{display:"flex", alignItems:"center", gap:8, marginBottom:8}}>
            <span style={{height:10,width:10,borderRadius:5,background:"#B86F54"}} />
            <span style={{height:10,width:10,borderRadius:5,background:"#A8A37D"}} />
            <span style={{height:10,width:10,borderRadius:5,background:"#687B63"}} />
          </div>
          <div style={{display:"flex", flexDirection:"column", gap:13, background:"#272521", borderRadius:8, padding:"30px 19px", height:184}}>
            <span style={{width:140,height:8,background:"#D0A383",borderRadius:4}} />
            <span style={{width:178,height:8,background:"#6B8D7D",borderRadius:4}} />
            <span style={{width:124,height:8,background:"#B4A69A",borderRadius:4}} />
            <span style={{width:165,height:8,background:"#A6BD8C",borderRadius:4}} />
            <span style={{width:100,height:8,background:"#D0A383",borderRadius:4}} />
          </div>
          <span style={{color:"#705C50",fontSize:13,letterSpacing:1,...sans}}>SOFTWARE / CODE / DATA</span>
        </div>
      </div>
      <div style={{display:"flex", width:"100%", borderTop:"1px solid #D7C7B8", paddingTop:23, justifyContent:"space-between", fontSize:15, color:"#66594E", ...sans}}>
        <span>Backend · Formazione · AI in apprendimento</span>
        <span>github.com/ilmuratore</span>
      </div>
    </div>,
    { ...size }
  );
}
