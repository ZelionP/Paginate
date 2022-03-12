const paginate = (users) =>{
    const itemsPerPage = 9
    const numOfPages = Math.ceil(users.length/itemsPerPage)

    const formatetUser = Array.from({length:numOfPages},(item,index) =>{
        const start = index * itemsPerPage
        return users.slice(start, start + itemsPerPage)
    }) 

    return formatetUser
}

export default paginate