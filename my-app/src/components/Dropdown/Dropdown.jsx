function Dropdown(props) {

    const options = props.values.map((option) => <option key={option.abbreviation} value={option.name}>{option.name}</option>)

    return (
        <select id={props.id} onChange={(e) => props.callback(e.target.value)} value={props.value}>
           {options}
        </select>
    )
}

export default Dropdown;