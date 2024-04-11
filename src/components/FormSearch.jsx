import { useContext, useState } from "react"
import { DataContext } from "../context/DataContext"

const FormSearch = () => {
    const [title, setTitle] = useState("")
    const {setQuery, error} = useContext(DataContext)
//usamos el useContext para recuperar esos estados que hicimos en dataContext

    const handleSubmit = (e) => {
        e.preventDefault()
        setQuery(title)
        console.log("title", title);
    }

  return (
    <div className="form-search">
        <h2>Old Movies Finder</h2>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='Title Search...' onChange={(e) => setTitle(e.target.value)}/>
            <input type="submit" value="Search" />
        </form>
        {error && <p className="error">The Movie doesn't exist</p>}
    </div>
  )
}

export default FormSearch