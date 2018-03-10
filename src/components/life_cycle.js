import React,{PureComponent} from 'react';

class LifeCycle extends PureComponent {
    // 1 get default props
    // 2 set default state
    state= {
        title:'Life cycles'
    }
    // 3 before render
    componentWillMount(){
        console.log('3 before render');
        // document.querySelector('h3').style.color='red';  will not work, because before render
    }
    componentWillUpdate() {
        console.log('before update')
    }
    componentDidUpdate() {
        console.log('after update')
    }

    shouldComponentUpdate(nexProps,nextState){
        console.log(this.state.title);  // previous state 
        console.log(nextState);         // next state
        //return true; // then goes to before render, render & after update
        //return false; //don't rerender
        if(nextState.title!==this.state.title){       //prevents rendering again if it is not needed
            return false                             // not needed because of PureComponents
        }
        return true;  // rerender app
    }

    componentWillReceiveProps() {
        console.log('before receive props');    // passing props (reload etc.)
    }

    componentWillUnmount() {
        console.log('unmount');   // e.g. if user left current site -> leaves this component
    }

    // 4 render jsx

    render() {
        console.log(this.props.name)
        console.log('Render');
        return(
            <div>
                <h3>{this.state.title}</h3>
                <div onClick={
                    ()=> this.setState( {
                        title:'something else'
                    })
                }>change state</div>
                <h4>{console.log(this.props)}</h4>
            </div>
        )
    }

    // 5 after jsx
    componentDidMount() {
        console.log('5 after render');
    }
}

export default LifeCycle;