import "./PeopleList.css"

function Person({ person, handleHover, children }) {
    return <div className="person" onMouseEnter={handleHover}>
        <p>{person.name}</p>
        <p>{person.age}</p>
        {children}
    </div>
}

export default Person