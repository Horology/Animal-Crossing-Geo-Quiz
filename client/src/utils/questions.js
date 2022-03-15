
export const createQuestion = (villager) => {
    if(!villager){
        return(
            <div>Loading</div>
        )
    }
    const { name, birthday_day, birthday_month, clothing, gender, species, quote, sign, ...rest } = villager
    villager = { birthday_day, birthday_month, clothing, gender, species, quote, sign}

    const convertObjectToList = (obj) => {
        return Object.keys(obj).map(function(key){
            let currElement = [key, obj[key]];
            return currElement
        });
    }

    var res = convertObjectToList(villager)


    const rand = Math.floor(Math.random()*res.length)
    const villager_quote = `I always say "${quote}"`

    return `${villager_quote} and my ${String(res[rand][0])} is ${String(res[rand][1])}.`
}




