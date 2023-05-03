/*eslint-disable */
import {useDispatch} from "react-redux"
import { getSearchRedux} from "../../Redux/SearchReducer"
import {getEmptySearchRedux} from "../../Redux/EmptySearchReducer"

import {searchQuery} from "../../services/UserService";
const Search = () => {
    let dispatch = useDispatch()
    let checkChange = async (value) => {
      let result = await searchQuery(JSON.stringify(value));
      if(result.data.status) {
        if(result.data.status == 404 && value != undefined) {
          dispatch(getEmptySearchRedux(true))
        }else {
          dispatch(getEmptySearchRedux(false))
          dispatch(getSearchRedux(result.data));
        }
      }
    }
  return (
    <>
                    <div className="shop__widget">
                                <h4 className="shop__widget-title">search</h4>
                                <div className="shop__widget-inner">
                                    <div className="shop__search">
                                    <input
                                    type="text"
                                    placeholder="Search here"
                                    onChange={(e) => checkChange(e.target.value)}
                                  />
                                        <button className="p-0 border-0"><i className="flaticon-search"></i></button>
                                    </div>
                                </div>
                            </div>
    </>
  )
}

export default Search