import React, {useState,useEffect} from 'react'
import Textfield from 'components/Textfield';
import { useDebouncedCallback } from 'use-debounce';
import {useDispatch} from "react-redux";
import { onSearch } from './TodoList.slice';
import { removeAccents } from 'utils/helpers';

const Search = () => {
    const [searchValue, setSearchValue] = useState("");
    const dispatch = useDispatch()
    const [searchDebounce] = useDebouncedCallback(text => {
        dispatch(onSearch(text))
    }, 200);

    useEffect(() => {
        searchDebounce(removeAccents(searchValue))
    }, [searchValue])

    return (
        <Textfield 
            placeholder="Search by title, description..."
            onChange={e => setSearchValue(e.target.value)}
            value={searchValue}
            style={{marginBottom: 8}}
        />
    )
}

export default Search;