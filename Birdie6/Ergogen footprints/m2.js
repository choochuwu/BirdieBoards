// m2
module.exports = {
    body: p => `
      (module M2_Hole_TH (layer F.Cu) (tedit 5F7666C1)
      ${p.at /* parametric position */}   
      ${'' /* footprint reference */}
      ${'' /* m2 */}
      (pad "" thru_hole circle (at 0 0) (size 4.2 4.2) (drill 2.3) (layers *.Cu *.Mask))
      )
    `
}
