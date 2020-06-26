import React from 'react';

export default class SearchBox extends React.Component {

state = {
    searches: 0,
    found: false,
    value: 0,
    // array: [89, 30, 25, 32, 72, 70, 51, 42, 25, 24, 53, 55, 78, 50, 13, 40, 48, 32, 26, 2, 14, 33, 45, 72, 56, 44, 21, 88, 27, 68, 15, 62, 93, 98, 73, 28, 16, 46, 87, 28, 65, 38, 67, 16, 85, 63, 23, 69, 64, 91, 9, 70, 81, 27, 97, 82, 6, 88, 3, 7, 46, 13, 11, 64, 76, 31, 26, 38, 28, 13, 17, 69, 90, 1, 6, 7, 64, 43, 9, 73, 80, 98, 46, 27, 22, 87, 49, 83, 6, 39, 42, 51, 54, 84, 34, 53, 78, 40, 14, 5],
    array: [1, 2, 3, 5, 6, 6, 6, 7, 7, 9, 9, 11, 13, 13, 13, 14, 14, 15, 16, 16, 17, 21, 22, 23, 24, 25, 25, 26, 26, 27, 27, 27, 28, 28, 28, 30, 31, 32, 32, 33, 34, 38, 38, 39, 40, 40, 42, 42, 43, 44, 45, 46, 46, 46, 48, 49, 50, 51, 51, 53, 53, 54, 55, 56, 62, 63, 64, 64, 64, 65, 67, 68, 69, 69, 70, 70, 72, 72, 73, 73, 76, 78, 78, 80, 81, 82, 83, 84, 85, 87, 87, 88, 88, 89, 90, 91, 93, 97, 98, 98],
}



linearSearch = (array, value) => {
    let number = parseInt(value)
    let searchNum = 1;
    for(let i = 0; i < array.length; i++) {
        
        if(array[i] !== number) {
            searchNum++
        }
        else if(array[i] === number) {
            
            this.setState({
                searches: searchNum,
                found: true
            })
            return i;
        }
    }
    this.setState({
        searches: searchNum,
    })
    return -1;
}

binarySearch = (array, value, searches, start, end) => {
 
    let number = parseInt(value);
    let searchNum = searches;
    start = start === undefined ? 0 : start;
    end = end === undefined ? array.length : end;

    if(start > end) {
        return -1;
    }

    const index = Math.floor((start + end) / 2);
    const item = array[index];

   
    if(item == number) {
        return index;
    }
    else if(item < number) {
        this.setState({
            searches: searchNum
        })
        return this.binarySearch(array, number, searchNum + 1, index + 1, end);
    }
    else if(item > number) {
        this.setState({
            searches: searchNum
        })
        return this.binarySearch(array, number, searchNum + 1, start, index -1);
    }
    
}

handleSubmit = (e) => {

    e.preventDefault();
    this.setState({
        found: false,
        searches: 0
    })
    const value = this.state.value;
    const array = this.state.array;
    const searches = this.state.searches;
    // this.linearSearch(array, value)
    this.binarySearch(array, value, searches)


}

updateSearch = (value) => {

    this.setState({
        value: value
    })
}


    render() {

  const searchNumber = this.state.searches;
  const message = `found? ${this.state.found}`

    return (
        <div>
            <form onSubmit={e => this.handleSubmit(e)}>
            <input
            type="text"
            name="search"
            id="search"
            onChange={e => this.updateSearch(e.target.value)}
            />
            <button type="submit">Test</button>
            </form>
            
    <p>{searchNumber}</p>
    <p>{message}</p>
        </div>

    )
    }
}