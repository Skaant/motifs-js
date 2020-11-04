import introSection from "../_sections/1_intro/intro.section.js";
import what_isSection from "../_sections/2_what_is/what_is.section.js";
import how_toSection from "../_sections/3_how_to/how_to.section.js";
import motifs_glossarySection from "../../_motifs/readme/_sections/motifs_glossary/motifs_glossary.section.js";
import motifSection from "../../_motifs/readme/_sections/motif/motif.section.js";

export default ({ motifs }) => ([
  introSection(motifs),
  what_isSection,
  how_toSection,
  motifs_glossarySection(motifs),
  ...motifs.map(motif =>
    
    motifSection(motif, motifs))
])