//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const toRna = (dna) => {
  const map = {
    C: "G",
    G: "C",
    A: "U",
    T: "A",
  };
  return dna.replace(/[CGAT]/g, (nuc) => map[nuc]);
};
