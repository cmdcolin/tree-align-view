render ( { root: 'root',
           branches: [['root', 'a', 1],
                      ['root', 'b', .5],
                      ['a', 'x', .1],
                      ['a', 'y', .2]],
           rowData: { x: 'AAGGCC',
                      y: 'GAAGTC',
                      b: 'GAGGTT',
                      root: '******',
                    },
           parent: document.body } )
