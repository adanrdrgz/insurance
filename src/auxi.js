//get year difference
export function getYearDif(year) {
    return new Date().getFullYear() - year;
}

//calculates cost according to brand

export function brandCost(brand){
    let increase;

    switch(brand) {
        case 'European':
            increase = 1.3;
            break;
        case 'American':
            increase = 1.15;
            break;
        case 'Asian':
            increase = 1.05;
            break

        
        default:
            break;
    }

    return increase;
}

//according to insurance 
export function getInsurance(insurance){
    return (insurance === 'Basic') ? 1.2 : 1.5;
}