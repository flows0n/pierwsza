import './PeopleList.css'
import Person from './Person'

function PeopleList() {

    const pList = [{ name: "Jakub", age: 15 }, { name: "Maciek", age: 19 },
    { name: "Leszek", age: 29 }, { name: "Jan", age: 54 }]

    function handleHover(name) {
        console.log("Najechalem na osobe: ", name)
    }

    return <div className="list">{pList.map((person, index) => {
        return <Person person={person} handleHover={() => handleHover(person.name)}>
            <p>paragraf jako dziecko person</p>
        </Person>
    })}</div>
}

export default PeopleList