import React from 'react';
import './Search.css';
import fetchResultsAction from '../../components/fetchResults.js';
import Header from '../../components/Header.js'
import Results from '../../components/Results.js'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getResultsError, getResults, getResultsPending } from '../../reducers/resultsReducer.js';
import InputButton from '../../components/InputButton.js';
import Toggle from '../../components/Toggle';

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            theme: 'light',
            searchedText: ''
        }

    }

    handleToggle = () => {
        const theme = this.state.theme === 'dark' ? 'light' : 'dark';
        this.setState({ theme });
        document.documentElement.setAttribute("data-theme", theme);
    }

    handleSearch = (e) => {
        this.setState({ searchedText: e.target.value })
    }

    handleSubmit = () => {
        const { fetchResults } = this.props;
        fetchResults(this.state.searchedText);
    }

    handleKeyPress = (e) => {
        const { fetchResults } = this.props;
        if(e.key === 'Enter'){
            fetchResults(this.state.searchedText);
          }
    }

    render() {

        const { results, error, pending } = this.props.results;
        const { theme } = this.state;
        return (
            <div>
                <Header />
                <Toggle theme={theme} handleToggle={this.handleToggle} />
                <InputButton theme = {theme} handleKeyPress={this.handleKeyPress} handleSearch={this.handleSearch} handleSubmit={this.handleSubmit} />
                {
                    pending ?
                        <div className="spinner-border loader-color" role="status">
                            <span className="sr-only">Loading...</span>
                        </div> : ''
                }
                {
                    results.length && !pending && !error? <Results results={results} /> : ''
                }
                {
                    !results.length && !pending && error? <span className="no-results">No results found</span> : ''
                }
            </div>
        )
    }
}


const mapStateToProps = state => ({
    error: getResultsError(state),
    results: getResults(state),
    pending: getResultsPending(state)
})

const mapDispatchToProps = dispatch => bindActionCreators({
    fetchResults: fetchResultsAction
}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Search);
