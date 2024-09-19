function List() {

    const numbers = [12 ,1, 32, 421, 53, 123, 464]

    function changeNumbers(list) {
        const result = list.filter((element)=> element < 100)

        return result
    }

    return <div>
        {changeNumbers(numbers).sort().map((element, index)=>{return <span key={index}>{element}, </span>})}
    </div>

}

export default List

