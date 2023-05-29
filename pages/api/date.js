export default function datehandler (request, response){
    const today = new Date()
    let year = today.getFullYear();
    let month = ('0' + (today.getMonth() + 1)).slice(-2);
    let day = ('0' + today.getDate()).slice(-2);
    let dateString = year + '년' +' '+ month + '월' + ' ' + day + '일';
    response.status(200).json(dateString)
}