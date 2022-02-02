// Arduino ProMicro atmega32u4au
// Params
//  orientation: default is down
//    if down, power led will face the pcb
//    if up, power led will face away from pcb

module.exports = {
  nets: {
    RAW: 'RAW',
    GND: 'GND',
    RST: 'RST',
    VCC: 'VCC',
    P21: 'P21',
    P20: 'P20',
    P19: 'P19',
    P18: 'P18',
    P15: 'P15',
    P14: 'P14',
    P16: 'P16',
    P10: 'P10',
    P1: 'P1',
    P0: 'P0',
    P2: 'P2',
    P3: 'P3',
    P4: 'P4',
    P5: 'P5',
    P6: 'P6',
    P7: 'P7',
    P8: 'P8',
    P9: 'P9',
  },
  params: {
    class: 'MCU',
    orientation: 'down'
  },
  body: p => {
    const standard = `
      (module ProMicro (layer F.Cu) (tedit 5B307E4C)
      ${p.at /* parametric position */}

      ${'' /* footprint reference */}
      (fp_text reference "${p.ref}" (at 0 0) (layer F.SilkS) ${p.ref_hide} (effects (font (size 1.27 1.27) (thickness 0.15))))
      (fp_text value "" (at 0 0) (layer F.SilkS) hide (effects (font (size 1.27 1.27) (thickness 0.15))))
    

      `
    function pins(def_neg, def_pos) {
      return `
        ${''/* and now the actual pins */}
        (pad 1 thru_hole rect (at -13.97 ${def_pos}7.62 ${p.rot}) (size 1.524 1.524) (drill 0.8128) (layers *.Cu *.SilkS *.Mask) ${p.net.RAW.str})
        (pad 2 thru_hole circle (at -11.43 ${def_pos}7.62 0) (size 1.524 1.524) (drill 0.8128) (layers *.Cu *.SilkS *.Mask) ${p.net.GND.str})
        (pad 3 thru_hole circle (at -8.89 ${def_pos}7.62 0) (size 1.524 1.524) (drill 0.8128) (layers *.Cu *.SilkS *.Mask) ${p.net.RST.str})
        (pad 4 thru_hole circle (at -6.35 ${def_pos}7.62 0) (size 1.524 1.524) (drill 0.8128) (layers *.Cu *.SilkS *.Mask) ${p.net.VCC.str})
        (pad 5 thru_hole circle (at -3.81 ${def_pos}7.62 0) (size 1.524 1.524) (drill 0.8128) (layers *.Cu *.SilkS *.Mask) ${p.net.P21.str})
        (pad 6 thru_hole circle (at -1.27 ${def_pos}7.62 0) (size 1.524 1.524) (drill 0.8128) (layers *.Cu *.SilkS *.Mask) ${p.net.P20.str})
        (pad 7 thru_hole circle (at 1.27 ${def_pos}7.62 0) (size 1.524 1.524) (drill 0.8128) (layers *.Cu *.SilkS *.Mask) ${p.net.P19.str})
        (pad 8 thru_hole circle (at 3.81 ${def_pos}7.62 0) (size 1.524 1.524) (drill 0.8128) (layers *.Cu *.SilkS *.Mask) ${p.net.P18.str})
        (pad 9 thru_hole circle (at 6.35 ${def_pos}7.62 0) (size 1.524 1.524) (drill 0.8128) (layers *.Cu *.SilkS *.Mask) ${p.net.P15.str})
        (pad 10 thru_hole circle (at 8.89 ${def_pos}7.62 0) (size 1.524 1.524) (drill 0.8128) (layers *.Cu *.SilkS *.Mask) ${p.net.P14.str})
        (pad 11 thru_hole circle (at 11.43 ${def_pos}7.62 0) (size 1.524 1.524) (drill 0.8128) (layers *.Cu *.SilkS *.Mask) ${p.net.P16.str})
        (pad 12 thru_hole circle (at 13.97 ${def_pos}7.62 0) (size 1.524 1.524) (drill 0.8128) (layers *.Cu *.SilkS *.Mask) ${p.net.P10.str})
        
        (pad 13 thru_hole circle (at -13.97 ${def_neg}7.62 0) (size 1.524 1.524) (drill 0.8128) (layers *.Cu *.SilkS *.Mask) ${p.net.P1.str})
        (pad 14 thru_hole circle (at -11.43 ${def_neg}7.62 0) (size 1.524 1.524) (drill 0.8128) (layers *.Cu *.SilkS *.Mask) ${p.net.P0.str})
        (pad 15 thru_hole circle (at -8.89 ${def_neg}7.62 0) (size 1.524 1.524) (drill 0.8128) (layers *.Cu *.SilkS *.Mask) ${p.net.GND.str})
        (pad 16 thru_hole circle (at -6.35 ${def_neg}7.62 0) (size 1.524 1.524) (drill 0.8128) (layers *.Cu *.SilkS *.Mask) ${p.net.GND.str})
        (pad 17 thru_hole circle (at -3.81 ${def_neg}7.62 0) (size 1.524 1.524) (drill 0.8128) (layers *.Cu *.SilkS *.Mask) ${p.net.P2.str})
        (pad 18 thru_hole circle (at -1.27 ${def_neg}7.62 0) (size 1.524 1.524) (drill 0.8128) (layers *.Cu *.SilkS *.Mask) ${p.net.P3.str})
        (pad 19 thru_hole circle (at 1.27 ${def_neg}7.62 0) (size 1.524 1.524) (drill 0.8128) (layers *.Cu *.SilkS *.Mask) ${p.net.P4.str})
        (pad 20 thru_hole circle (at 3.81 ${def_neg}7.62 0) (size 1.524 1.524) (drill 0.8128) (layers *.Cu *.SilkS *.Mask) ${p.net.P5.str})
        (pad 21 thru_hole circle (at 6.35 ${def_neg}7.62 0) (size 1.524 1.524) (drill 0.8128) (layers *.Cu *.SilkS *.Mask) ${p.net.P6.str})
        (pad 22 thru_hole circle (at 8.89 ${def_neg}7.62 0) (size 1.524 1.524) (drill 0.8128) (layers *.Cu *.SilkS *.Mask) ${p.net.P7.str})
        (pad 23 thru_hole circle (at 11.43 ${def_neg}7.62 0) (size 1.524 1.524) (drill 0.8128) (layers *.Cu *.SilkS *.Mask) ${p.net.P8.str})
        (pad 24 thru_hole circle (at 13.97 ${def_neg}7.62 0) (size 1.524 1.524) (drill 0.8128) (layers *.Cu *.SilkS *.Mask) ${p.net.P9.str})
      `
    }
    if(p.param.orientation == 'down') {
      return `
        ${standard}
        ${pins('-', '')})
        `
    } else {
      return `
        ${standard}
        ${pins('', '-')})
        `
    }
  }
}