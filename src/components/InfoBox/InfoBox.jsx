function InfoBox({name, showDate}) {

    return <div>
        <p>{name}</p>
        {showDate && <p>19.09.2024</p>}
    </div>
}


export default InfoBox