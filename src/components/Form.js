import React, {Component} from 'react'

class Form extends Component {
    state={
        amount: '',
        term: ''
    }

    onChange  = (e) =>{
        this.setState({[e.target.name]: Number(e.target.value)})
    }
    onSubmit = (e)=> {
        e.preventDefault()
        const {amount, term} = this.state

        this.props.loanInformation(amount, term)

    }

    validateForm = ()=>{
      const {amount, term} = this.state;
      const notValid = !amount || !term;

    return notValid
    }
    render(){
        const {amount, term} =this.state
        return (
            <div>

                <form onSubmit={this.onSubmit}>
                   <div className="row">
                       <label >Amount</label>
    
                   <input 
                    name="amount"
                    id="name" 
                    placeholder='Eg: 3000' 
                    type="number"
                    onChange={this.onChange}
                      className='u-full-width'/>
    
                   </div >
                   <div className='row'>
    
                        <label >Terms in Months</label>
                    <select name='term'  onChange={this.onChange} className='u-full-width' >
                        <option value="">Select</option>
                        <option value="3">3 Months</option>
                        <option value="6">6 Months</option>
                        <option value="12">12 Months</option>
                        <option value="24">24 Months</option>
                    </select>
                   </div>
                    <div>
                    <input
                    disabled={this.validateForm()}
                    type="submit"  value='Calculate' name="" id=""
                     className='u-full-width button-primary'/>
    
                    </div>
                </form>
            </div>
    )
}
}

export default Form
