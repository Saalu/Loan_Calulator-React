import React,{Component, Fragment} from 'react';
import './App.css';
import './normalize.css'
import './skeleton.css'
import {calculateTotal} from './helper'
import Form from './components/Form'
import Result from './components/Result';
import Message from './components/Message'
import Spinner from './components/Spinner';
import Launch from './components/Launch';
class App extends Component {

  state={
    amount:'',
    term: '',
    total:'',
    loading:false,
    isLoggedIn:false
  }


loanInformation = (amount, term)=>{
  const total = calculateTotal(amount, term)
 
  this.setState({
   loading:true
  }, () => {
    setTimeout(()=>{
      this.setState({
        amount,
        term,
        total,
        loading:false
      
      })
    },3000)
    
  })
}


componentDidMount(){
  this.setState({
    isLoggedIn:true
  }, ()=>{
    setTimeout(()=>{
      this.setState({isLoggedIn:false})
    },5000)
  })

}


  render() {
    const {amount, term , total, loading, isLoggedIn} = this.state;

    let component;
    if(total === '' && !loading){
      component = <Message/>
    }else if(loading){
      component =<Spinner/>
    }
    
    else{
      component =  <Result
     
      amount={amount}
      term={term}
      total={total}
      />

    }


if(isLoggedIn){
 
      return (<div><Launch/></div>)
 
  }
else{
    return (
  <Fragment>
    <h1 className='messages'>Training on React</h1>

      <div className="container">
      <Form loanInformation={this.loanInformation}/>
     <div className="messages">
    {component}
     </div>
     </div>
     </Fragment>
    )
  }
}

}

export default App;


