/*eslint-disable */
import React, { useEffect, useState } from 'react'


import {useDispatch} from "react-redux"

import {searchQuery} from "../../services/UserService";
const Search = () => {
    let dispatch = useDispatch()
    let [search, setSearch] = useState("")
let searchFun = async () => {
let result = await searchQuery(JSON.stringify(search));
console.log(result.data)
}
  return (
    <>
                    <div className="shop__widget">
                                <h4 className="shop__widget-title">search</h4>
                                <div className="shop__widget-inner">
                                    <div className="shop__search">
                                        <input type="text" placeholder="Search here" onChange={(e)=>setSearch(e.target.value)} />
                                        <button className="p-0 border-0"><i className="flaticon-search" onClick={searchFun}></i></button>
                                    </div>
                                </div>
                            </div>
    </>
  )
}

export default Search