// * * * * *
// * * * * * 
// * * * * * 
// * * * * * 
// * * * * * 

for(let i = 1; i<=5; i++){
    line = ''
    for(let j = 1; j<=5; j++){
        line = line + ' *'
        // console.log('*')
    }
        console.log(line)
}

for(let i = 1; i<=5; i++){
    line = ''
    for(let j = 5; j>=i; j--){
        line = line + ' *'
        // console.log('*')
    }
        console.log(line)
}


// ite      i       j         line 
// 1        1       5          ' *'
//                  4          ' * *'
//                  3          ' * * *'
//                  2          ' * * * *'
//                  1          ' * * * * *'
//                  0
// 2        2       5         ' *'
//                  4          ' * *'
//                  3          ' * * *'
//                  2          ' * * * *'
//                  1
// 3        3       5          ' *'
//                  4          ' * *'
//                  3          ' * * *'
//                  2
// 4        4       5          ' *'
//                  4          ' * *'
//                  3
// 5        5       5          ' *'
//                  4 
// 6        6 

// * * * * * 
// * * * * 
// * * * 
// * * 
// * 
for(let i = 1; i<=5; i++){
    line = ''
    for(let j = 1; j<=i; j++){
        line = line + ' *'
        // console.log('*')
    }
        console.log(line)
}

// * 
// * * 
// * * * 
// * * * * 
// * * * * * 

