const dataChecker = (string, rank) => {
    if (string == "codenation" && rank == 1){
        console.log("String and rank are correct")
    } else if (string == "codenation" && rank > 1){
        console.log("String is correct but rank is wrong")
    } else {
        console.log("String is wrong")
    }
}

dataChecker("codenation", 2)
dataChecker("codenation", 1)
dataChecker("code", 2)