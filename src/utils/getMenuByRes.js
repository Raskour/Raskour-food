import resList from "../utils/mockData";
function getRestaurantById(id){
    return new Promise(resolve => {
        setTimeout(() => {
            const res = resList.find((res) => res.data.data.id === id);
            resolve(res);
        }, 1000)
    })
}

export default getRestaurantById;