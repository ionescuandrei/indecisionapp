//Higher order component

import React from 'react';
import ReactDOM from 'react-dom';

const Info=(props)=>(
    <div>
        <h1>Info</h1>
        <p>This info is :{props.info}</p>
    </div>
)
const withAdminWarning = (WrappedComponent)=>{
    return(props)=>(
        <div>
            {props.isAdmin &&<p>This is private info.</p>}
            <WrappedComponent{...props}/>
        </div>
    );
};
const requireAuth=(WrappedComponent)=>{
    return (props)=>(
        <div>
            {props.isAuth ?<WrappedComponent {...props}/>: <h1>You must be Autehnticated</h1>}
            
        </div>
    )
}
const AuthInfo =requireAuth(Info);
const Admininfo = withAdminWarning(Info);
//ReactDOM.render(<Admininfo isAdmin={true} info="These are details."/>, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuth={false} info="These are details."/>, document.getElementById('app'));