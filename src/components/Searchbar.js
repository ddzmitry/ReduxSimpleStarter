import React, {Component} from 'react'

class Searchbar extends Component {

    // constructor(props){
    //     super(props)
    //     this.state = { term : ''};
    // }
    state = { term : ""}
    render() {
        return (
            <div className="search-bar">
                <form>
                    <label>
                        Name:
                        <input type="text" name="name"                       
                         value = {this.state.term}
                         onChange={ event => this.onInputChange(event.target.value) } />
                    </label>
                
                </form>
            </div>
        );
    }

    onInputChange(term) {
// getting the value from input field! 
        this.setState({term})
       this.props.onSearchTermChange(term)
    }
    

}

export default Searchbar;
