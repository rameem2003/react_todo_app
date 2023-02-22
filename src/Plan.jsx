const Plan = (props) => {
    return<>
        <li className="p-2 bg-white rounded my-3 col-sm-9">{props.value}</li>

        <button className="btn btn-danger my-2 col-sm-2 offset-1" onClick={() => {props.sendData(props.id)}}>X</button>
    </>
}

export default Plan;