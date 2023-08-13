export default function Button({text, onClick, showAdd}){
    return (
        <button onClick={onClick} className={showAdd ? 'btn btn-danger' : 'btn btn-warning'} >{text}</button> 
    )
}

