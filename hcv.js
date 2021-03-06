/**
*
* The MIT License (MIT)
*
* Copyright (c) 2015-2017 GP2U Telehealth Australia
*
* Written by Dr James Freeman and Petr Shevtsov
*
* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:
*
* The above copyright notice and this permission notice shall be included in all
* copies or substantial portions of the Software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
* SOFTWARE.
*
*/

var version = '3.0';

var ratings = {
    classILevelA   : 'Class I, Level A',
    classILevelB   : 'Class I, Level B',
    classIILevelA  : 'Class II, Level A',
    classIILevelB  : 'Class II, Level B',
    classIIaLevelA : 'Class IIa, Level A',
    classIIaLevelB : 'Class IIa, Level B',
    classIIbLevelA : 'Class IIb, Level A',
    classIIbLevelB : 'Class IIb, Level B',
    classIIbLevelC : 'Class IIb, Level C',
    A1: 'A1 - High Quality Evidence, Strong Recommendation',
    A2: 'A2 - High Quality Evidence, Weak Recommendation',
    B1: 'B1 - Moderate Quality Evidence, Strong Recommendation',
    B2: 'B2 - Moderate Quality Evidence, Weak Recommendation',
    C1: 'C1 - Low Quality Evidence, Strong Recommendation',
    C2: 'C2 - Low Quality Evidence, Weak Recommendation'
}

var drugs = {
    sof: {
        generic: 'Sofosbuvir',
        dose: ['400mg'],
        brand: [
        'Solvadi',
        'Hopetavir (Incepta)',
        'Sofovir (Hetero)',
        'Hepcinat (Natco)',
        'Soforal (Beacon)',
        'Hepcvir (Cipla)',
        'Sofovir-C (Beximco)',
        'Hepcee (Julphar)',
        'MyHep (Mylan)'
        ],
        route: 'PO',
        freq: 'daily',
        notes: []
   },
    sof_led: {
        generic: 'Sofosbuvir/Ledipasvir',
        dose: ['400mg/90mg'],
        brand: [
        'Harvoni',
        'Twinvir (Incepta)',
        'Hepcvir-L (Cipla)',
        'Ledifos (Hetero)',
        'Hepcinat LP (Natco)',
        'Lesovir-C (Beximco)',
        'Combicee (Julphar)',
        'MyHep LVIR (Mylan)'
        ],
        route: 'PO',
        freq: 'daily',
        notes: ['In the ION-3 trial, patients without cirrhosis and a baseline HCV RNA levels less than 6 million IU/mL had similar relapse rates when treated with 8 weeks versus 12 weeks. Decreasing the length of the regimen to 8 weeks should be done with caution.'
        ]
    },
    sof_vel: {
        generic: 'Sofosbuvir/Velpatasvir',
        dose: ['400mg/100mg'],
        brand: [
        'Epclusa',
        'Sofosvel (Beacon)',
        'Panovir (Incepta)',
        'Velosof (Hetero)',
        'Velpanat (Natco)',
        'Hepcvel (Cipla)',
        'MyHep All (Mylan)'
        ],
        route: 'PO',
        freq: 'daily',
        notes: []
    },

    dac: {
        generic: 'Daclatasvir',
        dose: ['60mg','30mg'],
        brand: [
        'Daklinza',
        'Virodacla (Incepta)',
        'Daclahep (Hetero)',
        'Daclavir (Beacon)',
        'Daclacee (Julphar)'
        ],
        route: 'PO',
        freq: 'daily',
        notes: ['The dose of daclatasvir may need to be increased or decreased when used concomitantly with cytochrome P450 3A/4 inducers and inhibitors, respectively.',
            'Grapefruit, Paw Paw, Star Fruit and Pomegranate are potent inhibitors of CYP3A4 and should be avoided.'
        ]
    },
    riba: {
        generic: 'Ribavirin',
        dose: ['200mg','400mg','600mg'],
        brand: [
        'Ibavyr',
        'Celbarin (Incepta)',
        'Ribacee (Julphar)'
        ],
        route: 'PO',
        freq: 'daily divided into 2 doses',
        notes: []
    },
    viek: {
        generic: 'Paritaprevir/Ritonavir/Ombitasvir',
        dose: [ '75mg/50mg/12.5mg' ],
        brand: [ 'Viekira Pak' ],
        route: 'PO',
        freq: 'two tablets once daily',
        notes: ['Contraindicated in patients with Child-Turcotte-Pugh class B or C hepatic impairment.']
    },
    viekx: {
        generic: 'Dasabuvir',
        dose: [ '250mg' ],
        brand: [ 'Viekira Pak' ],
        route: 'PO',
        freq: 'twice daily',
        notes: []
    },
    zep: {
        generic: 'Grazoprevir/Elbasvir',
        dose: [ '100mg/50mg' ],
        brand: [ 'Zepatier' ],
        route: 'PO',
        freq: 'one tablet daily',
        notes: []
    },
    peg: {
        generic: 'PegInterferon-&alpha;2a',
        dose: [ '180&mu;g'],
        brand: [ 'Pegasys' ],
        route: 'SC',
        freq: 'weekly',
        notes: [
            'Treatment of chronic hepatitis C with PegIFN-a and ribavirin containing regimens is absolutely contra-indicated in the following patient groups: uncontrolled depression, psychosis or epilepsy; pregnant women or couples unwilling to comply with adequate contraception; severe concurrent medical diseases and comorbidities including retinal disease, autoimmune thyroid disease; decompensated liver disease.',
            'The use of PegIFN-a is not recommended in patients with absolute neutrophil counts &lt;1500/mm3 and/or platelet counts &lt;90,000/mm3.'
        ]
    },
    peg2b: {
        generic: 'PegInterferon-&alpha;2b',
        dose: [ '1.5&mu;g/kg'],
        brand: [ 'PegIntron' ],
        route: 'SC',
        freq: 'weekly',
        notes: []
    },
    sim: {
        generic: 'Simeprevir',
        dose: [ '150mg' ],
        brand: [ 'Olysio' ],
        route: 'PO',
        freq: 'daily',
        notes: ['Not recommended in patients who have a detectable Q80K substitution in the NS3 protease sequence at baseline, as assessed by population sequencing (direct sequence analysis)']
    }
};

var svrx = {
    
    gt1: {
        
        sof_led: {
            default: {
                svr: 97,
                trials: 'ION-1 98% (142/145) ION-3 96% 96% (165/172) Aggregate 96.8% (307/317)'
            },
            gt1a: {
                default: {
                    svr: 97,
                    trials: 'ION-1 98% (142/145) ION-3 96% 96% (165/172) Aggregate 96.8% (307/317)'
                }
            },
            gt1b: {
                default: {
                    svr: 99,
                    trials: 'ION-1 100% (67/67) ION-3 98% (43/44) Aggregate 99.1% (110/111)'
                }
            },
            f4: { 
                default: {
                    svr: 97,
                    trials: 'ION-1 97% (32/33)'
                },
                w12: {
                    svr: 97,
                    trials: 'ION-1 97% (32/33)'
                },
                w12riba: {
                    svr: 100,
                    trials: 'ION-1 100% (33/33)'
                },
                w24: {
                    svr: 97,
                    trials: 'ION-1 97% (31/32)'
                },
                w24riba: {
                    svr: 100,
                    trials: 'ION-1 100% (36/36)'
                }
            },
            fail: {
                default: {
                    svr: 94,
                    trials: 'ION-3 94% (102/109)'
                },
                w12: {
                    svr: 94,
                    trials: 'ION-3 94% (102/109)'
                }, 
                w12riba: { 
                    svr: 96,
                    trials: 'ION-3 96% (107/111)'
                }, 
                w24: {
                    svr: 99,
                    trials: 'ION-3 99% (108/109)'
                },
                w24riba: {
                    svr: 99,
                    trials: 'ION-3 99% (110/111)'
                }
            }

        },

        sof_vel: {
            default: {
                svr: 98,
                trials: 'ASTRAL-1 98% (323/328)'
            },
            gt1a: {
                default: {
                    svr: 98,
                    trials: 'ASTRAL-1 98% (206/210)'
                }
            },
            gt1b: {
                default: {
                    svr: 99,
                    trials: 'ASTRAL-1 99% (117/118)'
                }
            }
        },

        zep: {
            default: {
                svr: 97,
                trials: 'C-EDGE-TN GT1a 92% (144/157) GT1b 99% (129/131) C-EDGE-COINFECTION GT1a 97% (139/144) GT1b 95% (42/44) Aggregate 95.3% (454/476)'
            },
            gt1a: {
                default: {
                    svr: 94,
                    trials: 'C-EDGE-TN GT1a 92% (144/157) C-EDGE-COINFECTION GT1a 97% (139/144) Aggregate 94.0 (283/301)'
                }   
            },
            gt1b: {
                default: {
                    svr: 98,
                    trials: 'C-EDGE-TN GT1b 99% (129/131) C-EDGE-COINFECTION GT1b 95% (42/44) Aggregate 97.7% (454/175)'
                }   
            }
        },

        sof_dac: {
            default: {
                svr: 97,
                trials: 'ALLY-2  naive 96% (80/83) experienced 98% (43/44) Aggregate 96.8% (123/127)'
            },
            w24: {
                svr: 100,
                trials: 'AI444040 (24wk) 100% (44/44)'
            },
            gt1a: {
                default: {
                    svr: 96,
                    trials: 'ALLY-2 naive 96% (68/71) experienced 97% (32/33) Aggregate 96.2% (100/104)'
                }
            },
            gt1b: {
                default: {
                    svr: 100,
                    trials: 'ALLY-2 naive 100% (12/12) experienced 100% (11/11) Aggregate 100% (23/23)'
                }
            },
            f4: {
                default: {
                    svr: 91,
                    trials: 'ALLY-2 naive 89% (8/9) experienced 92% (12/13) Aggregate 90.9% (20/22)'
                },
            },
            fail: {
                default: {
                    svr: 98,
                    trials: 'ALLY-2 98% (43/44)'
                },
            }
        },

        sof_sim: {
            default: {
                svr: 89,
                trials: 'TARGET 2.0 89% (269/303) TRIO 90% (263/292) Aggregate 89.4% (532/595)'
            },
            gt1a: {
                default: {
                    svr: 91,
                    trials: 'TARGET 2.0 89% (47/53) TRIO 92% (79/86) Aggregate 90.6% (126/139)'
                }
            },
            gt1b: {
                default: {
                    svr: 96,
                    trials: 'TARGET 2.0 95% (88/93) TRIO 98% (39/40) Aggregate 95.5% (127/133)'
                }
            },
            f4: {
                w12: {
                    svr: 84,
                    trials: 'COSMOS 93% (13/14) TRIO 83% (110/133) Aggregate 83.7% (123/147)'
                },
                w12riba: {
                    svr: 93,
                    trials: 'COSMOS 96% (25/27)'
                },
                w24: {
                    svr: 100,
                    trials: 'COSMOS 100% (16/16)'
                },
                w24riba: {
                    svr: 93,
                    trials: 'COSMOS 93% (28/30)'
                }               
            },
            fail: {
                w12: {
                    svr: 88,
                    trials: 'COSMOS 93% (13/14) TRIO 87% (137/157) Aggregate 87.7% (150/171)'
                },
                w12riba: {
                    svr: 96,
                    trials: 'COSMOS 96% (26/27)'
                },
                w24: {
                    svr: 93,
                    trials: 'COSMOS 93% (14/15)'
                },
                w24riba: {
                    svr: 79,
                    trials: 'COSMOS 79% (19/24)'
                }
            }
        },

        viek_viekx: {
            default: {
                svr: 90,
                trials: 'PEARL-IV 90% (185/205)'
            },
            gt1a: {
                default: {
                    svr: 90,
                    trials: 'PEARL-IV 90% (185/205)'
                }
            },
            gt1b: {
                default: {
                    svr: 99,
                    trials: 'PEARL-III 99% (207/209)'
                }
            },
            f4: {},
            fail: {
                gt1b: {
                    svr: 100,
                    trials: 'PEARL-II 100% (91/91)'
                }
            }
        },

        viek_viekx_riba: {
            default: {
                svr: 96,
                trials: 'SAPHIRE-I 95% (307/322)// PEARL-IV 97% (97/100) Aggregate 95.7% (404/422)'
            },
            gt1a: {
                default: {
                    svr: 96,
                    trials: 'SAPHIRE-I 95% (307/322)// PEARL-IV 97% (97/100) Aggregate 95.7% (404/422)'
                }
            },
            gt1b: {
                default: {
                    svr: 99,
                    trials: 'SAPHIRE-I 98% (148/151) PEARL-III 99% (209/210) Aggregate 98.9% (357/361)'
                }
            },
            f4: {
                w12: {
                    default: {
                        svr: 92,
                        trials: 'TURQUOISE-II 92% (191/208)'
                    },
                    gt1a: {
                        svr: 89,
                        trials: 'TURQUOISE-II 12wk 89% (124/140)'
                    },
                    gt1b: {
                        svr: 99,
                        trials: 'TURQUOISE-II 12wk 99% (67/68) 24wk'
                    }
                },
                w24: {
                    default: {
                        svr: 96,
                        trials: 'TURQUOISE-II 96% (165/172)'
                    },
                    gt1a: {
                        svr: 92,
                        trials: 'TURQUOISE-II 94% (114/121)'
                    },
                    gt1b: {
                        svr: 98,
                        trials: 'TURQUOISE-II 12wk 98% (50/51)'
                    }
                }
            },
            fail: {
                default: {
                    svr: 96,
                    trials: 'SAPHIRE-II 96% (166/173)'
                },
                gt1a: {
                    svr: 96,
                    trials: 'SAPHIRE-II 96% (166/173)'
                },
                gt1b: {
                    svr: 97,
                    trials: 'SAPHIRE-II 97% (119/123) PEARL-II 97% (85/88)'
                }
            }
        },

        sof_peg_riba: {
            default: {
                svr: 87,
                trials: 'NEUTRINO 89% (259/291) TARGET2.0 90% (114/127) TRIO 81% (112/138) Aggregate  87.2% (485/556)'
            },
            gt1a: {
                default: {
                    svr: 92,
                    trials: 'NEUTRINO 92% (206/225)'
                }
            },
            gt1b: {
                default: {
                    svr: 82,
                    trials: 'NEUTRINO 82% (54/66)'
                }
            },
            f4: {
                default: {
                    svr: 77,
                    trials: 'NEUTRINO 80% (43/54) TARGET2.0 70% (26/37) TRIO 81% (25/31) Aggregate 77.0% (94/122)'
                }
            },
            fail: {
                default: {
                    svr: 77,
                    trials: 'TRIO 77% (30/39)'
                }, 
                f4: {
                    svr: 62,
                    trials: 'TRIO 62% (53/85)'
                }
            }
        },

        sim_peg_riba: {
            default: {
                svr: 80,
                trials: 'QUEST-1 80% (210/264) QUEST-2 81 (209/257) Aggregate  80.4% (419/521)'
            },
            gt1a: {
                default: {
                    svr: 84,
                    trials: 'QUEST-1 and QUEST-2 84% (138/165)'
                }
            },
            gt1b: {
                default: {
                    svr: 85,
                    trials: 'QUEST-1 and QUEST-2 85% (228/267)'
                }
            },
            f4: {
                default: {
                    svr: 60,
                    trials: 'QUEST-1 and QUEST-2  60% (29/48)'
                }
            },
            fail: {
                default: {
                    svr: 70,
                    trials: 'QUEST 70% (78/111)'
                },
                gt1a: {
                    svr: 70,
                    trials: 'QUEST 70% (78/111)'
                },
                gt1b: {
                    svr: 86,
                    trials: 'QUEST 86% (128/149)'
                }
            }
        }
    },
    
    
    gt2: {

        sof_riba: {
            default: {
                svr: 95,
                trials: 'FISSION 97% (58/59) FUSION (12wk) 96% (25/26) POSITRON 92% (85/92) VALENCE 97% (29/30) Aggregate 95.1% (197/207)'
            },
            w16: {
                svr: 100,
                trials: 'FUSION (16wk) 100% (23/23)'
            },
            f4: {
                default: {
                    svr: 83,
                    trials: 'FISSION 91% (10/11) FUSION (12wk) 60% (6/10) POSITRON 94% (16/17) VALENCE 100% (2/2) Aggregate 82.9% (34/41)'
                },
                w16: {
                    svr: 78,
                    trials: 'FUSION (16wk) 78% (7/9)'
                }
            },
            fail: {
                default: {
                    svr: 92,
                    trials: 'FUSION 92% (24/26) VALENCE 91% (30/33) Aggregate 91.5% (54/59)'
                },
                w16: {
                    svr: 96,
                    trials: 'FUSION 96% (23/24)'
                },
                f4: {
                    svr: 88,
                    trials: 'VALENCE (7/8)'
                }
            }
        },

        sof_peg_riba: {
            default: {
                svr: 95,
                trials: 'LONESTAR 96% (22/23) BOSON 94% (15/16) Aggregate 94.8% (37/39)'
            }
        },

        sof_dac: {
            default: {
                svr: 92,
                trials: 'UN-NAMED http://www.ncbi.nlm.nih.gov/pubmed/24428467 92% (24/26)'
            },
            w24: {
                svr: 96,
                trials: 'AI444040 (24wk) 96% (25/26)'
            }
        },

        sof_vel: {
            default: {
                svr: 99,
                trials: 'ASTRAL-2 99% (133/134) ASTRAL-5 (HIV coinfection) 100% (11/11)'
            }
        },
    },
    
    
    gt3: {

        sof_peg_riba: {
            default: {
                svr: 90,
                trials: 'UN-NAMED 90% (9/10) UN-NAMED 91% (20/22) BOSON 95% (117/123) Aggregate 94.1% (146/155)'
            },
            f4: {
                default: {
                    svr: 88,
                    trials: 'BOSON 88% (51/58)'
                }
            },
            fail: {
                default: {
                    svr: 91,
                    trials: 'BOSON 91% (79/87)'
                }
            }
        },

        sof_riba: {
            default: {
                svr: 88,
                trials: 'BOSON 24 weeks 88% (83/94) VALENCE 95% (87/92)'
            },
            w16: {
                svr: 71,
                trials: 'BOSON 71% (128/181)'
            },
            w24: {
                svr: 84,
                trials: 'BOSON 84% (153/182)'
            },
            f4: {
                default: {
                    svr: 81,
                    trials: 'BOSON 79% (44/56) VALENCE 92% (12/13) Aggregate 81.1% (56/69)'
                }
            },
            fail: {
                default: {
                    svr: 83,
                    trials: 'BOSON 80% (70/88) VALENCE 87% (85/98) Aggregate 83.3% (155/186)'
                },
                f4: {
                    svr: 62,
                    trials: 'VALENCE 62% (29/47)'
                }
            }
        },

        sof_dac: {
            // AASLD-2015 http://www.clinicaloptions.com/Hepatitis/Conference%20Coverage/AASLD%202015/Highlights/Capsules/206.aspx
            // Presented at AASLD Nov 2015
            default: {
                svr: 97,
                trials: 'UN-NAMED IIb (24wk) 89% (16/18) ALLY-3 97% (73/75) AASLD-2015 96% (24/25) Aggregate 97% (97/100)'
            },
            w24: {
                svr: 100,
                trials: 'AASLD-2015 100% (29/29)'
            },
            f4: {
                default: {
                    svr: 65,
                    trials: 'ALLY-3 58% (11/19) AASLD-2015 70% (23/33) Aggregate 65.4% (34/52)'
                },
                w24: {
                    svr: 90,
                    trials: 'AASLD-2015 86% (116/135) overall but Child-Pugh A 90% (90/100)'
                },
                riba24: {
                    svr: 81,
                    trials: 'AASL-2015 81% (39/48)'
                }
            },
            fail: {
                default: {
                    svr: 86,
                    trials: 'ALLY-3 94% (32/34) AASLD-2015 86% (89/103) (bias by F3/F4)'
                },
                f4: {
                    svr: 64,
                    trials: 'ALLY-3 69% (9/13)'
                }, 
                w24: {
                    svr: 86,
                    trials: 'AASLD-2015 86% (89/103)'
                },
                riba24: {
                    svr: 80,
                    trials: 'AASLD-2015 80% (28/35)'
                }
            }
        },

        sof_vel: {
            default: {
                svr: 97,
                trials: '96.7% ASTRAL-3 (268/277)'
            },
            f4: {
                default: {
                    svr: 91,
                    trials: 'ASTRAL-3 91% (31/34)'
                }
            },
            fail: {
                default: {
                    svr: 90,
                    trials: 'ASTRAL-3 90.1% (64/71)'
                },
                f4: {
                    svr: 89,
                    trials: 'ASTRAL-3 89% (33/37)'
                }
            }
        }         
    },
    
    gt4: {

        sof_riba: {
            default: {
                svr: 90,
                trials: 'NEUTRINO 96% (27/28) Egyption Ancestry Genotype 4 79% (11/14) Aggregate 90.4% (38/42)'
            },
            w24: {
                svr: 100,
                trials: 'Egyptian Ancestry Genotype 4 100% (14/14)'
            },
            fail: {
                default: {
                    svr: 59,
                    trials: 'Egyptian Ancestry Genotype 4 100% (10/17)'
                },
                w24: {
                    svr: 87,
                    trials: 'Egyptian Ancestry Genotype 4 100% (13/15)'
                }
            }
        },

        sof_peg_riba: {
            default: {
                svr: 90,
                trials: 'NEUTRINO 96% (27/28)'
            },
            f4: {
                default: {
                    svr: 90,
                    trials: 'No Trials'
                }
            },
            fail: {
                default: {
                    svr: 90,
                    trials: 'No Trials'
                }
            }
        },

        sim_peg_riba: {
            default: {
                svr: 83,
                trials: 'RESTORE 83% (29/35)'
            },
            fail: {
                default: {
                    svr: 86,
                    trials: 'RESTORE 86% (19/22)'
                }
            }
        },

        sof_led: {
            default: {
                svr: 97,
                trials: 'NIAID SYNERGY 100% (13/13) http://www.natap.org/2015/EASL/EASL_80.htm 96% (21/22) Aggregate 97.1% (34/35)'
            },
            f4: {
                default: {
                    svr: 100,
                    trials: 'NIAID SYNERGY 100% (7/7) http://www.natap.org/2015/EASL/EASL_80.htm 100% (10/10)'
                }
            },
            fail: {
                default: {
                    svr: 91,
                    trials: 'http://www.natap.org/2015/EASL/EASL_80.htm 91% (20/221'
                }
            }
        },

        viek_riba: {
            default: {
                svr: 100,
                trials: 'PEARL-I 100% (42/42)'
            },
            f4: {
                default: {
                    svr: 0,
                    trials: 'No Trials'
                }
            },
            fail: {
                default: {
                    svr: 100,
                    trials: 'PEARL-I 100% (49/49)'
                }
            }
        },

        sof_sim: {
            default: {
                svr: 100,
                trials: 'PLUTO 100% (40/40)'
            }
        },

        sof_dac: {
            default: {
                svr: 97,
                trials: 'Egyptian data in > 500,000 patients'
            }
        },

        sof_vel: {
            default: {
                svr: 100,
                trials: 'ASTRAL-1 100% (116/116)'
            }
        },

        zep: {
            default: {
                svr: 100,
                trials: 'C-EDGE-TN 100% (18/18)'
            }
        }
    },

    gt5: {

        sof_peg_riba: {
            default: {
                svr: 100,
                trials: 'NEUTRINO 100% (1/1)'
            }
        },

        sof_led: {
            default: {
                svr: 95,
                trials: 'http://www.natap.org/2015/EASL/EASL_80.htm 95% (20/21)'
            }
        },

        sof_dac: {
            default: {
                svr: 97,
                trials: 'No Trials - Based on GT1 extrapolation'
            }
        },

        sof_vel: {
            default: {
                svr: 97,
                trials: 'ASTRAL-1 97% (34/35)'
            }
        }
    },

    gt6: {

        sof_peg_riba: {
            default: {
                svr: 100,
                trials: 'NEUTRINO 100% GT6 (6/6)'
            },
            w24: {
                svr: 100,
                trials: 'ATOMIC 100% GT6 (5/5)'
            }
        },

        sof_led: {
            default: {
                svr: 96,
                trials: 'NCT01826981 96% GT6 (24/25)'
            }
        },

        sof_dac: {
            default: {
                svr: 97,
                trials: 'No Trials - Based on GT1 extrapolation'
            }
        },

        sof_vel: {
            default: {
                svr: 97,
                trials: 'ASTRAL-1 97% (34/35)'
            }
        }
    }
}

/**
 * Main entry point.
 * Parse and validate form values.
 * Call the actual calculations.
 */
function supportDecision () {

    $("#demographics").html('');
    $("#rx").html('');
    var h = {};
    h.genotype  = $("#genotype option:selected").text();
    h.fibrosis  = $("#fibrosis option:selected").text();
    h.harvoniCI = $("input[name=harvoniCI]:checked").val();
    h.guidelines= $("input[name=guidelines]:checked").val();
    h.past      = $("#past option:selected").val();
    h.pastTxt    = $("#past option:selected").text();
    h.riba      = $("#riba:checked").length == 1 ? true : false;
    h.platelets = parseInt($("#platelets").val());
    h.weight    = $("input[name=weight]:checked").val();
    h.eGFR      = $("#eGFR").val();
    h.eGFR      = h.eGFR.replace('>','');
    h.eGFR      = parseInt(h.eGFR);
    h.locale    = h.guidelines == 'AASLD' ? 'en-US' : h.guidelines == 'EASL' ? 'en-GB' : 'en-AU';

    var error = '';
    var errorFocus = ''
    if (h.genotype  == '' ) { 
        error += 'Please select Genotype<br>'; 
        if (errorFocus == '') errorFocus = '#genotype' 
    }
    if (h.fibrosis  == '' ) { 
        error += 'Please select Fibrosis<br>'; 
        if (errorFocus == '') errorFocus = '#fibrosis' 
    }
    if (h.pastTxt   == '' ) { 
        error += 'Please select Past Treament<br>'; 
        if (errorFocus == '') errorFocus = '#past' 
    }
    if (h.harvoniCI === undefined && ! ( h.genotype.match(/2/) || h.genotype.match(/3/) ) ) { 
        error += 'Please select Harvoni CI<br>'; 
        if (errorFocus == '') errorFocus = '#harvoniCI' 
    }
    if (h.riba) {
        if (isNaN(h.platelets)) { 
            error += 'Please input Platelets<br>'; 
            if (errorFocus == '') errorFocus = '#platelets' 
        }
        if (typeof h.weight === "undefined") { 
            error += 'Please select Weight<br>'; 
            if (errorFocus == '') errorFocus = '#weight' 
        }
        if (isNaN(h.eGFR)) { 
            error += 'Please input eGFR<br>'; 
            if (errorFocus == '') errorFocus = '#eGFR' 
        }
    }
    if (error != '') {
        errorDialog(error,errorFocus)
        setTimeout(function(){$("#demographics").html(redText(error))},1000);      
        return;
    }

    h.f4        = h.fibrosis.match(/F4/);
    h.fail      = (h.past == 'naive' || h.past == 'PEG' ) ? false : true;
    h.harvoniCI = (h.harvoniCI == 'yes') ? true : false;

    // visual feedback to user
    blockMessage('Calculating...',500);
    $("#calculate").val('Recalculate');
    setTimeout(function(){doCalculation(h)},450);
}

/**
 * Call render commands.
 * Change the UI to show results.
 * @param {Object} h
 */
function doCalculation (h) {

    renderDemographics(h);
    renderRx(h);
    var offset = $('#resultsHR').offset();
    $('html,body').animate({scrollTop: offset.top});
}

/**
 * Render demographics data.
 * @param {Object} h
 */
function renderDemographics(h) {

    var demographics = 'Guidelines:     ' + h.guidelines + '\n' +
                       'Genotype:       ' + h.genotype   + '\n' +
                       'Fibrosis:       ' + h.fibrosis   + '\n' + 
                       'Past Treatment: ' + h.pastTxt    + '\n' +
                       'Past Failure:   ' + h.fail       + '\n' +
                       'Harvoni CI:     ' + h.harvoniCI  + '\n' +
                       'Ribavirin:      ' + h.riba       + '\n';
    if ( h.riba ) {
        demographics += 
                       'Platelets:      ' + h.platelets      + '\n' +
                       'Weight:         ' + h.weight + ' kg' + '\n' +
                       'eGFR:           ' + $("#eGFR").val() + '\n';
    }
    var d = new Date();
    demographics = '<p><b>HCV Decision Support v' + version + ' ' + d.toLocaleString(h.locale) + '</b></p><pre>' + demographics + '</pre>';
    $("#demographics").html(demographics);
} 

/**
 * Render medical prescription.
 * @param {Object} h
 */
function renderRx(h) {

    h.rx = [];
    getRxOptions(h);
    var html = '';
    // display by descending SVR
    h.rx.sort(function(a, b){return b.svr-a.svr});

    for ( var m in h.rx ) {
        var svrOdds = Math.round(100/(100-h.rx[m].svr)) - 1;
        var days = h.rx[m].duration == 24 ? '84 days + 1 repeat' : '84 days + no repeats';
        var medication = '';
        for ( var d in h.rx[m].medication ) {
            var drug = h.rx[m].medication[d];
            if ( parseInt(d) > 0 ) medication += drug.optional ? ' &plusmn; ' : ' + ';
            //alert(JSON.stringify(drug));
            medication += drug.generic + ' (' + drug.brand[0] + ') ' + drug.dose[0] + ' ' + drug.route +', ' + drug.freq;
            var drugSort = drug.brand.slice();
            drugSort.sort();
            h.rx[m].notes.push( '<b>' + drug.generic + ' brand names: </b>' + drugSort.join(', '));
        }
        html += '<hr>' +
                '<b>Medications: </b>'  + medication + '<br>' +
                '<b>Duration: </b>'     + h.rx[m].duration + ' weeks (' + days + ')<br>' +
                '<b>Expected SVR: </b>' + h.rx[m].svr + '% (Odds of SVR are '  + svrOdds + ':1)<br>' +
                '<b>Trials: </b>'       + h.rx[m].trials + '<br>';

        if (typeof h.rx[m].rating !== 'undefined') html += '<b>Rating:</b> <a href="javascript:evidence()">' + h.rx[m].rating + '</a><br>';

        h.rx[m].notes.unshift('Check for interactions using <a href="http://www.hep-druginteractions.org/checker" target="_new">http://www.hep-druginteractions.org/checker</a>');
        html += '<br><div class="notes"><b>Notes:</b><ol>';
        for (var i in h.rx[m].notes) {
            html += '<li>' + h.rx[m].notes[i] + '</li>';
        }
        html += '</ol></div>';
    }
    html += '<div id="print"><hr><input type="button" value="Print" onclick="window.print()"> <input type="button" value="Show Trial Data" onclick="showTrialData()"> </div>'
    html += '<div id="data" class="notes hidden">' + getTrialData(h) + '</div>';
    $("#rx").html(html);
}

/**
 * Change the UI to show results.
 */
function showTrialData () {
    $('#data').show();
    var offset = $('#data').offset();
    $('html,body').animate({scrollTop: offset.top-10});
}

/**
 * Get trial data.
 * @param {Object} h
 */
function getTrialData(h) {
   
    var gt = '';
    var re = /([1-6])/;
    if ( h.genotype.match(/1/) ) gt = 'gt1';
    if ( h.genotype.match(/2/) ) gt = 'gt2';   
    if ( h.genotype.match(/3/) ) gt = 'gt3';
    if ( h.genotype.match(/4/) ) gt = 'gt4';
    if ( h.genotype.match(/5/) ) gt = 'gt5';
    if ( h.genotype.match(/6/) ) gt = 'gt6';
    if (gt == '' ) return '';
    var match = re.exec(h.genotype);
    var html = '<h2 class="data-heading">Trials Data For Genotype ' + match[1] + '<h2><hr>'
    for (var key in svrx[gt]) {
        var meds = key;
        meds = meds.replace(/_/g,' ');
        meds = meds.replace('sof','Sofosbuvir');
        meds = meds.replace('led','Ledipasvir');
        meds = meds.replace('vel','Velpatasvir');
        meds = meds.replace('zep','Grazoprevir Elbasvir');
        meds = meds.replace('dac','Daclatasvir');
        meds = meds.replace('sim','Simeprevir');
        meds = meds.replace('peg','PegIFN-&alpha;');
        meds = meds.replace('viek','Paritaprevir Ritonavir Ombitasvir');
        meds = meds.replace('viekx','Dasabuvir');
        meds = meds.replace('riba','Ribavirin');
        html += "<h3>" + meds + "</h3><b>NAIVE</b><br>" + data2string(svrx[gt][key]);
    } 
    html = html.replace(/<br><br>/g,'<br>');
    html = html.replace(/<br>,/g,'<br>');
    html = html.replace(/,/g,', ');
    return html; 
}

/**
 * Stringify data object.
 * @param {Object} obj
 */
function data2string(obj) {

    if ( typeof(obj) != "object" || obj === null) {
        return String(obj);
    } else {
        var n, v, data = [];
        for (n in obj) {
            if ( n == 'rating') continue;
            v = obj[n];
            if (obj.hasOwnProperty(n)) {
                if (typeof(v) == "object" && v !== null){
                    v = data2string(v);  // recurse
                }
                if ( n == 'f4' || n == 'fail' ) {
                    data.push( '<b>' + n.toUpperCase() + '</b><br>' + String(v) );
                }
                else if ( n == 'svr' ) {
                    data.push( n + ': ' + String(v) + '%' );
                }
                else {
                    data.push( n + ': ' + String(v) );
                }
            }
        }
        return String(data) + "<br>";
    }
}

/**
 * Get medical prescription options.
 * @param {Object} h
 */
function getRxOptions(h) {

    if (h.guidelines == 'AUS') {
        if ( h.genotype.match(/1/) ) rxGT1AUS(h);
        if ( h.genotype.match(/2/) ) rxGT2AUS(h);   
        if ( h.genotype.match(/3/) ) rxGT3AUS(h);
        if ( h.genotype.match(/4/) ) rxGT4AUS(h);
        if ( h.genotype.match(/5/) ) rxGT5AUS(h);
        if ( h.genotype.match(/6/) ) rxGT6AUS(h);       
    }
    else if (h.guidelines == 'EASL') {
        if ( h.genotype.match(/1/) ) rxGT1EASL(h);
        if ( h.genotype.match(/2/) ) rxGT2EASL(h);   
        if ( h.genotype.match(/3/) ) rxGT3EASL(h);
        if ( h.genotype.match(/4/) ) rxGT4EASL(h);
        if ( h.genotype.match(/5/) ) rxGT5EASL(h);
        if ( h.genotype.match(/6/) ) rxGT6EASL(h); 
    }
    else if (h.guidelines == 'AASLD') {
        if ( h.genotype.match(/1/) ) rxGT1AASLD(h);
        if ( h.genotype.match(/2/) ) rxGT2AASLD(h);   
        if ( h.genotype.match(/3/) ) rxGT3AASLD(h);
        if ( h.genotype.match(/4/) ) rxGT4AASLD(h);
        if ( h.genotype.match(/5/) ) rxGT5AASLD(h);
        if ( h.genotype.match(/6/) ) rxGT6AASLD(h); 
    }
    else {
        alert('OMG, the flux capacitor has imploded!');
    }

}


/*
*
*
*
* AUS Treatment Protocols
*
*
*
*/

/**
 * Medical prescription options for HCV genotype 1 
 * according to AUS Treatment Protocols.
 * @param {Object} h
 */
function rxGT1AUS (h) {

    // sof dac
    h.rx.unshift({ 
        medication:[ drugs.sof, drugs.dac ], 
        duration: 12,
        svr:    svrx.gt1.sof_dac.default.svr,
        trials: svrx.gt1.sof_dac.default.trials,
        notes: []
    });
    pushNotes(h.rx[0]);
    if ( h.past == 'PROTEASE' ) {
        h.rx[0].duration = 24;
        h.rx[0].svr    = svrx.gt1.sof_dac.fail.default.svr;
        h.rx[0].trials = svrx.gt1.sof_dac.fail.default.trials;
        h.rx[0].notes.push('24 weeks recommended for patients who have failed a protease inhibitor');
    }
    if ( h.f4 ) {
        h.rx[0].svr    = svrx.gt1.sof_dac.f4.default.svr;
        h.rx[0].trials = svrx.gt1.sof_dac.f4.default.trials;
        if ( h.past != 'PROTEASE' ) {
            h.rx[0].notes.push(redText('Consider adding Ribavirin or extending treatment to 24 weeks'));
        }
    }

    // viekira pak
    h.rx.unshift({
        medication: [ drugs.viek, drugs.viekx ],
        duration: 12,
        svr:    svrx.gt1.viek_viekx.gt1b.default.svr,
        trials: svrx.gt1.viek_viekx.gt1b.default.trials,
        notes: []
    });
    pushNotes(h.rx[0]);
    if ( ! h.genotype.match(/1b/)) {
        addRiba(h,false);
        h.rx[0].svr    = svrx.gt1.viek_viekx_riba.gt1a.default.svr;
        h.rx[0].trials = svrx.gt1.viek_viekx_riba.gt1a.default.trials;
    }

    // harvoni
    h.rx.unshift({
        medication: [ drugs.sof_led ],
        duration: 12,
        svr:    svrx.gt1.sof_led.default.svr,
        trials: svrx.gt1.sof_led.default.trials,
        notes: []
    });
    hasHarvoniCI(h);
    pushNotes(h.rx[0]);
    if ( h.genotype.match(/1b/)) {
        h.rx[0].svr    = svrx.gt1.sof_led.gt1b.default.svr;
        h.rx[0].trials = svrx.gt1.sof_led.gt1b.default.trials
    }
    if ( h.f4 && h.fail ) {
        h.rx[0].duration = 24;
        h.rx[0].svr    = svrx.gt1.sof_led.fail.w24.svr;
        h.rx[0].trials = svrx.gt1.sof_led.fail.w24.trials;
        h.rx[0].notes.push('12 weeks + Ribavirin may be considered');
    }
    if ( ! h.fail && ! h.f4 ) {
        h.rx[0].notes.push('8 weeks may be considered if HCV RNA < 6 x 10^6 IU/ml');
    }
    // zep
    h.rx.unshift({
        medication: [ drugs.zep ],
        duration: 12,
        svr:    svrx.gt1.zep.default.svr,
        trials: svrx.gt1.zep.default.trials,
        rating: ratings.A1,
        notes: []
    });
    pushNotes(h.rx[0]);

    if ( h.genotype.match(/1a/) ) {
        h.rx[0].svr    = svrx.gt1.zep.gt1a.default.svr;
        h.rx[0].trials = svrx.gt1.zep.gt1a.default.trials;
    }
    if ( h.genotype.match(/1b/) ) {
        h.rx[0].svr    = svrx.gt1.zep.gt1b.default.svr;
        h.rx[0].trials = svrx.gt1.zep.gt1b.default.trials;
    }  
}

/**
 * Medical prescription options for HCV genotype 2 
 * according to AUS Treatment Protocols.
 * @param {Object} h
 */
function rxGT2AUS (h) {

    // sof riba
    h.rx.unshift({
        medication: [ drugs.sof ],
        duration: 12,
        svr:    svrx.gt2.sof_riba.default.svr,
        trials: svrx.gt2.sof_riba.default.trials,
        notes: []
    });
    pushNotes(h.rx[0]);
    addRiba(h);
    if ( h.f4  || h.fail ) {
        if ( h.f4 ) {
            h.rx[0].svr    = svrx.gt2.sof_riba.f4.default.svr;
            h.rx[0].trials = svrx.gt2.sof_riba.f4.default.trials;
        } 
        else {
            h.rx[0].svr    = svrx.gt2.sof_riba.fail.default.svr;
            h.rx[0].trials = svrx.gt2.sof_riba.fail.default.trials;
        } 
        h.rx[0].notes.push(redText('SVR rates may be increased by extending duration to 16-24 weeks'));
    }
}

/**
 * Medical prescription options for HCV genotype 3 
 * according to AUS Treatment Protocols.
 * @param {Object} h
 */
function rxGT3AUS (h) {

    // sof dac
    h.rx.unshift({ 
        medication:[ drugs.sof, drugs.dac ], 
        duration: 12,
        svr:    svrx.gt3.sof_dac.default.svr,
        trials: svrx.gt3.sof_dac.default.trials,
        notes: [] 
    });
    pushNotes(h.rx[0]);
    if ( h.f4 ) {
        h.rx[0].duration = 24;
        h.rx[0].svr    = svrx.gt3.sof_dac.f4.w24.svr;
        h.rx[0].trials = svrx.gt3.sof_dac.f4.w24.trials;
    }

    // sof riba
    h.rx.unshift({
        medication: [ drugs.sof ],
        duration: 24,
        svr:    svrx.gt3.sof_riba.default.svr,
        trials: svrx.gt3.sof_riba.default.trials,
        notes: []
    });
    pushNotes(h.rx[0]);
    addRiba(h);
    if ( h.f4 ) {
        h.rx[0].duration = 24;
        h.rx[0].svr    = svrx.gt3.sof_riba.f4.default.svr;
        h.rx[0].trials = svrx.gt3.sof_riba.f4.default.trials;
    }

    // sof peg riba
    h.rx.unshift({
        medication: [ drugs.sof, drugs.peg ],
        duration: 12,
        svr:    svrx.gt3.sof_peg_riba.default.svr,
        trials: svrx.gt3.sof_peg_riba.default.trials,
        notes: []
    });
    pushNotes(h.rx[0]);
    addRiba(h);    
}

/**
 * Medical prescription options for HCV genotype 4 
 * according to AUS Treatment Protocols.
 * @param {Object} h
 */
function rxGT4AUS (h) {

    // sof peg riba
    h.rx.unshift({
        medication: [ drugs.sof, drugs.peg ],
        duration: 12,
        svr:    svrx.gt4.sof_peg_riba.default.svr,
        trials: svrx.gt4.sof_peg_riba.default.trials,
        notes: []
    });
    pushNotes(h.rx[0]);
    addRiba(h);

    // sim peg riba
    h.rx.unshift({
        medication: [ drugs.sim, drugs.peg ],
        duration: 48,
        svr:    svrx.gt4.sim_peg_riba.default.svr,
        trials: svrx.gt4.sim_peg_riba.default.trials,
        notes: [ 'Duration 24-48 weeks']
    });
    pushNotes(h.rx[0]);
    addRiba(h);
}

/**
 * Medical prescription options for HCV genotype 5 
 * according to AUS Treatment Protocols.
 * @param {Object} h
 */
function rxGT5AUS (h) {

    // sof peg riba
    h.rx.unshift({
        medication: [ drugs.sof, drugs.peg ],
        duration: 12,
        svr:    svrx.gt5.sof_peg_riba.default.svr,
        trials: svrx.gt5.sof_peg_riba.default.trials,
        notes: []
    });
    pushNotes(h.rx[0]);
    addRiba(h); 
}

/**
 * Medical prescription options for HCV genotype 6 
 * according to AUS Treatment Protocols.
 * @param {Object} h
 */
function rxGT6AUS (h) {

    // sof peg riba
    h.rx.unshift({
        medication: [ drugs.sof, drugs.peg ],
        duration: 12,
        svr:    svrx.gt6.sof_peg_riba.default.svr,
        trials: svrx.gt6.sof_peg_riba.default.trials,
        notes: []
    });
    pushNotes(h.rx[0]);
    addRiba(h);    
}

/*
*
*
*
* EASL 2016
*
*
*
*/


/**
 * Medical prescription options for HCV genotype 1 
 * according to EASL 2016 recommendations.
 * @param {Object} h
 */
function rxGT1EASL (h) {

    // sof peg riba
    h.rx.unshift({
        medication: [ drugs.sof, drugs.peg ],
        duration: 12,
        svr:    svrx.gt1.sof_peg_riba.default.svr,
        trials: svrx.gt1.sof_peg_riba.default.trials,
        rating: ratings.A1,
        notes: []
    });
    pushNotes(h.rx[0]);
    addRiba(h);
    if ( h.genotype.match(/1a/) ) {
        h.rx[0].svr    = svrx.gt1.sof_peg_riba.gt1a.default.svr;
        h.rx[0].trials = svrx.gt1.sof_peg_riba.gt1a.default.trials;
    }
    if ( h.genotype.match(/1b/) ) {
        h.rx[0].svr    = svrx.gt1.sof_peg_riba.gt1b.default.svr;
        h.rx[0].trials = svrx.gt1.sof_peg_riba.gt1b.default.trials;
    }
    if ( h.f4 ) {
        h.rx[0].svr    = svrx.gt1.sof_peg_riba.f4.default.svr;
        h.rx[0].trials = svrx.gt1.sof_peg_riba.f4.default.trials;
    }
    if ( h.fail ) {
        if ( h.f4) {
            h.rx[0].svr    = svrx.gt1.sof_peg_riba.fail.f4.svr;
            h.rx[0].trials = svrx.gt1.sof_peg_riba.fail.f4.trials;
        }
        else {
            h.rx[0].svr    = svrx.gt1.sof_peg_riba.fail.default.svr; 
            h.rx[0].trials = svrx.gt1.sof_peg_riba.fail.default.trials;  
        }   
    }

    // sim peg riba
    h.rx.unshift({
        medication: [ drugs.sim, drugs.peg ],
        duration: 12,
        svr:    svrx.gt1.sim_peg_riba.default.svr,
        trials: svrx.gt1.sim_peg_riba.default.trials,
        rating: ratings.A1,
        notes: [ 'HCV RNA levels should be monitored on treatment. Treatment should be stopped if HCV RNA level is ≥25 IU/ml at treatment week 4, week 12 or week 24 (A2)']
    });
    pushNotes(h.rx[0]);
    addRiba(h);
    if ( h.genotype.match(/1a/) ) {
        h.rx[0].svr    = svrx.gt1.sim_peg_riba.gt1a.default.svr;
        h.rx[0].trials = svrx.gt1.sim_peg_riba.gt1a.default.trials;
    }
    if ( h.genotype.match(/1b/) ) {
        h.rx[0].svr    = svrx.gt1.sim_peg_riba.gt1b.default.svr;
        h.rx[0].trials = svrx.gt1.sim_peg_riba.gt1b.default.trials;
    }
    if ( h.f4 ) {
        h.rx[0].svr    = svrx.gt1.sim_peg_riba.f4.default.svr;
        h.rx[0].trials = svrx.gt1.sim_peg_riba.f4.default.trials;
    }
    if ( h.fail && ! h.f4 ) {
        if ( h.genotype.match(/1a/) ) {
            h.rx[0].svr    = svrx.gt1.sim_peg_riba.fail.gt1a.svr;
            h.rx[0].trials = svrx.gt1.sim_peg_riba.fail.gt1a.trials;
        }
        else if ( h.genotype.match(/1b/) ) {
            h.rx[0].svr    = svrx.gt1.sim_peg_riba.fail.gt1b.svr;
            h.rx[0].trials = svrx.gt1.sim_peg_riba.fail.gt1b.trials;
        }
        else {
            h.rx[0].svr    = svrx.gt1.sim_peg_riba.fail.default.svr;
            h.rx[0].trials = svrx.gt1.sim_peg_riba.fail.default.trials;   
        }

    }

    // sof_led
    h.rx.unshift({
        medication: [ drugs.sof_led ],
        duration: 12,
        svr:    svrx.gt1.sof_led.default.svr,
        trials: svrx.gt1.sof_led.default.trials,
        rating: ratings.A1,
        notes: []
    });
    hasHarvoniCI(h);
    pushNotes(h.rx[0]);

    if ( h.genotype.match(/1a/) ) {
        h.rx[0].svr    = svrx.gt1.sof_led.gt1a.default.svr;
        h.rx[0].trials = svrx.gt1.sof_led.gt1a.default.trials;
    }
    if ( h.genotype.match(/1b/) ) {
        h.rx[0].svr    = svrx.gt1.sof_led.gt1b.default.svr;
        h.rx[0].trials = svrx.gt1.sof_led.gt1b.default.trials;
    }
    if ( h.f4 ) {
        addRiba(h);
        if ( negativePredictorsOfResponse(h) ) {
            h.rx[0].duration = 24;
            h.rx[0].rating = ratings.B1;
            h.rx[0].svr    = svrx.gt1.sof_led.fail.w24riba.svr;
            h.rx[0].trials = svrx.gt1.sof_led.fail.w24riba.trials;
        }
        else {
            h.rx[0].svr    = svrx.gt1.sof_led.f4.w12riba.svr;
            h.rx[0].trials = svrx.gt1.sof_led.f4.w12riba.trials;
        }
        h.rx[0].notes.push(noRiba24weeks(svrx.gt1.sof_led.f4.w24.svr,svrx.gt1.sof_led.f4.w24.trials));
    }

    // viek and viek riba
    h.rx.unshift({
        medication: [ drugs.viek, drugs.viekx ],
        duration: 12,
        svr:    svrx.gt1.viek_viekx.default.svr,
        trials: svrx.gt1.viek_viekx.default.trials,
        rating: ratings.A1,
        notes: []
    });
    pushNotes(h.rx[0]);

    if ( h.genotype.match(/1b/)) {
        h.rx[0].svr    = svrx.gt1.viek_viekx.gt1b.default.svr;
        h.rx[0].trials = svrx.gt1.viek_viekx.gt1b.default.trials;
        if ( h.f4 ) {
            addRiba(h); 
            h.rx[0].svr    = svrx.gt1.viek_viekx_riba.f4.w12.gt1b.svr; 
            h.rx[0].trials = svrx.gt1.viek_viekx_riba.f4.w12.gt1b.trials;           
        }
        else if ( h.fail) {
            addRiba(h); 
            h.rx[0].svr    = svrx.gt1.viek_viekx_riba.fail.gt1b.svr; 
            h.rx[0].trials = svrx.gt1.viek_viekx_riba.fail.gt1b.trials;            
        }
    }
    else {
        addRiba(h);
        h.rx[0].svr    = svrx.gt1.viek_viekx_riba.gt1a.default.svr;
        h.rx[0].trials = svrx.gt1.viek_viekx_riba.gt1a.default.trials;
        if ( h.f4 ) {
            h.rx[0].duration = 24;
            h.rx[0].svr    = svrx.gt1.viek_viekx_riba.f4.w24.gt1a.svr;
            h.rx[0].trials = svrx.gt1.viek_viekx_riba.f4.w24.gt1a.trials;
        }
        else if ( h.fail) {
            h.rx[0].svr    = svrx.gt1.viek_viekx_riba.fail.gt1a.svr; 
            h.rx[0].trials = svrx.gt1.viek_viekx_riba.fail.gt1a.trials;             
        }
    }

    // sof sim
    h.rx.unshift({
        medication: [ drugs.sof, drugs.sim ],
        duration: 12,
        svr:    svrx.gt1.sof_sim.default.svr,
        trials: svrx.gt1.sof_sim.default.trials,
        rating: ratings.A1,
        notes: []
    });
    pushNotes(h.rx[0]);

    if ( h.genotype.match(/1b/) ) {
        h.rx[0].svr    = svrx.gt1.sof_sim.gt1b.default.svr;
        h.rx[0].trials = svrx.gt1.sof_sim.gt1b.default.trials;
    }
    else {
        h.rx[0].svr    = svrx.gt1.sof_sim.gt1a.default.svr; 
        h.rx[0].trials = svrx.gt1.sof_sim.gt1a.default.trials;        
    }
    if ( h.fail ) {
        h.rx[0].svr    = svrx.gt1.sof_sim.fail.w12.svr;
        h.rx[0].trials = svrx.gt1.sof_sim.fail.w12.trials;
    }
    if ( h.f4 ) {
        addRiba(h);
        h.rx[0].svr    = svrx.gt1.sof_sim.f4.w12riba.svr;
        h.rx[0].trials = svrx.gt1.sof_sim.f4.w12riba.trials;
        h.rx[0].rating = ratings.B1;
        h.rx[0].notes.push(noRiba24weeks(svrx.gt1.sof_sim.f4.w24.svr,svrx.gt1.sof_sim.f4.w24.trials));
    }

    // sof dac
    h.rx.unshift({
        medication: [ drugs.sof, drugs.dac ],
        duration: 12,
        svr:    svrx.gt1.sof_dac.default.svr,
        trials: svrx.gt1.sof_dac.default.trials,
        rating: ratings.A1,
        notes: []
    });
    pushNotes(h.rx[0]);

    if ( h.genotype.match(/1b/) ) {
        h.rx[0].svr    = svrx.gt1.sof_dac.gt1b.default.svr;
        h.rx[0].trials = svrx.gt1.sof_dac.gt1b.default.trials;
    }
    else {
        h.rx[0].svr    = svrx.gt1.sof_dac.gt1a.default.svr;  
        h.rx[0].trials = svrx.gt1.sof_dac.gt1a.default.trials;      
    }
    if ( h.f4 ) {
        addRiba(h);
        h.rx[0].svr    = svrx.gt1.sof_dac.f4.default.svr;
        h.rx[0].trials = svrx.gt1.sof_dac.f4.default.trials;
        h.rx[0].rating = ratings.B1;
        h.rx[0].notes.push(noRiba24weeks(svrx.gt1.sof_led.f4.default.svr,svrx.gt1.sof_led.f4.default.trials));
    }

    // sof_vel
    h.rx.unshift({
        medication: [ drugs.sof_vel ],
        duration: 12,
        svr:    svrx.gt1.sof_vel.default.svr,
        trials: svrx.gt1.sof_vel.default.trials,
        rating: ratings.A1,
        notes: []
    });
    pushNotes(h.rx[0]);

    if ( h.genotype.match(/1a/) ) {
        h.rx[0].svr    = svrx.gt1.sof_vel.gt1a.default.svr;
        h.rx[0].trials = svrx.gt1.sof_vel.gt1a.default.trials;
    }
    if ( h.genotype.match(/1b/) ) {
        h.rx[0].svr    = svrx.gt1.sof_vel.gt1b.default.svr;
        h.rx[0].trials = svrx.gt1.sof_vel.gt1b.default.trials;
    }

    // zep
    h.rx.unshift({
        medication: [ drugs.zep ],
        duration: 12,
        svr:    svrx.gt1.zep.default.svr,
        trials: svrx.gt1.zep.default.trials,
        rating: ratings.A1,
        notes: []
    });
    pushNotes(h.rx[0]);

    if ( h.genotype.match(/1a/) ) {
        h.rx[0].svr    = svrx.gt1.zep.gt1a.default.svr;
        h.rx[0].trials = svrx.gt1.zep.gt1a.default.trials;
    }
    if ( h.genotype.match(/1b/) ) {
        h.rx[0].svr    = svrx.gt1.zep.gt1b.default.svr;
        h.rx[0].trials = svrx.gt1.zep.gt1b.default.trials;
    }

}

/**
 * Medical prescription options for HCV genotype 2 
 * according to EASL 2016 recommendations.
 * @param {Object} h
 */
function rxGT2EASL (h) {

    // sof riba
    h.rx.unshift({
        medication: [ drugs.sof ],
        duration: 12,
        svr:    svrx.gt2.sof_riba.default.svr,
        trials: svrx.gt2.sof_riba.default.trials,
        rating: ratings.A1,
        notes: []
    });
    pushNotes(h.rx[0]);
    addRiba(h);

    if ( h.f4 || h.fail ) {
        if ( h.f4 ) {
            h.rx[0].svr    = svrx.gt2.sof_riba.f4.default.svr;
            h.rx[0].trials = svrx.gt2.sof_riba.f4.default.trials;
        }
        else {
            h.rx[0].svr    = svrx.gt2.sof_riba.fail.default.svr;
            h.rx[0].trials = svrx.gt2.sof_riba.fail.default.trials;
        }
        h.rx[0].rating = ratings.B1;
        h.rx[0].duration = 16;
        h.rx[0].notes.push(greenText('Therapy should be prolonged to 16 or 20 weeks in patients with cirrhosis, especially if they are treatment experienced.'));
    }

    // sof peg riba
    if ( h.f4 || h.fail ) {
        h.rx.unshift({
            medication: [ drugs.sof, drugs.peg ],
            duration: 12,
            svr:    svrx.gt2.sof_peg_riba.default.svr,
            trials: svrx.gt2.sof_peg_riba.default.trials,
            rating: ratings.B1,
            notes: []
        });
        pushNotes(h.rx[0]);
        addRiba(h);
    }

    // sof dac
        if ( h.f4 || h.fail ) {
        h.rx.unshift({
            medication: [ drugs.sof, drugs.dac ],
            duration: 12,
            svr:    svrx.gt2.sof_dac.default.svr,
            trials: svrx.gt2.sof_dac.default.trials,
            rating: ratings.B1,
            notes: []
        });
        pushNotes(h.rx[0]);
        pushNotes(greenText('In AI444040 96% (25/26) patients achieved SVR12 after 24 weeks treatment.'));
    }
}

/**
 * Medical prescription options for HCV genotype 3 
 * according to EASL 2016 recommendations.
 * @param {Object} h
 */
function rxGT3EASL (h) {

    // sof peg riba
    h.rx.unshift({
        medication: [ drugs.sof, drugs.peg ],
        duration: 12,
        svr:    svrx.gt3.sof_peg_riba.default.svr,
        trials: svrx.gt3.sof_peg_riba.default.trials,
        rating: ratings.B1,
        notes: []
    });
    pushNotes(h.rx[0]);
    addRiba(h);

    // sof riba
    h.rx.unshift({
        medication: [ drugs.sof ],
        duration: 24,
        svr:    svrx.gt3.sof_riba.default.svr,
        trials: svrx.gt3.sof_riba.default.trials,
        rating: ratings.A1,
        notes: []
    });
    pushNotes(h.rx[0]);
    addRiba(h);

    if ( h.f4 || h.fail ) {
        h.rx[0].duration = 24;
        if ( h.fail && h.f4 ) {
            h.rx[0].svr    = svrx.gt3.sof_riba.fail.f4.svr;
            h.rx[0].trials = svrx.gt3.sof_riba.fail.f4.trials;
        }
        else if ( h.fail ) {
            h.rx[0].svr    = svrx.gt3.sof_riba.fail.default.svr;
            h.rx[0].trials = svrx.gt3.sof_riba.fail.default.trials;
        }
        else {
            h.rx[0].svr    = svrx.gt3.sof_riba.f4.default.svr;
            h.rx[0].trials = svrx.gt3.sof_riba.f4.default.trials;    
        }
        
        h.rx[0].notes.push(redText(' This therapy is suboptimal in treatment-experienced cirrhotic patients and in patients who failed to achieve an SVR after sofosbuvir plus ribavirin treatment, who should be offered an alternative treatment option (B1)'));
    }

    // sof dac
    h.rx.unshift({
        medication: [ drugs.sof, drugs.dac ],
        duration: 12,
        svr:    svrx.gt3.sof_dac.default.svr,
        trials: svrx.gt3.sof_dac.default.trials,
        rating: ratings.A1,
        notes: []
    });
    pushNotes(h.rx[0]);
    if ( h.f4 ) {
        addRiba(h,true);
        h.rx[0].duration = 24;
        h.rx[0].rating = ratings.B1;
        if ( h.fail) {
            h.rx[0].svr    = svrx.gt3.sof_dac.fail.riba24.svr;
            h.rx[0].trials = svrx.gt3.sof_dac.fail.riba24.trials;
        }
        else {
            h.rx[0].svr    = svrx.gt3.sof_dac.f4.riba24.svr;
            h.rx[0].trials = svrx.gt3.sof_dac.f4.riba24.trials;    
        }
        h.rx[0].notes.push(greenText('EASL Guidelines 2015 say add Riba for 24 weeks pending clarification  but AASLD 2015 n=468 GT3 F3/F4 series showed inferior performance in all 24 week + Riba groups. For 24 week groups WITHOUT Riba F4 SVR was 90% and treatment-experienced 86% http://www.clinicaloptions.com/Hepatitis/Conference%20Coverage/AASLD%202015/Highlights/Capsules/206.aspx'))
    }

}

/**
 * Medical prescription options for HCV genotype 4 
 * according to EASL 2016 recommendations.
 * @param {Object} h
 */
function rxGT4EASL (h) {

    // sof peg riba
    h.rx.unshift({
        medication: [ drugs.sof, drugs.peg ],
        duration: 12,
        svr:    svrx.gt4.sof_peg_riba.default.svr,
        trials: svrx.gt4.sof_peg_riba.default.trials,
        rating: ratings.B1,
        notes: []
    });
    pushNotes(h.rx[0]);
    addRiba(h);

    // sim peg riba
    h.rx.unshift({
        medication: [ drugs.sim, drugs.peg ],
        duration: 24,
        svr:    svrx.gt4.sim_peg_riba.default.svr,
        trials: svrx.gt4.sim_peg_riba.default.trials,
        rating: ratings.B1,
        notes: [ redText('Simeprevir is administered for the first 12 weeks only') ]
    });
    pushNotes(h.rx[0]);
    addRiba(h);
    if ( h.f4 || h.fail ) {
        h.rx[0].duration = 48;
        h.rx[0].svr    = svrx.gt4.sim_peg_riba.fail.default.svr;
        h.rx[0].trials = svrx.gt4.sim_peg_riba.fail.default.trials;
        h.rx[0].notes.push(greenText('HCV RNA levels should be monitored on treatment. Treatment should be stopped if HCV RNA level is ≥25 IU/ml at treatment week 4, week 12 or week 24'))
    }

    // sof led
    h.rx.unshift({
        medication: [ drugs.sof_led ],
        duration: 12,
        svr:    svrx.gt4.sof_led.default.svr,
        trials: svrx.gt4.sof_led.default.trials,
        rating: ratings.A1,
        notes: []
    });
    hasHarvoniCI(h)
    pushNotes(h.rx[0]);
    if ( h.f4 ) {
        addRiba(h);
        h.rx[0].rating = ratings.B1;
        h.rx[0].svr    = svrx.gt4.sof_led.f4.default.svr;
        h.rx[0].trials = svrx.gt4.sof_led.f4.default.trials;
        if ( negativePredictorsOfResponse(h) ) {
            h.rx[0].duration = 24;
            h.rx[0].svr = svrx.gt1.sof_led.fail.w24riba.svr;
            h.rx[0].trials = 'No Trials - based on GT1 and ION-3';
        }
        h.rx[0].notes.push(noRiba24weeks(svrx.gt1.sof_led.fail.w24.svr,'No Trials - based on GT1 extrapolation'));
    }
    
    // viek riba
    h.rx.unshift({
        medication: [ drugs.viek ],
        duration: 12,
        svr:    svrx.gt4.viek_riba.default.svr,
        trials: svrx.gt4.viek_riba.default.trials,
        rating: ratings.A1,
        notes: []
    });
    addRiba(h);
    pushNotes(h.rx[0]);
    if ( h.fail) {
        h.rx[0].svr    = svrx.gt4.viek_riba.fail.default.svr;
        h.rx[0].trials = svrx.gt4.viek_riba.fail.default.trials;
    }
    if ( h.f4 ) {
        h.rx[0].duration = 24;
        h.rx[0].svr    = svrx.gt4.viek_riba.f4.default.svr;
        h.rx[0].trials = svrx.gt4.viek_riba.f4.default.trials;
        h.rx[0].rating = ratings.B1;
    }

    // sof sim
    h.rx.unshift({
        medication: [ drugs.sof, drugs.sim ],
        duration: 12,
        svr:    svrx.gt4.sof_sim.default.svr,
        trials: svrx.gt4.sof_sim.default.trials,
        rating: ratings.B2,
        notes: []
    });
    pushNotes(h.rx[0]);
    if ( h.f4 ) {
        addRiba(h);
        if ( negativePredictorsOfResponse(h) ) {
            h.rx[0].duration = 24;
        }
        h.rx[0].notes.push(noRiba24weeks(svrx.gt1.sof_sim.fail.w24.svr,'No Trials - based on GT1 extrapolation'));
    }

    // sof dac
    h.rx.unshift({
        medication: [ drugs.sof, drugs.dac ],
        duration: 12,
        svr:    svrx.gt4.sof_dac.default.svr,
        trials: svrx.gt4.sof_dac.default.trials,
        rating: ratings.B2,
        notes: []
    });
    pushNotes(h.rx[0]);
    if ( h.f4 ) {
        addRiba(h);
        h.rx[0].notes.push(noRiba24weeks(svrx.gt1.sof_dac.f4.default.svr,'No Trials - based on GT1 extrapolation'));
    }

}

/**
 * Medical prescription options for HCV genotype 5 
 * according to EASL 2016 recommendations.
 * @param {Object} h
 */
function rxGT5EASL (h) {

    // sof peg riba
    h.rx.unshift({
        medication: [ drugs.sof, drugs.peg ],
        duration: 12,
        svr:    svrx.gt5.sof_peg_riba.default.svr,
        trials: svrx.gt5.sof_peg_riba.default.trials,
        rating: ratings.B1,
        notes: []
    });
    pushNotes(h.rx[0]);
    addRiba(h);

    // sof led
    h.rx.unshift({
        medication: [ drugs.sof_led ],
        duration: 12,
        svr:    svrx.gt5.sof_led.default.svr,
        trials: svrx.gt5.sof_led.default.trials,
        rating: ratings.A1,
        notes: []
    });
    hasHarvoniCI(h)
    pushNotes(h.rx[0]);
    if ( h.f4 ) {
        addRiba(h);
        h.rx[0].rating = ratings.B1;
        if ( negativePredictorsOfResponse(h) ) {
            h.rx[0].duration = 24;
            h.rx[0].svr = svrx.gt1.sof_led.fail.w24riba.svr;
            h.rx[0].trials = 'No Trials - based on GT1 and ION-3';
        }
        h.rx[0].notes.push(noRiba24weeks(svrx.gt1.sof_led.fail.w24.svr,'No Trials - based on GT1 extrapolation'));
    }

    // sof dac
    h.rx.unshift({
        medication: [ drugs.sof, drugs.dac ],
        duration: 12,
        svr:    svrx.gt5.sof_dac.default.svr,
        trials: svrx.gt5.sof_dac.default.trials,
        rating: ratings.B1,
        notes: []
    });
    pushNotes(h.rx[0]);
    if ( h.f4 ) {
        addRiba(h);
        h.rx[0].notes.push(noRiba24weeks(svrx.gt1.sof_dac.f4.default.svr,'No Trials - based on GT1 extrapolation'));
    }

}
/**
 * Medical prescription options for HCV genotype 6 
 * according to EASL 2016 recommendations.
 * @param {Object} h
 */
function rxGT6EASL (h) {

    // sof peg riba
    h.rx.unshift({
        medication: [ drugs.sof, drugs.peg ],
        duration: 12,
        svr:    svrx.gt6.sof_peg_riba.default.svr,
        trials: svrx.gt6.sof_peg_riba.default.trials,
        rating: ratings.B1,
        notes: []
    });
    pushNotes(h.rx[0]);
    addRiba(h);

    // sof led
    h.rx.unshift({
        medication: [ drugs.sof_led ],
        duration: 12,
        svr:    svrx.gt6.sof_led.default.svr,
        trials: svrx.gt6.sof_led.default.trials,
        rating: ratings.A1,
        notes: []
    });
    hasHarvoniCI(h)
    pushNotes(h.rx[0]);
    if ( h.f4 ) {
        addRiba(h);
        h.rx[0].rating = ratings.B1;
        if ( negativePredictorsOfResponse(h) ) {
            h.rx[0].duration = 24;
            h.rx[0].svr = svrx.gt1.sof_led.fail.w24riba.svr;
            h.rx[0].trials = 'No Trials - based on GT1 and ION-3';
        }
        h.rx[0].notes.push(noRiba24weeks(svrx.gt1.sof_led.fail.w24.svr,'No Trials - based on GT1 extrapolation'));
    }

    // sof dac
    h.rx.unshift({
        medication: [ drugs.sof, drugs.dac ],
        duration: 12,
        svr:    svrx.gt6.sof_dac.default.svr,
        trials: svrx.gt6.sof_dac.default.trials,
        rating: ratings.B1,
        notes: []
    });
    pushNotes(h.rx[0]);
    if ( h.f4 ) {
        addRiba(h);
        h.rx[0].notes.push(noRiba24weeks(svrx.gt1.sof_dac.f4.default.svr,'No Trials - based on GT1 extrapolation'));
    }

}

/*
*
*
*
* AASLD 2015
*
*
*
*/

/**
 * Medical prescription options for HCV genotype 1 
 * according to AASLD 2015 recommendations.
 * @param {Object} h
 */
function rxGT1AASLD (h) {
    if ( h.fail ) {
        if ( h.past == 'PEGRIBA' ) {
            if ( h.f4 ) {
                rxGT1AASLDpegribaF4(h);
            }
            else if ( h.genotype.match(/1b/) ) {
                rxGT1AASLDpegriba1b(h);
            }
            else {
                rxGT1AASLDpegriba1a(h);
            }
        }
        else if ( h.past == 'SOFRIBA') {
            if ( h.f4 ) {
                rxGT1AASLDsofribaF4(h);
            }
            else {
                rxGT1AASLDsofriba(h);
            }
        }
        else if ( h.past == 'PROTEASE' ) {
            if ( h.f4 ) {
                rxGT1AASLDproteaseF4(h);
            }
            else {
                rxGT1AASLDprotease(h);                
            }
        }
        else if ( h.past == 'SOFNS5A' ) {
            rxGT1AASLDsofNS5A(h);
        }
        else {
            blockMessage('Error - unhandled failure case: ' + h.past )
        }
    }
    else {
        if ( h.genotype.match(/1b/) ) {
            rxGT1AASLDnaive1b(h);
        }
        else {
            rxGT1AASLDnaive1a(h);       
        }
    }
}

/**
 * Medical prescription options for HCV genotype 1a 
 * according to AASLD 2015 recommendations.
 * @param {Object} h
 */
function rxGT1AASLDnaive1a (h) {

    // sofosbuvir daclatasvir
    h.rx.unshift({ 
        medication:[ drugs.sof, drugs.dac ], 
        duration: 12,
        svr:    svrx.gt1.sof_dac.gt1a.default.svr, 
        trials: svrx.gt1.sof_dac.gt1a.default.trials,
        rating: ratings.classILevelB,
        notes: []
    });
    pushNotes(h.rx[0]);
    if ( h.f4 ) {
        addRiba(h,true);
        h.rx[0].duration = 24;
        h.rx[0].svr    = svrx.gt1.sof_dac.f4.default.svr;
        h.rx[0].trials = svrx.gt1.sof_dac.f4.default.trials;
        h.rx[0].rating = ratings.classIIaLevelB;
    }

    // harvoni
    h.rx.unshift({
        medication: [ drugs.sof_led ],
        duration: 12,
        svr:    svrx.gt1.sof_led.gt1a.default.svr,
        trials: svrx.gt1.sof_led.gt1a.default.trials,
        rating: ratings.classILevelA,           
        notes: []
    });
    hasHarvoniCI(h);
    pushNotes(h.rx[0]);

    // viekira pak
    h.rx.unshift({
        medication: [ drugs.viek, drugs.viekx ],
        duration: 12,
        svr:    svrx.gt1.viek_viekx_riba.gt1a.default.svr,
        trials: svrx.gt1.viek_viekx_riba.gt1a.default.trials,
        rating: ratings.classILevelA,
        notes: []
    });
    pushNotes(h.rx[0]);
    addRiba(h);    
    if ( h.f4 ) {
        h.rx[0].duration = 24;
        h.rx[0].svr    = svrx.gt1.viek_viekx_riba.f4.w24.gt1a.svr;
        h.rx[0].trials = svrx.gt1.viek_viekx_riba.f4.w24.gt1a.trials;
    }

    // sofosbuvir simeprevir
    h.rx.unshift({ 
        medication:[ drugs.sof, drugs.sim ], 
        duration: 12,
        svr:    svrx.gt1.sof_sim.gt1a.default.svr,
        trials: svrx.gt1.sof_sim.gt1a.default.trials,
        rating: ratings.classILevelA, 
        notes: []
    });
    pushNotes(h.rx[0]);
    if ( h.f4 ) {
        addRiba(h,true);
        h.rx[0].duration = 24;
        h.rx[0].svr    = svrx.gt1.sof_sim.f4.w24riba.svr;
        h.rx[0].trials = svrx.gt1.sof_sim.f4.w24riba.trials;   
    }

}

/**
 * Medical prescription options for HCV genotype 1b 
 * according to AASLD 2015 recommendations.
 * @param {Object} h
 */
function rxGT1AASLDnaive1b (h) {

    // sofosbuvir daclatasvir
    h.rx.unshift({ 
        medication:[ drugs.sof, drugs.dac ], 
        duration: 12,
        svr:    svrx.gt1.sof_dac.gt1b.default.svr, 
        trials: svrx.gt1.sof_dac.gt1b.default.trials,
        rating: ratings.classILevelB,
        notes: []
    });
    pushNotes(h.rx[0]);
    if ( h.f4 ) {
        addRiba(h,true);
        h.rx[0].duration = 24;
        h.rx[0].svr    = svrx.gt1.sof_dac.f4.default.svr;
        h.rx[0].trials = svrx.gt1.sof_dac.f4.default.trials;
        h.rx[0].rating = ratings.classIIaLevelB;
    }

    // harvoni
    h.rx.unshift({
        medication: [ drugs.sof_led ],
        duration: 12,
        svr:    svrx.gt1.sof_led.gt1b.default.svr,
        trials: svrx.gt1.sof_led.gt1b.default.trials,
        rating: ratings.classILevelA,           
        notes: []
    });
    hasHarvoniCI(h);
    pushNotes(h.rx[0]);

    // viekira pak
    h.rx.unshift({
        medication: [ drugs.viek, drugs.viekx ],
        duration: 12,
        svr:    svrx.gt1.viek_viekx.gt1b.default.svr,
        trials: svrx.gt1.viek_viekx.gt1b.default.trials,
        rating: ratings.classILevelA,
        notes: []
    });
    pushNotes(h.rx[0]);

    // sofosbuvir simeprevir
    h.rx.unshift({ 
        medication:[ drugs.sof, drugs.sim ], 
        duration: 12,
        svr:    svrx.gt1.sof_sim.gt1b.default.svr,
        trials: svrx.gt1.sof_sim.gt1b.default.trials,
        rating: ratings.classILevelA, 
        notes: []
    });
    pushNotes(h.rx[0]);
    if ( h.f4 ) {
        addRiba(h,true);
        h.rx[0].duration = 24;
        h.rx[0].svr    = svrx.gt1.sof_sim.f4.w24riba.svr;
        h.rx[0].trials = svrx.gt1.sof_sim.f4.w24riba.trials;     
    }

}

/**
 * Medical prescription options for HCV genotype 1a
 * with previous failed Interferon + Ribavirin treatment
 * according to AASLD 2015 recommendations.
 * @param {Object} h
 */
function rxGT1AASLDpegriba1a (h) {

    // sofosbuvir daclatasvir
    h.rx.unshift({ 
        medication:[ drugs.sof, drugs.dac ], 
        duration: 12,
        svr:    svrx.gt1.sof_dac.fail.default.svr, 
        trials: svrx.gt1.sof_dac.fail.default.trials,
        rating: ratings.classIIaLevelB,
        notes: []
    });
    pushNotes(h.rx[0]);

    // harvoni
    h.rx.unshift({
        medication: [ drugs.sof_led ],
        duration: 12,
        svr:    svrx.gt1.sof_led.fail.default.svr,
        trials: svrx.gt1.sof_led.fail.default.trials,
        rating: ratings.classILevelA,           
        notes: []
    });
    hasHarvoniCI(h);
    pushNotes(h.rx[0]);

    // viekira pak
    h.rx.unshift({
        medication: [ drugs.viek, drugs.viekx ],
        duration: 12,
        svr:    svrx.gt1.viek_viekx_riba.fail.gt1a.svr,
        trials: svrx.gt1.viek_viekx_riba.fail.gt1a.trials,
        rating: ratings.classILevelA,
        notes: []
    });
    pushNotes(h.rx[0]);
    addRiba(h);    

    // sofosbuvir simeprevir
    h.rx.unshift({ 
        medication:[ drugs.sof, drugs.sim ], 
        duration: 12,
        svr:    svrx.gt1.sof_sim.fail.w12.svr,
        trials: svrx.gt1.sof_sim.fail.w12.trials,
        rating: ratings.classIIaLevelB, 
        notes: []
    });
    pushNotes(h.rx[0]);
}

/**
 * Medical prescription options for HCV genotype 1b
 * with previous failed Interferon + Ribavirin treatment
 * according to AASLD 2015 recommendations.
 * @param {Object} h
 */
function rxGT1AASLDpegriba1b (h) {

   // sofosbuvir daclatasvir
    h.rx.unshift({ 
        medication:[ drugs.sof, drugs.dac ], 
        duration: 12,
        svr:    svrx.gt1.sof_dac.fail.default.svr, 
        trials: svrx.gt1.sof_dac.fail.default.trials,
        rating: ratings.classIIaLevelB,
        notes: []
    });
    pushNotes(h.rx[0]);
    addRiba(h,true); 

    // harvoni
    h.rx.unshift({
        medication: [ drugs.sof_led ],
        duration: 12,
        svr:    svrx.gt1.sof_led.fail.default.svr,
        trials: svrx.gt1.sof_led.fail.default.trials,
        rating: ratings.classILevelA,           
        notes: []
    });
    hasHarvoniCI(h);
    pushNotes(h.rx[0]);

    // viekira pak
    h.rx.unshift({
        medication: [ drugs.viek, drugs.viekx ],
        duration: 12,
        svr:    svrx.gt1.viek_viekx_riba.fail.gt1a.svr,
        trials: svrx.gt1.viek_viekx_riba.fail.gt1a.trials,
        rating: ratings.classILevelA,
        notes: []
    });
    pushNotes(h.rx[0]);
    addRiba(h,true);    

    // sofosbuvir simeprevir
    h.rx.unshift({ 
        medication:[ drugs.sof, drugs.sim ], 
        duration: 12,
        svr:    svrx.gt1.sof_sim.fail.w12.svr,
        trials: svrx.gt1.sof_sim.fail.w12.trials,
        rating: ratings.classIIaLevelB, 
        notes: []
    });
    pushNotes(h.rx[0]);
}

/**
 * Medical prescription options for HCV genotype 1a or 1b and cirrhosis
 * with previous failed Interferon + Ribavirin treatment
 * according to AASLD 2015 recommendations.
 * @param {Object} h
 */
function rxGT1AASLDpegribaF4 (h) {

   // sofosbuvir daclatasvir +/- ribavirin
    h.rx.unshift({ 
        medication:[ drugs.sof, drugs.dac ], 
        duration: 24,
        svr:    svrx.gt1.sof_dac.f4.default.svr, 
        trials: svrx.gt1.sof_dac.f4.default.trials,
        rating: ratings.classIIaLevelB,
        notes: []
    });
    pushNotes(h.rx[0]);
    addRiba(h,true); 

    // harvoni
    h.rx.unshift({
        medication: [ drugs.sof_led ],
        duration: 24,
        svr:    svrx.gt1.sof_led.f4.w24.svr,
        trials: svrx.gt1.sof_led.f4.w24.trials,
        rating: ratings.classILevelA,           
        notes: []
    });
    hasHarvoniCI(h);
    pushNotes(h.rx[0]);

    // harvoni + ribavirin
    h.rx.unshift({
        medication: [ drugs.sof_led ],
        duration: 12,
        svr:    svrx.gt1.sof_led.f4.w12riba.svr,
        trials: svrx.gt1.sof_led.f4.w12riba.trials,
        rating: ratings.classILevelB,           
        notes: []
    });
    hasHarvoniCI(h);
    pushNotes(h.rx[0]);
    addRiba(h); 

    // viekira pak  +/- ribavirin
    h.rx.unshift({
        medication: [ drugs.viek, drugs.viekx ],
        duration: 24,
        rating: ratings.classILevelA,
        notes: []
    });
    pushNotes(h.rx[0]);
    if ( h.genotype.match(/1b/) ) {
        h.rx[0].svr    = svrx.gt1.viek_viekx_riba.f4.w24.gt1b.svr;
        h.rx[0].trials = svrx.gt1.viek_viekx_riba.f4.w24.gt1b.trials;
        h.rx[0].notes.push(greenText('Ribavirin is only given for 12 weeks')); 
    } 
    else {
        h.rx[0].svr    = svrx.gt1.viek_viekx_riba.f4.w24.gt1a.svr;
        h.rx[0].trials = svrx.gt1.viek_viekx_riba.f4.w24.gt1a.trials;
        h.rx[0].notes.push(greenText('Ribavirin is given for all 24 weeks')); 
    }
    addRiba(h,true);    

    // sofosbuvir simeprevir  +/- ribavirin
    h.rx.unshift({ 
        medication:[ drugs.sof, drugs.sim ], 
        duration: 24,
        svr:    svrx.gt1.sof_sim.f4.w24riba.svr,
        trials: svrx.gt1.sof_sim.f4.w24riba.trials,
        rating: ratings.classIIaLevelB, 
        notes: []
    });
    pushNotes(h.rx[0]);
    addRiba(h,true); 
}

/**
 * Medical prescription options for HCV genotype 1
 * with previous failed Sofosbuvir + Ribavirin +/- Interferon treatment
 * according to AASLD 2015 recommendations.
 * @param {Object} h
 */
function rxGT1AASLDsofriba (h) {

    // harvoni + ribavirin
    h.rx.unshift({
        medication: [ drugs.sof_led ],
        duration: 12,
        svr:    svrx.gt1.sof_led.fail.w12riba.svr,
        trials: svrx.gt1.sof_led.fail.w12riba.trials,
        rating: ratings.classIIbLevelC,           
        notes: []
    });
    hasHarvoniCI(h);
    pushNotes(h.rx[0]);
    addRiba(h); 
}

/**
 * Medical prescription options for HCV genotype 1 and cirrhosis
 * with previous failed Sofosbuvir + Ribavirin +/- Interferon treatment
 * according to AASLD 2015 recommendations.
 * @param {Object} h
 */
function rxGT1AASLDsofribaF4 (h) {

    // harvoni + ribavirin
    h.rx.unshift({
        medication: [ drugs.sof_led ],
        duration: 24,
        svr:    svrx.gt1.sof_led.f4.w24riba.svr,
        trials: svrx.gt1.sof_led.f4.w24riba.trials,
        rating: ratings.classIIaLevelC,           
        notes: []
    });
    hasHarvoniCI(h);
    pushNotes(h.rx[0]);
    addRiba(h); 
}

/**
 * Medical prescription options for HCV genotype 1
 * with previous failed Protease + Interferon + Ribavirin treatment
 * according to AASLD 2015 recommendations.
 * @param {Object} h
 */
function rxGT1AASLDprotease (h) {

    // sofosbuvir daclatasvir
    h.rx.unshift({ 
        medication:[ drugs.sof, drugs.dac ], 
        duration: 12,
        svr:    svrx.gt1.sof_dac.fail.default.svr, 
        trials: svrx.gt1.sof_dac.fail.default.trials,
        rating: ratings.classILevelA,
        notes: [redText('This recommendation does not apply to prior failure with Simeprevir plus Sofosbuvir')]
    });
    pushNotes(h.rx[0]);

    // harvoni
    h.rx.unshift({
        medication: [ drugs.sof_led ],
        duration: 12,
        svr:    svrx.gt1.sof_led.fail.default.svr,
        trials: svrx.gt1.sof_led.fail.default.trials,
        rating: ratings.classILevelA,           
        notes: [redText('Ribavirin only recommended for prior failure with Simeprevir plus Sofosbuvir')]
    });
    hasHarvoniCI(h);
    pushNotes(h.rx[0]);
    addRiba(h,true);
}

/**
 * Medical prescription options for HCV genotype 1 and cirrhosis
 * with previous failed Protease + Interferon + Ribavirin treatment
 * according to AASLD 2015 recommendations.
 * @param {Object} h
 */
function rxGT1AASLDproteaseF4 (h) {

    // sofosbuvir daclatasvir
    h.rx.unshift({ 
        medication:[ drugs.sof, drugs.dac ], 
        duration: 24,
        svr:    svrx.gt1.sof_dac.fail.default.svr, 
        trials: svrx.gt1.sof_dac.fail.default.trials,
        rating: ratings.classIIaLevelB,
        notes: [redText('This recommendation does not apply to prior failure with Simeprevir plus Sofosbuvir')]
    });
    pushNotes(h.rx[0]);

    // harvoni
    h.rx.unshift({
        medication: [ drugs.sof_led ],
        duration: 24,
        svr:    svrx.gt1.sof_led.f4.w24riba.svr,
        trials: svrx.gt1.sof_led.f4.w24riba.trials,
        rating: ratings.classILevelA,           
        notes: [redText('Ribavirin only recommended for prior failure with Simeprevir plus Sofosbuvir')]
    });
    hasHarvoniCI(h);
    pushNotes(h.rx[0]);
    addRiba(h,true); 

    // harvoni + ribavirin
    h.rx.unshift({
        medication: [ drugs.sof_led ],
        duration: 12,
        svr:    svrx.gt1.sof_led.f4.w12riba.svr,
        trials: svrx.gt1.sof_led.f4.w12riba.trials,
        rating: ratings.classIIaLevelB,           
        notes: []
    });
    hasHarvoniCI(h);
    pushNotes(h.rx[0]);
    addRiba(h); 
}

/**
 * Medical prescription options for HCV genotype 1
 * with previous failed Sofosbuvir + NS5A (Led or Dac) or Viekira Pak treatment
 * according to AASLD 2015 recommendations.
 * @param {Object} h
 */
function rxGT1AASLDsofNS5A (h) {

    // harvoni + ribavirin
    h.rx.unshift({
        medication: [ drugs.sof_led ],
        duration: 24,
        svr:    svrx.gt1.sof_led.f4.w24riba.svr,
        trials: svrx.gt1.sof_led.f4.w24riba.trials,
        rating: ratings.classIIbLevelC,           
        notes: [redText('For patients who have no NS5A RAVs detected')]
    });
    hasHarvoniCI(h);
    pushNotes(h.rx[0]);
    addRiba(h); 

    // sofosbuvir simeprevir + ribavirin
    h.rx.unshift({ 
        medication:[ drugs.sof, drugs.sim ], 
        duration: 24,
        svr:    svrx.gt1.sof_sim.f4.w24riba.svr,
        trials: svrx.gt1.sof_sim.f4.w24riba.trials,
        rating: ratings.classIIbLevelC, 
        notes: [redText('For patients who have NS5A RAVs detected but no NS3 RAVs detected')]
    });
    pushNotes(h.rx[0]);
    addRiba(h,true); 

}

/**
 * Medical prescription options for HCV genotype 2 
 * according to AASLD 2015 recommendations.
 * @param {Object} h
 */
function rxGT2AASLD (h) {
    if ( h.fail ) {
        if ( h.past == 'PEGRIBA' ) {
            rxGT2AASLDpegriba(h);
        }
        else if ( h.past == 'SOFRIBA') {
            rxGT2AASLDsofriba(h);
        }
        else {
            rxGT2AASLDsofriba(h);            
            blockMessage('Error - unhandled failure case: ' + h.past,2000)
        }
    }
    else {
        rxGT2AASLDnaive(h);       
    }
}

/**
 * Medical prescription options for HCV genotype 2
 * according to AASLD 2015 recommendations.
 * @param {Object} h
 */
 function rxGT2AASLDnaive (h){

    // sofosbuvir + ribavirin
    h.rx.unshift({
        medication: [ drugs.sof ],
        duration: 12,
        svr:    svrx.gt2.sof_riba.default.svr,
        trials: svrx.gt2.sof_riba.default.trials,
        rating: ratings.classILevelA,           
        notes: []
    });
    pushNotes(h.rx[0]);
    addRiba(h);
    if ( h.f4 ) {
        h.rx[0].duration = 16;
        h.rx[0].rating   = ratings.classIIbLevelC;
        h.rx[0].svr      = svrx.gt2.sof_riba.f4.w16.svr;
        h.rx[0].traials  = svrx.gt2.sof_riba.f4.w16.trials;
    }

    // sofosbuvir daclatasvir
    h.rx.unshift({ 
        medication:[ drugs.sof, drugs.dac ], 
        duration: 12,
        svr:    svrx.gt2.sof_dac.default.svr, 
        trials: svrx.gt2.sof_dac.default.trials,
        rating: ratings.classIIaLevelB,
        notes: []
    });
    pushNotes(h.rx[0]);
    if ( h.f4 ) {
        h.rx[0].duration = 24;
    }
 }

 /**
 * Medical prescription options for HCV genotype 2
 * with previous failed Interferon + Ribavirin treatment
 * according to AASLD 2015 recommendations.
 * @param {Object} h
 */
function rxGT2AASLDpegriba (h) {
    // sofosbuvir + ribavirin
    h.rx.unshift({
        medication: [ drugs.sof ],
        duration: 24,
        svr:    svrx.gt2.sof_riba.default.svr,
        trials: svrx.gt2.sof_riba.default.trials,
        rating: ratings.classILevelA,           
        notes: [greenText('May use 16 or 24 weeks. The decision to use 16 or 24 weeks should be made on an individual basis')]
    });
    pushNotes(h.rx[0]);
    addRiba(h);

    // sofosbuvir + ribavirin + interferon
    h.rx.unshift({
        medication: [ drugs.sof, drugs.peg ],
        duration: 12,
        svr:    svrx.gt2.sof_peg_riba.default.svr,
        trials: svrx.gt2.sof_peg_riba.default.trials,
        rating: ratings.classIIaLevelB,           
        notes: []
    });
    pushNotes(h.rx[0]);
    addRiba(h);
}

 /**
 * Medical prescription options for HCV genotype 2
 * with previous failed Sofosbuvir + Ribavirin treatment
 * according to AASLD 2015 recommendations.
 * @param {Object} h
 */
 function rxGT2AASLDsofriba (h) {

    // sofosbuvir + ribavirin + interferon
    h.rx.unshift({
        medication: [ drugs.sof, drugs.peg ],
        duration: 12,
        svr:    svrx.gt2.sof_peg_riba.default.svr,
        trials: svrx.gt2.sof_peg_riba.default.trials,
        rating: ratings.classIIaLevelC,           
        notes: []
    });
    pushNotes(h.rx[0]);
    addRiba(h);

    // sofosbuvir daclatasvir
    h.rx.unshift({ 
        medication:[ drugs.sof, drugs.dac ], 
        duration: 24,
        svr:    svrx.gt2.sof_dac.default.svr, 
        trials: svrx.gt2.sof_dac.default.trials,
        rating: ratings.classIIaLevelB,
        notes: [greenText('For patients NOT eligible to receive interferon')]
    });
    addRiba(h,true);
 }

/**
 * Medical prescription options for HCV genotype 3 
 * according to AASLD 2015 recommendations.
 * @param {Object} h
 */
function rxGT3AASLD (h) {
    if ( h.fail ) {
        if ( h.past == 'PEGRIBA' ) {
            rxGT3AASLDpegriba(h);
        }
        else if ( h.past == 'SOFRIBA') {
            rxGT3AASLDsofriba(h);
        }
        else {
            rxGT3AASLDsofriba(h);            
            blockMessage('Error - unhandled failure case: ' + h.past,2000)
        }
    }
    else {
        rxGT3AASLDnaive(h);       
    }
}

/**
 * Medical prescription options for HCV genotype 3
 * according to AASLD 2015 recommendations.
 * @param {Object} h
 */
 function rxGT3AASLDnaive (h){

    // sofosbuvir daclatasvir
    h.rx.unshift({ 
        medication:[ drugs.sof, drugs.dac ], 
        duration: 12,
        svr:    svrx.gt3.sof_dac.default.svr, 
        trials: svrx.gt3.sof_dac.default.trials,
        rating: ratings.classILevelA,
        notes: []
    });
    pushNotes(h.rx[0]);
    if ( h.f4 ) {
        addRiba(h,true);
        h.rx[0].duration = 24;
        h.rx[0].rating   = ratings.classIIaLevelC;
        h.rx[0].svr      = svrx.gt3.sof_dac.f4.w24.svr;
        h.rx[0].trials   = svrx.gt3.sof_dac.f4.w24.trials;
    }

    // sofosbuvir + ribavirin + interferon
    h.rx.unshift({
        medication: [ drugs.sof, drugs.peg ],
        duration: 12,
        svr:    svrx.gt3.sof_peg_riba.default.svr,
        trials: svrx.gt3.sof_peg_riba.default.trials,
        rating: ratings.classILevelA,           
        notes: []
    });
    pushNotes(h.rx[0]);
    addRiba(h);
    if ( h.f4 ) {
        h.rx[0].svr      = svrx.gt3.sof_peg_riba.f4.default.svr;
        h.rx[0].trials   = svrx.gt3.sof_peg_riba.f4.default.trials;
    }

    // sofosbuvir + ribavirin (alternative treatment)
    h.rx.unshift({
        medication: [ drugs.sof],
        duration: 24,
        svr:    svrx.gt3.sof_riba.default.svr,
        trials: svrx.gt3.sof_riba.default.trials,
        rating: ratings.classILevelA,           
        notes: []
    });
    pushNotes(h.rx[0]);
    addRiba(h);
    if ( h.f4 ) {
        h.rx[0].svr      = svrx.gt3.sof_riba.f4.default.svr;
        h.rx[0].trials   = svrx.gt3.sof_riba.f4.default.trials;
    }
 }

 /**
 * Medical prescription options for HCV genotype 3
 * with previous failed Interferon + Ribavirin treatment
 * according to AASLD 2015 recommendations.
 * @param {Object} h
 */
function rxGT3AASLDpegriba (h) {

   // sofosbuvir daclatasvir
    h.rx.unshift({ 
        medication:[ drugs.sof, drugs.dac ], 
        duration: 12,
        svr:    svrx.gt3.sof_dac.fail.default.svr, 
        trials: svrx.gt3.sof_dac.fail.default.trials,
        rating: ratings.classILevelA,
        notes: []
    });
    pushNotes(h.rx[0]);
    if ( h.f4 ) {
        addRiba(h,true);
        h.rx[0].duration = 24;
        h.rx[0].rating   = ratings.classIIaLevelC;
        h.rx[0].svr      = svrx.gt3.sof_dac.fail.w24.svr;
        h.rx[0].trials   = svrx.gt3.sof_dac.fail.w24.trials;
        h.rx[0].notes.push(greenText('For patients NOT eligible to receive interferon'));
    }

    // sofosbuvir + ribavirin + interferon
    h.rx.unshift({
        medication: [ drugs.sof, drugs.peg ],
        duration: 12,
        svr:    svrx.gt3.sof_peg_riba.fail.default.svr,
        trials: svrx.gt3.sof_peg_riba.fail.default.trials,
        rating: ratings.classILevelA,           
        notes: []
    });
    pushNotes(h.rx[0]);
    addRiba(h);
    if ( h.f4 ) {
        h.rx[0].svr      = svrx.gt3.sof_peg_riba.f4.default.svr;
        h.rx[0].trials   = svrx.gt3.sof_peg_riba.f4.default.trials;
    }

}

 /**
 * Medical prescription options for HCV genotype 3
 * with previous failed Sofosbuvir + Ribavirin treatment
 * according to AASLD 2015 recommendations.
 * @param {Object} h
 */
 function rxGT3AASLDsofriba (h) {

   // sofosbuvir daclatasvir
    h.rx.unshift({ 
        medication:[ drugs.sof, drugs.dac ], 
        duration: 24,
        svr:    svrx.gt3.sof_dac.fail.w24.svr, 
        trials: svrx.gt3.sof_dac.fail.w24.trials,
        rating: ratings.classIIaLevelC,
        notes: []
    });
    pushNotes(h.rx[0]);
    addRiba(h);
 
    // sofosbuvir + ribavirin + interferon
    h.rx.unshift({
        medication: [ drugs.sof, drugs.peg ],
        duration: 12,
        svr:    svrx.gt3.sof_peg_riba.fail.default.svr,
        trials: svrx.gt3.sof_peg_riba.fail.default.trials,
        rating: ratings.classIIaLevelC,           
        notes: []
    });
    pushNotes(h.rx[0]);
    addRiba(h);

 }

/**
 * Medical prescription options for HCV genotype 4 
 * according to AASLD 2015 recommendations.
 * @param {Object} h
 */
function rxGT4AASLD (h) {
    if ( h.fail ) {
        if ( h.past == 'PEGRIBA' ) {
            rxGT4AASLDpegriba(h);
        }
        else {
            rxGT4AASLDpegriba(h);          
            blockMessage('Error - unhandled failure case: ' + h.past,2000)
        }
    }
    else {
        rxGT4AASLDnaive(h);
    }
}

 /**
 * Medical prescription options for HCV genotype 3
 * according to AASLD 2015 recommendations.
 * @param {Object} h
 */
function rxGT4AASLDnaive (h) {

    // harvoni
    h.rx.unshift({
        medication: [ drugs.sof_led ],
        duration: 12,
        svr:    svrx.gt4.sof_led.default.svr,
        trials: svrx.gt4.sof_led.default.trials,
        rating: ratings.classIIbLevelB,           
        notes: []
    });
    hasHarvoniCI(h);
    pushNotes(h.rx[0]);

    // viekira pak ribavirin
    h.rx.unshift({
        medication: [ drugs.viek ],
        duration: 12,
        svr:    svrx.gt4.viek_riba.default.svr,
        trials: svrx.gt4.viek_riba.default.trials,
        rating: ratings.classILevelB,
        notes: []
    });
    pushNotes(h.rx[0]);
    addRiba(h);    

    // sofosbuvir ribavirin
    h.rx.unshift({ 
        medication:[ drugs.sof ], 
        duration: 24,
        svr:    svrx.gt4.sof_riba.w24.svr,
        trials: svrx.gt4.sof_riba.w24.trials,
        rating: ratings.classIIaLevelB, 
        notes: []
    });
    pushNotes(h.rx[0]);
    addRiba(h);

    // sofosbuvir ribavirin interferon
    h.rx.unshift({ 
        medication:[ drugs.sof, drugs.peg ], 
        duration: 12,
        svr:    svrx.gt4.sof_peg_riba.default.svr,
        trials: svrx.gt4.sof_peg_riba.default.trials,
        rating: ratings.classIILevelB, 
        notes: []
    });
    pushNotes(h.rx[0]);
    addRiba(h);
}

 /**
 * Medical prescription options for HCV genotype 3
 * with previous failed Interferon + Ribavirin treatment
 * according to AASLD 2015 recommendations.
 * @param {Object} h
 */
function rxGT4AASLDpegriba (h) {

    // harvoni
    h.rx.unshift({
        medication: [ drugs.sof_led ],
        duration: 12,
        svr:    svrx.gt4.sof_led.fail.default.svr,
        trials: svrx.gt4.sof_led.fail.default.trials,
        rating: ratings.classIIaLevelB,           
        notes: []
    });
    hasHarvoniCI(h);
    pushNotes(h.rx[0]);

    // viekira pak ribavirin
    h.rx.unshift({
        medication: [ drugs.viek ],
        duration: 12,
        svr:    svrx.gt4.viek_riba.fail.default.svr,
        trials: svrx.gt4.viek_riba.fail.default.trials,
        rating: ratings.classIIaLevelB,
        notes: []
    });
    pushNotes(h.rx[0]);
    addRiba(h);    

    // sofosbuvir ribavirin
    h.rx.unshift({ 
        medication:[ drugs.sof ], 
        duration: 24,
        svr:    svrx.gt4.sof_riba.fail.w24.svr,
        trials: svrx.gt4.sof_riba.fail.w24.trials,
        rating: ratings.classIIaLevelB, 
        notes: []
    });
    pushNotes(h.rx[0]);
    addRiba(h);

    // sofosbuvir ribavirin interferon
    h.rx.unshift({ 
        medication:[ drugs.sof, drugs.peg ], 
        duration: 12,
        svr:    svrx.gt4.sof_peg_riba.fail.default.svr,
        trials: svrx.gt4.sof_peg_riba.fail.default.trials,
        rating: ratings.classIIaLevelB, 
        notes: []
    });
    pushNotes(h.rx[0]);
    addRiba(h);
}

/**
 * Medical prescription options for HCV genotype 5 
 * according to AASLD 2015 recommendations.
 * @param {Object} h
 */
function rxGT5AASLD (h) {

    // harvoni
    h.rx.unshift({
        medication: [ drugs.sof_led ],
        duration: 12,
        svr:    svrx.gt5.sof_led.default.svr,
        trials: svrx.gt5.sof_led.default.trials,
        rating: ratings.classIIaLevelB,           
        notes: []
    });
    hasHarvoniCI(h);
    pushNotes(h.rx[0]);
    if ( h.fail ) {
        h.rx[0].rating = ratings.classIIaLevelC;
    }

    // sofosbuvir ribavirin interferon
    h.rx.unshift({ 
        medication:[ drugs.sof, drugs.peg ], 
        duration: 12,
        svr:    svrx.gt5.sof_peg_riba.default.svr,
        trials: svrx.gt5.sof_peg_riba.default.trials,
        rating: ratings.classIIaLevelB, 
        notes: []
    });
    pushNotes(h.rx[0]);
    addRiba(h);

}

/**
 * Medical prescription options for HCV genotype 6 
 * according to AASLD 2015 recommendations.
 * @param {Object} h
 */
function rxGT6AASLD (h) {

    // harvoni
    h.rx.unshift({
        medication: [ drugs.sof_led ],
        duration: 12,
        svr:    svrx.gt5.sof_led.default.svr,
        trials: svrx.gt5.sof_led.default.trials,
        rating: ratings.classIIaLevelB,           
        notes: []
    });
    hasHarvoniCI(h);
    pushNotes(h.rx[0]);
    if ( h.fail ) {
        h.rx[0].rating = ratings.classIIaLevelC;
    }

    // sofosbuvir ribavirin interferon
    h.rx.unshift({ 
        medication:[ drugs.sof, drugs.peg ], 
        duration: 12,
        svr:    svrx.gt5.sof_peg_riba.default.svr,
        trials: svrx.gt5.sof_peg_riba.default.trials,
        rating: ratings.classIIaLevelB, 
        notes: []
    });
    pushNotes(h.rx[0]);
    addRiba(h);

}

/**
 * Append medication notes to medical prescription notes.
 * @param {Object} h
 */
function pushNotes (rx) {

    for ( var m in rx.medication ) {
        for ( var i in rx.medication[m].notes ) {
            rx.notes.push(rx.medication[m].notes[i]);
        }
    }
}

/**
 * Special case for Harvoni CI.
 * @param {Object} h
 * @returns {Boolean}
 */
function hasHarvoniCI (h) {

    if (h.harvoniCI) {
        var msg = redText('Sofosbuvir/Ledipasvir not recommended due to Harvoni CI(s)');
        blockMessage(msg);
        h.rx[0].notes.push(msg);
        return true;
    }
    return false;
}

/**
 * Check for negative predictors of response.
 * @param {Object} h
 * @returns {Boolean}
 */
function negativePredictorsOfResponse (h) {
    if ( h.f4 && (h.fail || h.platelets < 75) ) {
        return true;
    }
    else {
        return false;
    }
}

/**
 * Return message about 24 weeks without Ribavirin.
 * @param {Number} svr
 * @param {String} trials
 * @returns {String}
 */
function noRiba24weeks(svr,trials) {

    return greenText('Can use 24 weeks without Ribavrin in patients with contraindications or poor tolerance to ribavirin. Expected SVR: ' + svr +'% Trials: ' + trials)
}

/**
 * Append notes about using Ribaverin.
 * @param {Object} h
 * @param {Boolean} optional
 */
function addRiba(h,optional) {

    if (! h.riba) {
        var msg = 'Sorry, we can\'t accurately add Ribavirin without Ribavirin details. Please add them and recalculate.';
        $("#riba").prop('checked', true);
        $("#ribavirin").show();
        errorDialog(msg, "#platelets");
        h.rx[0].notes.push(redText(msg));
    }
    var ribaDose = h.riba ? calcRibaDose(h) : 1000;
    // need to clone drugs.riba so we can have multiple riba notes associated with various rx options
    var riba = $.extend(true,{},drugs.riba);
    riba.optional = optional ? true : false;
    riba.dose = [ribaDose + 'mg'];
    h.rx[0].medication.push(riba);
    if (riba.optional) {
        h.rx[0].notes.push(greenText('Ribavirin is optional'));
    }
    else {
        h.rx[0].notes.push(redText('Ribavirin is mandatory'));        
    }
    h.rx[0].notes.push('Ribavirin use requires frequent monitoring for pancytopaenia');
    if ( h.platelets < 50 ) h.rx[0].notes.push(redText('Low platelets are a relative contraindication to Ribavirin'));
    h.rx[0].notes.push('Ribavirin (200mg Capsules): ' + calcRibaCaps(ribaDose));
    h.rx[0].notes.push('Ribavirin (Ibavyr 400mg &amp; 600mg Tablets): ' + calcRibaTabs(ribaDose));
}

/**
 * When changing guidelines show/hide riba calculator and recalculate
 */
function showRibaWeight() {

    var guidelines= $("input[name=guidelines]:checked").val();
    if ( guidelines == 'AUS' || guidelines == 'AASLD' || guidelines == 'EASL') {
        $('#riba').prop('checked', true);
        $("#ribavirin").slideDown()
    }
    else {
        $('#riba').prop('checked', false);
        $("#ribavirin").hide(400);
    }
    if ( $('#calculate').val() == 'Recalculate') {
        supportDecision();
    }
}

/**
 * Toggle full weight options UI.
 */
 function toggleFullWeightOptions() {
  
    if ( $('#weightFull').is(':visible') ) {
        $("#weightFull").hide();
        $('#sfw').html('Show full weight options');
    }
    else {
        $('#weightFull').show()
        $('#sfw').html('Hide full weight options');   
    }
 }

/**
 * Calculate Ribaverin dose.
 * @param {Object} h
 */
function calcRibaDose (h) {

    if ( ! h.riba ) return 0;
    var dose = 0;
    if ( h.weight == '>105' ) {
        dose = 1400;
    }
    else if ( h.weight == '81-105' || h.weight == '>75' ) {
        dose = 1200;
    }
    else if ( h.weight == '66-80' || h.weight == '<75' ) {
        dose = 1000;  
    }
    else if ( h.weight == '<66' ) {
        dose = 800;
    }
    else {
        alert('Error for weight: ' + h.weight );
    }
    if ( h.eGFR < 60 ) {
        h.rx[0].notes.push(redText('Specialist advice highly recommended about Ribavirin dose'));
        dose =  h.eGFR > 30 ? dose/2 : dose/3;
    }
  
    return 100 * Math.round(dose/100);
}

/**
 * Calculate the amount of Ribaverin caplules to take.
 * Standard Ribaverin formulation is 200 mg capsules.
 * @param {Number} dose
 * @returns {String}
 */
function calcRibaCaps (dose) {

    if ( dose >=1400 ) {
        return '3 in the morning 4 at night';
    }
    if ( dose >=1200 ) {
        return '3 in the morning 3 at night';
    }
    if ( dose >=1000 ) {
        return '2 in the morning 3 at night';
    }
    if ( dose >=800 ) {
        return '2 in the morning 2 at night';
    }
    if ( dose >=600 ) {
        return '1 in the morning 2 at night';
    }
    if ( dose >=400 ) {
        return '1 in the morning 1 at night';
    }
    if ( dose >=300 ) {
        return 'Alternating doses, 1 daily alternating with 2 daily every other day';
    }
    if ( dose >=200 ) {
        return '1 daily';
    }
    return redText('No Riba dose!');
}

/**
 * Calculate the amount of Ribaverin caplules to take.
 * Ibavyr tablets come in 400mg and 600mg scored
 * @param {Number} dose
 * @returns {String}
 */
function calcRibaTabs (dose) {

    if ( dose >=1400 ) {
        return '2 x 400mg in the morning 600mg at night';
    }
    if ( dose >=1200 ) {
        return '600 mg morning and night';
    }
    if ( dose >=1000 ) {
        return '600mg in the morning 400mg at night';
    }
    if ( dose >=800 ) {
        return '400mg morning and night';
    }
    if ( dose >=600 ) {
        return '&frac12; 600mg morning and night';
    }
    if ( dose >=400 ) {
        return '&frac12; 400mg morning and night';
    }
    if ( dose >=300 ) {
        return '&frac12; 600mg daily';
    }
    if ( dose >=200 ) {
        return '&frac12; 400mg daily';
    }
    return redText('No Riba dose!');
}

/**
 * Set fibrosis value based on kilopascal parameter.
 */
function setFibrosisFromKPa () {

    var kpa = parseFloat($("#kpa").val());

    if (isNaN(kpa)) {
        return;
    }

    if ( kpa >= 14.5 ) {
        $("#fibrosis").val('F4');
    }
    else if ( kpa >= 12.5 ) {
        $("#fibrosis").val('F3-F4');
    }
    else if ( kpa >= 9.5 ) {
        $("#fibrosis").val('F3');
    }
    else if ( kpa >= 8.5 ) {
        $("#fibrosis").val('F2');
    }
    else if ( kpa >= 7 ) {
        $("#fibrosis").val('F1-F2');
    }
    else {
        $("#fibrosis").val('F0-F1'); 
    }
 
}

/**
 * Set fibrosis value based on Hepascore parameter.
 * @see {@link http://www.mayomedicallaboratories.com/test-updates/attachment.php?id=34741}
 */
function setFibrosisHepascore () {

    var hepascore = parseFloat($("#hepascore").val());

    if (isNaN(hepascore)) {
        return;
    }

    if ( hepascore >= 0.74 ) {
        $("#fibrosis").val('F4');
    }
    else if ( hepascore >= 0.72 ) {
        $("#fibrosis").val('F3-F4');
    }
    else if ( hepascore >= 0.58 ) {
        $("#fibrosis").val('F3');
    }
    else if ( hepascore >= 0.48 ) {
        $("#fibrosis").val('F2');
    }
    else if ( hepascore >= 0.31 ) {
        $("#fibrosis").val('F1-F2');
    }
    else if ( hepascore >= 0.27 ) {
        $("#fibrosis").val('F1');
    }
    else if ( hepascore >= 0.21 ) {
        $("#fibrosis").val('F0-F1');
    }
    else {
        $("#fibrosis").val('F0');
    }
}

/**
 * Set fibrosis value based on ELF Score parameter.
 */
function setFibrosisELFscore () {

    var ELFscore = parseFloat($("#ELFscore").val());

    if (isNaN(ELFscore)) {
        return;
    }

    if ( ELFscore > 11.3 ) {
        $("#fibrosis").val('F4');
    }
    else if ( ELFscore >= 9.8 ) {
        $("#fibrosis").val('F3');
    }
    else if ( ELFscore >= 7.7 ) {
        $("#fibrosis").val('F2');
    }
    else {
        $("#fibrosis").val('F1');
    }
}

/**
 * Set fibrosis value based on APRI Score parameter.
 *
 * Ref http://www.ncbi.nlm.nih.gov/pmc/articles/PMC3212757/table/s3tbl5/
 */
function setFibrosisAPRIscore () {

    var APRIscore = parseFloat($("#APRIscore").val());

    if (isNaN(APRIscore)) {
        return;
    }

    if ( APRIscore > 0.879 ) {
        $("#fibrosis").val('F4');
    }
    else if ( APRIscore >= 0.825 ) {
        $("#fibrosis").val('F3');
    }
    else if ( APRIscore >= 0.688 ) {
        $("#fibrosis").val('F2');
    }
    else {
        $("#fibrosis").val('F1');
    }
}

/**
 * Set fibrosis value based on AST/ALT Score parameter.
 *
 * Ref http://gut.bmj.com/content/59/9/1265.full.pdf
 */
function setFibrosisASTALTscore () {

    var ASTALTscore = parseFloat($("#ASTALTscore").val());

    if (isNaN(ASTALTscore)) {
        return;
    }

    if ( ASTALTscore > 1.0 ) {
        $("#fibrosis").val('F4');
    }
    else if ( ASTALTscore > 0.8 ) {
        $("#fibrosis").val('F3');
    }
    else {
        $("#fibrosis").val('F1');
    }
}

/**
 * Calculate APRI or AST/ALT
 */

function setAPRIscore () {
  
    var AST = parseFloat($("#AST").val());
    var ALT = parseFloat($("#ALT").val());
    var ASTupper = parseFloat($("#ASTupper").val());
    var Platlets = parseFloat($("#plateletsAPRI").val());

    if ( ! isNaN(AST) && ! isNaN(ASTupper) && ! isNaN(Platlets)) {
        var APRI = 100*(AST/ASTupper)/Platlets;
        $("#APRIscore").val(APRI.toFixed(3));
        $("#ASTALTscore").val('');
        setFibrosisAPRIscore();
        return;
    }

    if ( ! isNaN(AST) && ! isNaN(ALT) ) {
        var ASTALT = AST/ALT;
        $("#ASTALTscore").val(ASTALT.toFixed(3));
        setFibrosisASTALTscore();
    }

}

/**
 * Toggle Ribavirin dose calculator.
 */
function toggleAPRI () {

    $("#apri:checked").length == 1 ? $("#apriCalc").slideDown() : $("#apriCalc").hide(400);
}

/**
 * Toggle Ribavirin dose calculator.
 */
function toggleRiba () {

    $("#riba:checked").length == 1 ? $("#ribavirin").slideDown() : $("#ribavirin").hide(400);
}

/**
 * Display message in a modal window.
 * @param {String} message
 * @param {Number} timeout
 */
function blockMessage(message,timeout) {

    if (timeout === undefined) timeout = 3000;
    $.blockUI({ 
        message: message, 
        css: {
            border: 'none',
            top: '100px',
            padding: '10px 20px',
            backgroundColor: 'rgba(255, 255, 255, 1)',
            '-webkit-border-radius': '10px',
            '-moz-border-radius': '10px',
            'border-radius': '10px',
            color: '#000'
        },
        timeout: timeout,
    });
}

/**
 * Set text color to red.
 * @param {String} text
 * @returns {String}
 */
function redText(text) {

    return '<span class="red">' + text + '</span>';
}

/**
 * Set text color to green.
 * @param {String} text
 * @returns {String}
 */
function greenText(text) {

    return '<span class="green">' + text + '</span>';
}

/**
 * Show error dialog modal window.
 * @param {String} text
 * @param {String|Element} e
 */
function errorDialog(text,e) {

    $('#error').html(redText(text)).dialog({
        title: "Error",
        modal: true,
        open: function(event, ui) { $('.ui-widget-overlay').bind('click', function(){ $("#error").dialog('close'); $(e).select().focus() } ) }
    })
};

/**
 * Show grading system information.
 */
function evidence() {
    if ($("input[name=guidelines]:checked").val() == 'AASLD') {
        $("#gradingAASLD").dialog({
            title: 'AASLD Grading System Used For Guidelines',
            width: "80%",
            modal: true,
            open: function(event, ui) { $('.ui-widget-overlay').bind('click', function(){ $("#gradingAASLD").dialog('close') } ) }
        });
    }
    else {
        $("#gradingEASL").dialog({
            title: 'EASL Grading System Used For Guidelines',
            width: "80%",
            modal: true,
            open: function(event, ui) { $('.ui-widget-overlay').bind('click', function(){ $("#gradingEASL ").dialog('close') } ) }
        });
    }
}

