import Button from '@mui/material/Button';
import { IoSearch } from "react-icons/io5";
const Search=(props)=>{
    return(
        <div className="search d-flex align-items-center">
            <input type="text" className="input" placeholder='Search'/>
            <Button ><IoSearch /></Button>

        </div>

    )
}
export default Search;