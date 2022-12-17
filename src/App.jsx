import {useRef} from 'react' ;
import './App.css'

import { connect } from "react-redux";
import {useDispatch} from "react-redux"
import UserInfo from "./UserInfo";
import { thunk_action_creator } from "./actions/fetchAction";

function App(props) {

  const inputRef = useRef(null);
  const dispatch = useDispatch() ;

  const  handleSubmit = e => {
    e.preventDefault();
    const username = inputRef.current.value;
    // console.log(username);
    props.dispatch(thunk_action_creator(username));
    console.log(username);
    // username = "" ;
  };
  console.log(props.data)
  return (
    <div className="container">
        <form onSubmit={handleSubmit} className="form">
          <h2 className="title">Enter the Github Username</h2>
          <input
            type="text"
            placeholder="Enter Github Username"
            required
             ref={inputRef}
          />
          <button className="button">Submit</button>
        </form>
        {props.data.isFetching ? <h3>Loading...</h3> : null}
        {props.data.isError ? (
          <h3 className="error">No such User exists.</h3>
        ) : null}
        <UserInfo user={props.data.userData} />
          
      </div>
  )
}

const mapStateToProps = state => {
  return {
    data: state
  };
};
export default connect(mapStateToProps)(App);

