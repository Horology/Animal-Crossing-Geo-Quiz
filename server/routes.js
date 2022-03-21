import axios from 'axios';

const ACNH_url = `https://api.nookipedia.com/villagers?api_key=${process.env.REACT_APP_ACNH_API_KEY}&name=`; 

const villager_id_url = 'http://acnhapi.com/v1/villagers/';

export const getVillagers = async (req, res) => {
    let rand = Math.floor(Math.random()*391)
    const response = await axios.get(`${villager_id_url}${rand}`);
    const name = response.data.name["name-USen"];
    const villager = await axios.get(`${ACNH_url}${name}`)
    console.log(villager)
    res.json(villager.data)

};
